/**
 * Description: This script will notify when the grades have been updated on the SSC
 * Author: Atif Mahmud 
 * Date: 17th December, 2017
 */

var url = "https://ssc.adm.ubc.ca/sscportal/servlets/SRVAcademicRecord?context=html";
var username = 'johnDoe';
var password = 'I<3UBC';

var casper = require('casper').create();
var x = require('casper').selectXPath;

casper.userAgent('Chrome/37.0.2062.120');
casper.start(url);

casper.then(function(){
    this.sendKeys('#username', username);
    this.sendKeys('#password', password);
    casper.capture('screen2.png');
    console.log('Username and password inserted');
});

casper.thenClick(x('//*[@id="login"]/input[6]'), function (){
    casper.capture('screen2.png');
    console.log('Clicked Button');
});

casper.run();

