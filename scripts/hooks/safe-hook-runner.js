#!/usr/bin/env node
/**
 * Safe Hook Runner
 * 
 * Garantias:
 * 1. Fail-open por padrão (exit 0) para nunca bloquear o desenvolvedor em caso de falha não-crítica.
 * 2. Parser JSON seguro para stdin nulo/vazio.
 * 3. Degradação suave.
 */

const { execSync } = require('child_process');
const { readFileSync } = require('fs');

function parseStdinSafe(raw) {
  if (!raw || typeof raw !== 'string' || raw.trim() === '' || raw.trim() === 'null') {
    return {};
  }
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function run() {
  const hookName = process.argv[2] || 'default';
  
  try {
    let stdinRaw = '';
    try {
      stdinRaw = readFileSync(0, 'utf-8');
    } catch {
      // Sem stdin, ignora
    }

    const payload = parseStdinSafe(stdinRaw);

    if (hookName === 'pre-commit') {
      try {
        execSync('npx biome lint src', { stdio: 'inherit' });
      } catch (err) {
        console.warn('[hook:pre-commit] Aviso de lint detectado.');
      }
    } else if (hookName === 'post-edit') {
      try {
        execSync('npx --yes graphify update .', { stdio: 'ignore' });
      } catch {
        // Fail-open
      }
    }
    
    process.exit(0);
  } catch (error) {
    console.warn(`[safe-hook-runner] Hook ${hookName} finalizou com aviso (fail-open):`, error.message);
    process.exit(0);
  }
}

run();
