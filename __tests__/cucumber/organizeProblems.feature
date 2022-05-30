Feature: Organize and think through your problems

  Scenario: User feels stuck on something

    If the user has been stuck on a problem
    Given that the user is registered
    And they feel like they could allocate more thinking time to the problem
    When they feel stuck, upset, confused, hungry or sad
    And they are not sure why, or think they know why
    Then they should come and fill out the problem form
    And fill out the cheatsheet
    And start a task to get things going
    And this problem could be shared with friends (if they would like, or they can keep it private)


  Scenario: User Flow (handlebars jquery axios)

    Given that the user has posted at least a problem on dashboard
    And the problem is marked as important
    And has a clear deadline
    Then the app will gently remind them that this problem seems important, would you like to start the task and quickly show the task button, itll only be 25 minutes
    And ideally they would accept and start a task, feeling better about themselves. they could perhaps even choose art (flickr gallery here, to allow themselves to be inspired) maybe quotes and art here
    And quotes will show
    And perhaps they can even choose their own art
    And organized by difficulty
