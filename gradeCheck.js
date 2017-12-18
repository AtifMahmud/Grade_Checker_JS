/**
 * Description: This script will notify when the grades have been updated on the SSC
 * Author: Atif Mahmud 
 * Date: 17th December, 2017
 */


console.log("start");

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var grades = [];

app.get('/scrape', function(res, req){

    console.log("in app.get");
    var url = 'https://ssc.adm.ubc.ca/sscportal/servlets/SRVSSCFramework?function=SessGradeRpt';
    request(url, function(error, response, html){

        console.log("in request");

        if(!error){
            
            console.log("in !error");

            var $ = cheerio.load(html);

            $('#allSessionsGrades td').each(function(){
                var grade = $(this).find('.sortarrow').html();
                grades.push(grade);
                console.log(grade);
            });
        }



    });


});

app.listen('8081');
exports = module.exports = app;