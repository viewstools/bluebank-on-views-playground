# BlueBank API on Views playground

This project showcases a set of [React](https://reactjs.org/) helpers to connect with the BlueBank API for the [RBS #BankOfAPIs hackathon](http://www.bankofapis.com/schedule/).
It uses [Views](https://docs.views.tools) for the user interface.

You can try it live [here](https://bluebank-on-views-playground.surge.sh).

The BlueBank API wrapper is on [src/BlueBank.js](src/BlueBank.js).

## Using it locally
1. Clone the GitHub repository

Open the terminal app (on Mac it's in Applications/Utilities/Terminal, on Windows it's Start/Program Files/Accessories/Command Prompt) and type:
```
git clone https://github.com/viewstools/bluebank-on-views-playground.git
cd bluebank-on-views-playground
```

This will create a new directory called `bluebank-on-views-playground` and will
put you on it.

2. Setup your dev environment if you haven't done so already:

https://github.com/viewstools/docs/blob/master/DevEnvironmentSetup.md

3. Setup your BlueBank API dev account:

- Sign up and get your api key from https://developer.bluebank.io/products.
  Put that on `src/Main/App.view.logic.js` instead of `apiKey="e105d510bc824bfcad7fd1ba55595675"`.
- Create a customer profile by signing up to the [BlueBank customer portal](https://bb-customers.azurewebsites.net/).
- Make a bank account
  [here](https://bb-customers.azurewebsites.net/BankAccounts).
  otherwise you won't see transactions.
- Get a user token from the "Bearer Token for testing section" at the bottom of [this
  page](https://bb-customers.azurewebsites.net/).
  If you're already logged in to the customer portal, you can [try this link
  instead](https://login.microsoftonline.com/bluebankb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_BlueBankSUSI&client_Id=40957b9c-63bc-4ab4-9ecb-67b543c8e4ca&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fbb-customers.azurewebsites.net%2Fhome%2Fjwt%2F&scope=openid&response_type=id_token&prompt=login)
  Put the token (it starts with Bearer and has tonnes of characters on it!) on
  `src/Main/App.view.logic.js` instead of `userToken="Bearer ..."`
  NOTE: the token will expire every now and then and you'll have to repeat this
  last step.

4. Run the project locally with:
```
npm start
```

The browser should open on http://localhost:3000/ with your demo app! :)

## Extending the BlueBank API wrapper

The BlueBank API wrapper is on [src/BlueBank.js](src/BlueBank.js).
It represents the BlueBank Personal Current Accounts API v0.7
https://developer.bluebank.io/docs/services/57fd0fd5a1fcf30c74f0346d.

You should be able to use the `Api` component in that file to access
the other APIs https://developer.bluebank.io/products/57fd074959546913d84cc466
too.


As Views, We're thrilled to be able to help you deliver your apps at the event!
If you want to get in touch, you can join our Slack team at https://slack.views.tools.

License MIT
(c) 2018 Views Tools
