#!/usr/bin/env node

import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const rootDir = process.cwd();
const entries = readdirSync(rootDir).sort();
const labDirs = entries.filter((entry) => {
  if (entry === 'node_modules' || entry === 'scripts' || entry.startsWith('.')) return false;
  const fullPath = join(rootDir, entry);
  return statSync(fullPath).isDirectory() && existsSync(join(fullPath, 'package.json'));
});

console.log(`\n📦 Installing dependencies for all labs: ${labDirs.join(', ')}\n`);

for (const lab of labDirs) {
  const labPath = join(rootDir, lab);
  console.log(`\n========================================`);
  console.log(`📥 [${lab}] Running npm install...`);
  console.log(`========================================`);

  const result = spawnSync('npm install', {
    cwd: labPath,
    stdio: 'inherit',
    shell: true,
  });

  if (result.status !== 0) {
    console.error(`❌ Failed to install dependencies for ${lab}`);
    process.exit(result.status || 1);
  }
}

console.log('\n✅ All lab dependencies successfully installed!\n');
