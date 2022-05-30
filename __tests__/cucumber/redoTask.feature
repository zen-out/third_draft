Feature: When you come across a similar problem...

  Scenario: A user has been coding for a while and she keeps running into the same problem. e.g., post request

    Given that the user has been using the application for at least an iteration
    And they have logged their thinking steps
    When they come across a similar problem with a similar technology stack (e.g., tag)
    Or when its a similar time of the year
    Then the app will trigger a notification saying that they have worked on a similar problem before, would you like to see it?
    And if they do, then they can see the specific problem and corresponding cheatsheet and tasks related to it
    And feel good about using the application
    And feel good about their ability to solve problems


  Scenario: User Flow (handlebars jquery axios)

    Given one problem logged
    And they are plugging in another problem or task
    Then the input will dropdown of previous problems they have worked on
    And show button to the project the person has worked on before
