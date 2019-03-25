<div id="headerDiv">

## Authenticate with Microsoft Graph 

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
This allows you to authenticate your users with a microsoft account or Acitve Directory account to get access to the graph.
### Required Properties

| Name | Description |
| --- | --- |
| scopes | Array of API URLs you are requesting permissions for future Graph API calls |
| clientID | Follow these docs to register your app and receive a clientID https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/README.md#prerequisite |

</div>

<div id="rightSide">

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada ipsum at ex luctus viverra.

```html
  <script src="https://secure.aadcdn.microsoftonline-p.com/lib/0.2.3/js/msal.js"></script>
  <button onclick="authWithGraph('clientIdHere')">Login</button>
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada ipsum at ex luctus viverra.

```javascript
async function authWithGraph(clientID) {
  const scopes = ['User.Read'];

  if (clientID && scopes) {
    const userAgentApplication = new Msal.UserAgentApplication(config.clientID, null);
    try {
      await userAgentApplication.loginPopup(scopes);
    }
    catch (error) {
      console.error('Error during login', error);
    }

    try {
      // Login success
      const accessToken = await userAgentApplication.acquireTokenSilent(scopes);
      return accessToken;
    }
    catch (error) {
      // AcquireTokenSilent Failure, send an interactive request.
      // This will show the Microsoft Account login UI again
      const accessToken = await userAgentApplication.acquireTokenPopup(scopes)
      return accessToken;
    }
  } else {
    console.log("You must supply a client id and authentication scopes for your app");
  }
}

```

</div>
</div>
