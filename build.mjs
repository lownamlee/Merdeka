import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, 'dist');
if (dirname(output) !== root) throw new Error('Build output must stay inside this repository.');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js', 'favicon.ico', 'assets']) {
  await cp(join(root, name), join(output, name), { recursive: true });
}
console.log('Static site prepared in dist/.');
