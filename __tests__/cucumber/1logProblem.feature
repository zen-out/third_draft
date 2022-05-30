Feature: Log Problem
  Scenario: user feels bad about being cancelled on
    Given that a negative event happened to lesley
    When someone else cancels on her
    Then add a problem, as to why that problem happened

  Scenario: users crush wont text her back
    Given that a negative event happened to lesley
    When someone else cancels on her
    Then add a problem, as to why that problem happened

  Scenario: User Flow (handlebars jquery axios)

    Given login and registered
    And they want to be able to think through a problem
    Then they can trigger a thinking tool or add a new problem
    And they can then keep track of their problems by adding keywords (tags)
    And they can feel better

  Scenario: E2E


    Given that the user has logged in
    When they are on the dashboard page
    Then they should see their problems array