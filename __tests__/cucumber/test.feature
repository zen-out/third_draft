Feature: Focus Modal

The focus modal is a tool that allows you to be better focused on your own goals, whatever they may be, and it utilizes the power of social accountability, as well as special education practices, such as setting clear goals, rating effectiveness of those goals as well as sorting tasks by usefulness, importance and difficulty.

This is a tool that can help any student or user, and allows for creative thinking, with a goal in mind.

Feature: title
In order to value this application and its impacts oy life
As a role
I want feature - easy sorting and organizing of tasks

@focusModal @modal
Feature:
  Background: User may have difficulty following through with goals without deadlines.
    Given that the user wants to seriously focus on a goal...

  Scenario:
    Given the user wants to seriously focus on something
    When they want to set a goal with social accountability, or just letting their friends know that they are not ditching them
    Then they should create a problem -> this is also a problem solving tool, so its focusing on things that actually matter to us, then they can set a problem.

  Example:
    Given That the user wants to start on her day and know which web editors to work on and what worked the most...
    When They want to focus on their processes and routines
    Then they can begin by tracking all of their tasks as well as putting a timer on, and later on they can access these tasks.

    Given that the user has set a problem
    When they begin that task, the timer will start
    Then they can either start on that task or they can create a new one.

    Given that the user has just added a problem
    When they add a problem, they task will be added to the beginning
    Then they can add highlights to it and everything

    Given that the user has just finished a task
    When they click finish
    Then the task will be moved to the bottom

    Given that the user wants to know what is most difficult, then they can press on the sort button, which will sort all the tasks into that specific order.
    When they click on next
    Then there will be a cool background transition showing them the next problem.

    Given that the user wants to focus on that specific task
    When they press focus
    Then the entire screen will go blank and the only they see is the specific task they want to complete.

    Given that the user wants to feel motivated
    When they toggle public
    Then the friend will get specific updates about that problem.







