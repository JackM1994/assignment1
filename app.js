//require csvtojson module
const CSVToJSON = require('csvtojson');

//convert users.csv file to JSON array
CSVToJSON().fromFile('customer-data.csv')
    .then(customers=>{
        //log the customers array
        console.log(customers);
    }).catch(err => {
        //log error 
        console.log(err);
    });