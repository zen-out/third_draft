Feature: Think out loud, how are you thinking?

  Scenario: The user has been working on a problem for quite some days and they are just stuck

    If they are really stuck on a problem
    Given that they have filled out the forms and tasks
    And they just want to clear their head a little more
    When they feel stucked or tired or hungry
    And they want to keep going
    Then a rubber duck will waddle on the screen
    And ask, "hey, whats the big idea?" in a mika voice
    And a voice bot chat will come up and ask them to explain what they are thinking
    And the voice bot will simply respond with sympathetic mms okay, and perhaps a question or two
    And give some love to the user


  Scenario: User Flow (handlebars jqery axios)

    Given that they have logged at least one task
    And they have not solved the problem or reached the deadline
    Then a rubber duck will show up on the screen, gently reminding them to keep their head up
    And the rubber duck will ask them regular questions like have you eaten, drank water, slept enough
    And ask them to explain what they are thinking
    And give them extra prompts, perhaps pull up data from the past (Search would be helpful here, showing them potential tags that they could utilize. )

  Scenario: Database

    Given they have at least one task
    And the problem deadline is coming up within two days
    Then a notification will show on the screen, saying, remember this problem?