import RNFS from 'react-native-fs';
import Papa from 'papaparse';

// Define the path to your CSV file
const filePath = RNFS.DocumentDirectoryPath + '/data.csv';

// Read the CSV file
RNFS.readFile(filePath)
  .then((content) => {
    // Parse the CSV data using Papaparse
    const result = Papa.parse(content, { header: true });
    // Access parsed data in 'result.data'
    console.log(result.data);
  })
  .catch((error) => {
    console.error('Error reading CSV file:', error);
  });
