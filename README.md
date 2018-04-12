# BlueBank API on Views playground

TODO explanation

- Clone repo

- Install dependencies
``
TODO node
npm install
```

- Setup your BlueBank API dev account:

Get your api key from https://developer.bluebank.io/getting-started-07.
Put that on `src/Main/App.view.logic.js` instead of apiKey="e105d510bc824bfcad7fd1ba55595675"

Login here https://bb-customers.azurewebsites.net/ and make your user account
Make a bank account here https://bb-customers.azurewebsites.net/BankAccounts
Get user token from the Bearer Token for testing section at the bottom of this
page https://bb-customers.azurewebsites.net/ (maybe this link works https://login.microsoftonline.com/bluebankb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_BlueBankSUSI&client_Id=40957b9c-63bc-4ab4-9ecb-67b543c8e4ca&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fbb-customers.azurewebsites.net%2Fhome%2Fjwt%2F&scope=openid&response_type=id_token&prompt=login)

Put that on  `src/Main/App.view.logic.js` instead of userToken="Bearer ..."

- Run with
```
npm start
```

Browser will open on http://localhost:3000/

License MIT
(c) 2018 Views Tools
