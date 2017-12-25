/**
 * Description: This script will notify when the grades have been updated on the SSC
 * Author: Atif Mahmud 
 * Date: 17th December, 2017
 */

var url = "https://ssc.adm.ubc.ca/sscportal/servlets/SRVAcademicRecord?context=html";
var username = 'johnDoes';
var password = 'ihunbau';

var casper = require('casper').create();
var x = require('casper').selectXPath;
var fs = require('fs');

casper.userAgent('Chrome/37.0.2062.120');
casper.start(url);

casper.then(function(){
    this.sendKeys('#username', username);
    this.sendKeys('#password', password);
    console.log('Username and password inserted');
});

casper.thenClick(x('//*[@id="login"]/input[6]'), function (){
    console.log('Clicked Button');
    casper.capture('After_Login.png');
});

casper.then(function(){

    var gradeTable = this.getHTML('table#allSessionsGrades', true);
    
    if(!fs.exists('gradeTable.html')){
        fs.write('gradeTable.html', gradeTable, 'w');
    }

});

/* Note take screenshot when new scores available, therefore no need to JSON */
casper.run();


