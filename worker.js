const request = require('request');

const getFilingData = (company, callback) => {
  let options = {
    url: `https://www.sec.gov/cgi-bin/browse-edgar?CIK=${company}&owner=exclude&action=getcompany`
  };

  request(options, (err, response, body) => {
    console.log('error:', err);
    console.log('statusCode:', response.statusCode);
    // console.log('body:', body);
    if (err) {
      callback(body, err);
    } else {
      callback(body);
    }
  })
}

const getFilingPage = (url, callback) => {
  let options = {
    url: url
  };

  request(options, (err, response, body) => {
    console.log('error:', err);
    console.log('statusCode:', response.statusCode);
    // console.log('body:', body);
    callback(body);
    if (err) {
      alert('this is an error');
    }
  })
}

module.exports.getFilingData = getFilingData;
module.exports.getFilingPage = getFilingPage;