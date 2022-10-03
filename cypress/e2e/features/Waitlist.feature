Feature: Waitlist - link testing

    Functionality check

    Background:
        Given Opens the web browser of the home page of the site
        And Reset the cookie window
        
    Scenario: TC-14 Waitlist - functionality check
        When Go to the page Waitlist and go to the form Waitlist
        When Enter random values in all fields
        Then The title of the page must match "You're on the waitlist!"
