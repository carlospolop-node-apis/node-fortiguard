# Node Fortiguard

Check in Node for malicious IPs and domains in [fortiguard](https://fortiguard.com)

## Install
`npm install fortiguard`

## How to use

```javascript
const fortiguard = require('fortiguard');


// Use checkIP(<IP>) to check that IP against fortiguard.com
// A promise will be returned
ip = "123.123.123.123";
fortiguard.checkIP(ip).then(function(result){ 
        console.log(result);
    }, function(err) {
        console.log(err);
});

domain = "bandroxoma.com"
fortiguard.checkDomain(domain).then(function(result){ 
        console.log(result);
    }, function(err) {
        console.log(err);
});


/*
Output examples
{ isBlacklisted: true, title: 'Malicious Websites' }
{ isBlacklisted: false, title: 'Malicious Host' }
*/
```
