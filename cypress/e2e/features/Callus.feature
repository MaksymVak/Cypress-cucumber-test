Feature: Call Us - link testing

    Checking the visibility of phone numbers of different countries

    Background:
        Given Opens the web browser of the home page of the site
        And Reset the cookie window
        
    Scenario: TC-06 Checking the visibility of phone numbers
        When Open menu Call Us and go to the page Calling from overseas
        Then The section title should be "Calling from overseas?"
        And Phone numbers of the respective countries must be present
            | country             |
            | Estonia             |
            | Finland             |
            | Ireland             |
            | Israel              |
            | Mexico              |
            | Netherlands         |
            | New Zealand         |
            | Philippines         |
            | Poland              |
            | Singapore           |
            | United Kingdom      |
            | All other countries |
