const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Modo de execução do hook (--run)
if (process.argv.includes('--run')) {
  console.log('\n🔍 Executando verificações locais de pre-commit...');

  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

  console.log('-> 1. Verificando lint (Biome)...');
  const lintRes = spawnSync(npmCmd, ['run', 'lint'], { stdio: 'inherit', shell: true });
  if (lintRes.status !== 0) {
    console.error('\n❌ Erro: Lint falhou. Corrija os problemas antes de commitar.');
    process.exit(lintRes.status || 1);
  }

  console.log('\n-> 2. Executando testes unitários (Vitest)...');
  const testRes = spawnSync(npmCmd, ['run', 'test'], { stdio: 'inherit', shell: true });
  if (testRes.status !== 0) {
    console.error('\n❌ Erro: Testes falharam. Corrija os testes antes de commitar.');
    process.exit(testRes.status || 1);
  }

  console.log('\n✅ Todas as verificações de pre-commit foram aprovadas com sucesso!\n');
  process.exit(0);
}

// Modo de instalação do hook
const rootDir = path.resolve(__dirname, '..');
const hooksDir = path.join(rootDir, '.git', 'hooks');

if (!fs.existsSync(hooksDir)) {
  console.log('Diretório .git/hooks não encontrado. Pulando instalação de hooks.');
  process.exit(0);
}

const preCommitHook = `#!/bin/sh
# Zenith Git Pre-Commit Hook (Auto-generated)
node scripts/setup-git-hooks.js --run
`;

const hookPath = path.join(hooksDir, 'pre-commit');

try {
  fs.writeFileSync(hookPath, preCommitHook, { encoding: 'utf8', mode: 0o755 });
  try {
    fs.chmodSync(hookPath, 0o755);
  } catch {}
  console.log('✅ Git hook pre-commit instalado com sucesso em .git/hooks/pre-commit');
} catch (err) {
  console.error('Falha ao instalar git hook:', err.message);
  process.exit(0);
}
