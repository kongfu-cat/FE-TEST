import * as csv from 'csv/lib/sync';
import fs from 'fs';

// Load
const strcsv = fs.readFileSync('a.csv', 'utf-8');
const data = (csv.parse as any)(strcsv, {
    bom: true,
    cast: false,
    columns: true,
});

// Save
fs.writeFileSync(
    'b.csv',
    (csv.stringify as any)(data, { header: true, quoted: true }),
    'utf-8',
);

// Generate

// Transform
