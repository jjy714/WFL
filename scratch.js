const csvtojson = require('csvtojson');
const fs = require('fs');

// Read CSV file and convert to JSON
csvtojson()
  .fromFile('WFL/data/food_data.csv')
  .then((jsonObj) => {
    // Write JSON to a file
    fs.writeFileSync('food_data.json', JSON.stringify(jsonObj, null, 2));
    console.log('Conversion complete');
  })
  .catch((err) => {
    console.error('Error:', err);
  });
