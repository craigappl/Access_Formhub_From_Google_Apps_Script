These scripts use the REST Services JSON POST function of formhub.

What does each file do?
1) 'Send_Simple_Email_Message' is a script that sends an email message when a form is submitted with a link for the user to go download the latest submission

SETUP:
Google Apps Setup
1) Open your Google Drive (drive.google.com) and login
2) Click the red create button on the left side
3) Click 'Script' in the menu that pops up
3a) If there is no script, you have to install it by clicking 'Connect more Apps' in the bottom of that menu. Search in the popup box for 'script' and click 'Google Apps Script' - Now, you should have the ability to create a script
4) Click (Create Script for) 'Blank Project' on the left column of the popup box.
5) Delete all code that shows up in the window (it contains the words function myfunction(){})
6) Copy and paste all code from the github script into this Google Script window
7) Edit the email message 'to' field marked by 'XXXXXXXXXX' to send email to the appropriate recipients
8) Save your project by clicking File>Save and give it a meaningful name
9) Publish this script as a webapp Click Publish>Deploy as web app...
YOU MUST USE THE FOLLOWING SETTINGS
Project Version: Type 'Send Email' and click Save New Version
Execute the App as: 'me'
Who has access to the app: 'Anyone, even anonymous'
          Note: This last point is critical and the app will not run if you do not choose to run as anonymous. Formhub's            REST Services do not have any authentication when it sends the form. It just POSTs data to the desired location
10) Click 'Deploy'
11) Copy the URL that pops up by double clicking to highlight all, right clicking and left clicking 'copy'
12) Click OK
13) Click Run>doPost to authorize the app the first time
14) In the popup, click 'Continue'
15) Click 'Accept' in the popup box and Google Apps Setup is complete


Formhub.org Setup
1) Navigate to your form within your formhub account (https://formhub.org/YOURUSERNAME/forms/FORMNAME)
2) Scroll down and click 'REST Services'
3) Click 'JSON POST' in the 'Service Name:' dropdown
4) Right Click and Paste the URL from the Google Apps Script into the 'Service URL:' field
5) Click 'Add Service' and Formhub.org Setup is complete
6) Test the service by submitting a new form and you should receive an email. If there's no email, there may be something wrong

Troubleshooting:
----------------------------------------
Q) I do not receive an email
A1) You may have entered an incorrect email address in the MailApp.send({ portion of the script. Make sure you replace the 'XXXXXXXXXX' in the to: field with the correct email address
A2) The App may not be allowed to run as anonymous. In the script editor, click Publish>Deploy as web app... and make sure you have chosen 'Anyone, even anonymous' in the last dropdown menu 'Who has access to the app:'
----------------------------------------
Q) When I visit the Google Apps Script URL it says 'Script function not found: doGet' 
A) This is normal behavior because this script receives a POST command using the doPost function. Visiting through a browser calls the doGet function which is not appropriate for this purpose.
----------------------------------------
