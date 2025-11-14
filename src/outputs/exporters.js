import fs from 'fs';

export function exportData(data, outputPath, format = 'json') {
let output;

switch (format.toLowerCase()) {
case 'json':
output = JSON.stringify(data, null, 2);
break;
default:
throw new Error(`Unsupported export format: ${format}`);
}

fs.writeFileSync(outputPath, output, 'utf-8');
console.log(`Exported ${data.length} records in ${format.toUpperCase()} format.`);
}