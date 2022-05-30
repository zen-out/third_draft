Feature: Login through gmail 

  Scenario: User wants to login

  Given that the user has already registered 
  And they are not currently logged in 
  When they hit the login page
  And they want to login quickly
  Then they can utilize the google email or github login button
  And be able to login

  Scenario: E2E

  # https://github.com/don-smith/reka/blob/master/tests/e2e/integration/signin.spec.js
  
  When the user visits the signin page 
  Given that they are registered 
  And they enter their email and password 
  And click on the sign_in_button
  Then the website should redirect them to dashboard