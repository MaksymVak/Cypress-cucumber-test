Feature: Pricing - function test

    Checking the operation of the country selection

    Background:
        Given Opens the web browser of the home page of the site
        And Reset the cookie window
    Scenario: TC-01 Elastic SIP Trunking pricing
        When Go to the page Elastic SIP Trunking pricing
        When Choose a country Ukraine
        Then The page title contains the "Ukraine" and url contains "/ua"