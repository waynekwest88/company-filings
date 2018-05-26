const request = require('request');

const getFilingData = (company) => {
  let options = {
    url: `https://www.sec.gov/cgi-bin/browse-edgar?CIK=${company}&owner=exclude&action=getcompany`
  };

  request(options, (err, response, body) => {
    console.log('error:', err);
    console.log('statusCode:', response.statusCode);
    console.log('body:', body);
  })
}

module.exports.getFilingData = getFilingData;