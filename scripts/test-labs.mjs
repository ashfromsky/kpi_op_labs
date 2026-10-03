#!/usr/bin/env node

import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const isLintOnly = process.argv.includes('--lint-only');
const targetLab = args[0];

const rootDir = process.cwd();
const entries = readdirSync(rootDir).sort();
const labDirs = entries.filter((entry) => {
  if (entry === 'node_modules' || entry === 'scripts' || entry.startsWith('.')) return false;
  const fullPath = join(rootDir, entry);
  return statSync(fullPath).isDirectory() && existsSync(join(fullPath, 'package.json'));
});

const labsToRun = targetLab
  ? labDirs.filter((d) => d.toLowerCase() === targetLab.toLowerCase())
  : labDirs;

if (targetLab && labsToRun.length === 0) {
  console.error(`❌ Lab "${targetLab}" not found. Available labs: ${labDirs.join(', ')}`);
  process.exit(1);
}

console.log(`\n🚀 KPI OP Labs - ${isLintOnly ? 'Running Linter' : 'Running Tests'} for: ${labsToRun.join(', ')}\n`);

const results = [];

for (const lab of labsToRun) {
  const labPath = join(rootDir, lab);
  console.log(`\n========================================`);
  console.log(`🧪 [${lab}] Running ${isLintOnly ? 'lint' : 'test'}...`);
  console.log(`========================================`);

  const cmd = isLintOnly ? 'npx eslint ./Exercises' : 'npm test';
  const result = spawnSync(cmd, {
    cwd: labPath,
    stdio: 'inherit',
    shell: true,
  });

  const passed = result.status === 0;
  results.push({ lab, passed, exitCode: result.status });
}

console.log('\n========================================');
console.log('📊 Summary Report:');
console.log('========================================');

let allPassed = true;
for (const { lab, passed, exitCode } of results) {
  if (passed) {
    console.log(`  ✅ ${lab.padEnd(20)} PASSED`);
  } else {
    console.log(`  ❌ ${lab.padEnd(20)} FAILED (exit code: ${exitCode})`);
    allPassed = false;
  }
}
console.log('========================================\n');

if (!allPassed) {
  process.exit(1);
}
