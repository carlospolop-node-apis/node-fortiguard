const request = require('request');


function checkIP(ip){
    var fortObj = { isBlacklisted: false, title: "Not malicious"};
    var promise = new Promise(function(resolve, reject) {

        var url = "https://fortiguard.com/search?q="+ip+"&engine=8";
        request({url: url}, function (error, response, body) {
            if (error) reject(Error("Error using fortiguard: "+error));
            if (body){
                if (body.indexOf("Your signature is blacklisted") != -1){
                    fortObj.isBlacklisted = true;
                    fortObj.title = (body.match(/(Malicious \w+)</) && body.match(/(Malicious \w+)</).length > 1) ? body.match(/(Malicious \w+)</)[1] : "Malicious Host";
                }
                resolve(fortObj);
            }
        });
    });
    return promise;
}


function checkDomain(domain){
    var fortObj = { isBlacklisted: false, title: "Not malicious"};
    var promise = new Promise(function(resolve, reject) {

        var url = "https://fortiguard.com/webfilter?q="+domain;
        request({url: url}, function (error, response, body) {
            if (error) reject(Error("Error using fortiguard: "+error));
            if (body){
                if (body.indexOf("Category: Malicious") != -1){
                    fortObj.isBlacklisted = true;
                    fortObj.title = (body.match(/(Malicious \w+)</) && body.match(/(Malicious \w+)</).length > 1) ? body.match(/(Malicious \w+)</)[1] : "Malicious Host";
                }
                resolve(fortObj);
            }
        });
    });
    return promise;
}

exports.checkIP = checkIP;
exports.checkDomain = checkDomain;

