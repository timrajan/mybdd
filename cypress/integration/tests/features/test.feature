Feature:Testing Tasks

  Scenario: User Registration
    Given that the website is loaded and user registration is possible
    When a user registers by filling out only the mandatory fields
    Then the newly registered user is able to log back in    