/* Formhub TOKEN AUTHENTICATION using Google Apps Script
This Google Apps script demonstrates using TOKEN AUTHENTICATION to interact with the formhub API

formhub API v1 documentation can be found at https://formhub.org/api/v1/?format=api

formhub access point (prior to API v1) information is available at https://github.com/SEL-Columbia/formhub/wiki/Formhub-Access-Points-(API)#api-parameters
Note that basic authentication is the only way to access the formhub's old API (access points) with requests like https://formhub.org/USERNAME/forms/FORMNAME/api

*/

//First set this variable from your formhub developer token and the email addresses 
//Source: https://formhub.org/YOUR_USERNAME/api-token
var token = 'XXXXXXXXXXXXXXXXXXXXX';

function doGet() {
//This function is used to get information from the formhub server into a JSON item 
  
  //We use the URLFetchApp.fetch function to interact with the formhub server
  //Change the URL to access forms, data, etc as recommended by the API documentation
  var fetched_form_string = UrlFetchApp.fetch('https://formhub.org/api/v1/forms',AuthHeaders()).getContentText();
  var forms = JSON.parse(fetched_form_string);//Change the contents of the fetched string to JSON so we can do something with it
  
  Logger.log(forms);//View the log 'View>Logs' to see the results returned from formhub
}

function AuthHeaders(){
  //This function passes the authorization header parameters to the URLFetchApp.fetch function
  
  return {
            "headers" : {
                         "Authorization" : "Token " + token,
                        }
         };
}
