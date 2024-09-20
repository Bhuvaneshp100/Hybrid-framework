Feature: Account Service API

  Scenario Outline: Retrieve account details with dummy data
    Given User sets the API endpoint "http://localhost:1234/accounts" and prepares interaction for account "12345"
   # Then user validate "<statuscode>" and "<expectedresult>"

    Examples:
      | accountId | statuscode | expectedresult |
      |    999999 |        200 | John Doe       |
      |    543533 |        200 | John Doe       |
