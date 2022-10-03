Feature: Resources - link testing

    Checking the presence and visibility of relevant links and texts

    Background:
        Given Opens the web browser of the home page of the site
        And Reset the cookie window
        
    Scenario: TC-12 Testing the blog filter
        When Go to the page Blog
        When Select Voice API and select "Guides & Tutorials"
        Then Headers must contain "Guides & Tutorials"

    Scenario: TC-13 Resource Hub page title check
        When Go to the page Resource Hub
        Then Page titles must match the text
            | title                              |
            | SMS Guide                          |
            | VoIP Guide                         |
            | SIP Trunk Guide                    |
            | WebRTC Guide                       |
            | IoT Guide                          |
            | Two-Factor Authentication Guide    |
            | Fax Guide                          |
            | SHAKEN/STIR Guide                  |

    Scenario: TC-14 Checking links and news feed texts
        When Go to the page Release Notes
        Then The url must match "/release-notes"
        And The page title should be "Release Notes" and the filter menu should be visible
