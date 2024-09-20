# Feature: Example feature

#     @demo
#     Scenario: Example scenario
#         Given I have an example
#         When I run the example
#         Then I should see the example work


 # Examples:
    #   | client_id    | client_secret    | responseType    | method |
    #   | my_client_id | my_client_secret | successResponse | GET    |
    # | invalid_id    | invalid_secret   | badRequestResponse  | POST   |
    # | invalid_id    | invalid_secret   | unauthorizedResponse| POST   |
    # | my_client_id  | my_client_secret | notFoundResponse    | DELETE |
# Feature: API Contract Testing with Various HTTP Methods
#   Scenario: Validating GET request to API endpoint
#     Given User Hit contractTest API endpoint is "/api/resource"
#     When User Modify the contractTest request with the following parameters:
#       | client_id    | client_secret    |
#       | my_client_id | my_client_secret |
#     And User Add the contractTest header to the request with the following parameters:
#       | HeaderName   | HeaderValue      |
#       | Content-Type | application/json |
#     And User Set expected status 200
#     And User Set expected response body to
#       """
#       {
#         "success": true
#       }
#       """
#     Then User Hit the Contract API call with Method "GET"
#   Scenario: Validating POST request to API endpoint
#     Given User Hit contractTest API endpoint is "/api/resource"
#     When User Modify the contractTest request with the following parameters:
#       | client_id     | client_secret    |
#       | my_client_id  | my_client_secret |
#     And User Add the contractTest header to the request with the following parameters:
#       | HeaderName    | HeaderValue      |
#       | Content-Type  | application/json |
#     And User Set expected status 201
#     And User Set expected response body to
#       """
#       {
#         "success": true
#       }
#       """
#      Then User Hit the Contract API call with Method "POST"
#   Scenario: Validating PUT request to API endpoint
#     Given User Hit contractTest API endpoint is "/api/resource"
#     When User Modify the contractTest request with the following parameters:
#       | client_id     | client_secret    |
#       | my_client_id  | my_client_secret |
#     And User Add the contractTest header to the request with the following parameters:
#       | HeaderName    | HeaderValue      |
#       | Content-Type  | application/json |
#     And User Set expected status 200
#     And User Set expected response body to
#       """
#       {
#         "success": true
#       }
#       """
#     Then User Hit the Contract API call with Method "PUT"
#   Scenario: Validating PATCH request to API endpoint
#     Given User Hit contractTest API endpoint is "/api/resource"
#     When User Modify the contractTest request with the following parameters:
#       | client_id     | client_secret    |
#       | my_client_id  | my_client_secret |
#     And User Add the contractTest header to the request with the following parameters:
#       | HeaderName    | HeaderValue      |
#       | Content-Type  | application/json |
#     And User Set expected status 200
#     And User Set expected response body to
#       """
#       {
#         "success": true
#       }
#       """
#     Then User Hit the Contract API call with Method "PATCH"
#   Scenario: Validating DELETE request to API endpoint
#     Given User Hit contractTest API endpoint is "/api/resource"
#     When User Modify the contractTest request with the following parameters:
#       | client_id     | client_secret    |
#       | my_client_id  | my_client_secret |
#     And User Add the contractTest header to the request with the following parameters:
#       | HeaderName    | HeaderValue      |
#       | Content-Type  | application/json |
#     And User Set expected status 200
#     And User Set expected response body to
#       """
#       {
#         "success": true
#       }
#       """
#     Then User Hit the Contract API call with Method "DELETE"
