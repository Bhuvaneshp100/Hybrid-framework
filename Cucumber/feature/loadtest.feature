@k6load
Feature: Load Testing API Endpoints

  Background:
    Given I have the API with base URL "https://example.com/api" and HTTP method "POST"

  Scenario Outline: Perform load test with different credentials and parameters
    Given I have the credentials with username "<username>" and password "<password>"
    And I set the request headers "<headerKey>" as "<headerValue>"
    When I perform a load test with <vus> virtual users for <duration> minutes
    Then the response status should be <expectedStatus> for all users
    And the response time should be less than <maxResponseTime>ms for all users

    Examples:
      | username  | password  | headerKey    | headerValue | vus | duration | expectedStatus | maxResponseTime |
      | testUser1  | testPass1  | Content-Type | application/json | 10  | 1        | 200            | 500             |
      # | testUser2  | testPass2  | Authorization| Bearer token123   | 20  | 5        | 200            | 1000            |
      # | testUser3  | testPass3  | Accept       | application/json | 30  | 10       | 200            | 1500            |
