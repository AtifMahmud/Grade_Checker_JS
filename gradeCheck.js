/**
 * Description: This script will notify when the grades have been updated on the SSC
 * Author: Atif Mahmud 
 * Date: 17th December, 2017
 */


console.log("Welcome to Grade Checker 0.0.1");

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var grades = [];

app.get('/scrape', function(res, req){

    console.log("Please wait while we retrieve the information");

    var url = 'https://cas.id.ubc.ca/ubc-cas/login?TARGET=https%3A%2F%2Fssc.adm.ubc.ca%2Fsscportal%2Fservlets%2FSRVSSCFramework';
    request(url, function(error, response, html){

        if(!error){
            var $ = cheerio.load(html);
                var tree = $;
                console.log(tree('h1').html());
        } else {
            console.log("Sorry, we encountered an error. Please try again.")
        }

    });
});

app.listen('8081');
exports = module.exports = app;