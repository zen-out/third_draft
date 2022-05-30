Feature: Create User

  Clients should be able to send a request to our API in order to create a user. Our API should also validate the structure of the payload and respond with an error if it is invalid.

  Scenario: Empty Payload

  If the client sends a POST request to api/post/user with a unsupported payload, it should receive a response with a 4xx status code.

  When the client creates a POST request to api-post-user
  And attaches a generic empty payload
  And sends the request
  Then our API should respond with a 400 HTTP status code
  And the payload of the response should be a JSON object
  And contains a message property which says "Payload should not be empty"

  Scenario: E2E Testing 

  Given that the user does not exist yet
  When the user has inputted valid email and password
  Then the database will utilize the bcrypt library and generate a hash 
  And post the user and return status code 200 
  Then the user will be redirected to the dashboard page 
