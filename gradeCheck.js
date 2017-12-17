/**
 * Description: This script will notify when the grades have been updated on the SSC
 * Author: Atif Mahmud 
 * Date: 17th December, 2017
 */

var url = "https://ssc.adm.ubc.ca/sscportal/servlets/SRVSSCFramework?function=SessGradeRpt";


/* Logs in to the Grades portal */
window.open(url, "_self");

setTimeout(callback, 2000);

function callback(){
var loginNameBox = document.getElementById("username");
var passwordBox = document.getElementById("password");
var loginName = prompt("Please enter login name");
var password = prompt("Please enter password");
loginNameBox.value = loginName;
passwordBox.value = password;
var continueButton = document.getElementsByClassName("ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only btn")[0]; 
continueButton.click();
}
