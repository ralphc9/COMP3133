const fs = require('fs');
const csv = require('csv-parser');

['canada.txt', 'usa.txt'].forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`${file} deleted.`);
  }
});

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (row.country.toLowerCase() === 'canada') {
      fs.appendFileSync('canada.txt', `${row.country},${row.year},${row.population}\n`);
    } else if (row.country.toLowerCase() === 'united states') {
      fs.appendFileSync('usa.txt', `${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });
