Feature: Company - link testing

    Checking the correctness of clicking on links and matching texts

    Background:
        Given Opens the web browser of the home page of the site
        And Reset the cookie window
        
    Scenario: TC-02 About Us checking texts and addresses
        When Go to the page About Us
        Then The title of the page will be "Unlocking the power of intelligent connectivity"
        Then An address in the city must be available
            | city      |
            | Chicago   |
            | Dublin    |
            | Warsaw    |
            | São Paulo |
            | Amsterdam |
            | Denver    |

    Scenario: TC-03 Data & Privacy following links
        When Go to the page Data & Privacy
        When Let's follow the link
            | link                               |
            | Telnyx Product Updates             |
            | GDPR Frequently Asked Questions    |
            | Compliance                         |
            | Data Transfer Impact Assessment    |
        Then Section heading must match
            | link                               |
            | Telnyx Product Updates             |
            | GDPR Frequently Asked Questions    |
            | Compliance                         |
            | Data Transfer Impact Assessment    |


    Scenario: TC-04 Report Abuse filling out the form
        When Go to the page Report Abuse
        When Fill out the report form and click the submit button
            | subject   | phone         | phonRecAbus    | fullName     |
            | Testing   | 1111111111    | 2222222222     | Ivan         |
        Then An error message should appear

    Scenario: TC-05 Checking page titles Privacy Policy
        When Go to the page Privacy Policy
        Then Page url must contain "/privacy-policy"
        Then Page titles should contain relevant text
            | title                         |
            | Policy Revisions              |
            | Cookies                       |
            | Data Protection               |
            | CCPA Data Protection Rights   |
            | International Data Transfer   |
            | Third Party Sub-Processors    |