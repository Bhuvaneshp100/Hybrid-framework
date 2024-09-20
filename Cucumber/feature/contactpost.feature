# @post

# Feature: Account Creation

#   Scenario Outline: Create an account with various scenarios
#     Given the account service is set up
#     When a POST request is made to create an account at url "/accounts" with accountId "<accountId>" and accountName "<accountName>" and initialDeposit "<initialDeposit>"
#     Then the response should match the expected response for accountId "<accountId>"

#     Examples:
#       | accountId   | accountName | initialDeposit | expectedAccountId | expectedAccountName | expectedBalance | expectedStatusCode | expectedErrorMessage                |
#       | 543536      | John Doe    | 1000            | 543536             | John Doe            | 1000             | 201                 |                                      |
#       | invalid      | Jane Doe    | 500             |                    |                      |                 | 400                 | Invalid account ID provided         |
#       | null         | null        | 200             |                    |                      |                 | 400                 | Account ID cannot be null           |
#       | 543537      | Null        | -50             | 543537             | Null                | -50              | 201                 |                                      |
#       |              |              | 0               |                    |                      |                 | 400                 | Account ID cannot be empty          |
#       | 543538      |             | 0               |                    |                      |                 | 400                 | Account Name cannot be empty        |
