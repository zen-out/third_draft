Feature: Feature name
  In order to utilize an input well
  As a user i want to be able just to toggle things and have it update
  I want feature toggleable input

  Scenario: adding a task
    Given that the user wants to be able to add a task
    When they initially add a task
    Then they can see the problems and the tasks with them

  Scenario: adding a tag snippet
    Given that the user wants to be able to quickly create a tag snippet
    When they add a tag
    Then they can immediately see it (given the callback?)

  Scenario: adding a note?
    Given that the user may want to add a note to their problem, task or
    When they add a note
    Then the note will automatically be saved to the backend

  Scenario: adding a title to the modal
    Give that the user may want to set a goal
    When they click on the plus sign
    Then they can create a goal that will send to the backend and update the task