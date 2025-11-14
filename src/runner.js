import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseThreadsProfile } from './extractors/threads_profile_parser.js';
import { exportData } from './outputs/exporters.js';
import { loadSettings } from './config/settings.example.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
try {
const inputPath = path.join(__dirname, '../data/input.sample.json');
const inputRaw = fs.readFileSync(inputPath, 'utf-8');
const usernames = JSON.parse(inputRaw);

const results = [];
for (const username of usernames) {
console.log(`Processing @${username} ...`);
const profile = await parseThreadsProfile(username);
results.push(profile);
}

const outputFile = path.join(__dirname, '../data/sample_output.json');
exportData(results, outputFile, loadSettings.defaultExportFormat || 'json');

console.log(`\nDone! Saved to ${outputFile}`);
} catch (err) {
console.error('Runner error:', err);
process.exit(1);
}
}

main();