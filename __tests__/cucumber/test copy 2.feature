Feature: Timer Modal
  Scenario: when you want to focus on tasks exclusively
    Given that i want to set a super focus mode
    When you open the modal
    Then all the tasks should load

    Given that I want to categorize tasks
    When I click on the category
    Then it should change and reload the modal

    Given that I want an accurate depiction of the time that I spent on my tasks
    When I load the initial modal
    Then the timer for the problem and the task should begin

    Given that I want to ensure that the tasks are loaded accurately
    When I press on the category
    Then the tasks should load in the order i'd like them to load in (importance, difficulty or usefulness)

    Given that I want to be motivated to complete more tasks, and at least feel that these tasks are really mine
    When I complete a task, or reach the modal end
    Then I should get a popup modal telling me what a good job I've done, perhaps even allowing me to send a

    Given that I want to be able to organize my tasks better, as well as utilize them in the future
    When I look at my completed tasks, perhaps I can add them to tag snippets?
    Then when I create another task... would the different tasks load on to them?

    Given that I want to have a super focus option
    When I complete a specific problem
    Then it should load to the next problem

    Given that I want to be able to toggle a task's importance and such it should reload the modal again


    Given that I want to track time accurately
    When I mark a task as done
    Then it should automatically stop the timer and tell me how much time I've spenton this task

    Given that I want things to speed up
    When I add a task
    Then the task should also load onto the screen

    Given that I want to ensure that I can speed up my efficiency


    Given that I want to ensure that the user can get breaks accordingly
    When I reach a specific time
    Then the modal will be like hey wanna take a break