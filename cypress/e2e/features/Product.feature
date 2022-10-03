Feature: Product - link and text testing

    Verification of texts and links of the product page

    Background:
        Given Opens the web browser of the home page of the site
        And Reset the cookie window
        
    Scenario: TC-07 Elastic SIP Trunking - Whatever you need, build it with Telnyx
        When Go to the page Elastic SIP Trunking
        Then Clicking on a link should open the corresponding page
            | link       |
            | UCaaS      |
            | Managed    |
            | Business   |
            | Multi      |

    Scenario: TC-08 Voice Api - Build exactly what you need for your use-case
        When Go to the page Voice Api
        Then Clicking on a link should open the corresponding section
            | link                  |
            | Conference Calls      |
            | Call Tracking         |
            | Cloud IVR             |
            | Contact Center        |
            | Sales Acceleration    |
            | AI & Voice Analytics  |

    Scenario: TC-09 Voice Api - All your business needs, in one API
        When Go to the page Voice Api
        Then Clicking on a link should open the corresponding page
            | link                  |
            | Cloud IVR             |
            | Contact Center        |
            | Call Tracking         |
            | AI & Voice Analytics  |

    Scenario: TC-10 Number Lookup - What can you build with the Telnyx Lookup API
        When Go to the page Number Lookup
        Then Clicking on a link should open the corresponding page
            | link                       |
            | Contact Center             |
            | Factor Authentication      |
            | SMS Marketing              |
            | Call Tracking              |

    Scenario: TC-11 Fax Api - Check link and page title
        When Go to the page Fax Api through the menu See all Products
        Then The page address must contain "fax-api"
        And The page title should be "Reliably transmit documents with our Programmable Fax API over Private IP"