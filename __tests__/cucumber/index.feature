Feature: Feature name
  In order to make posting data easier
  As a developer, i want to create a widget that allows user to toggle the input

  Scenario: Be able to pass in an element and option object
    Given that the developer has passed in a slector and an object
    When the document loads, it will instantiate that input (appending to it )
    Then it will, on save or enter, will send the data to axios
