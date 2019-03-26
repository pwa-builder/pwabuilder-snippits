<div id="headerDiv">

## Get calendar events with the Microsoft Graph

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
This call returns calendar events for the signed in user from the Microsoft Graph API.
### Required Properties

| Name | Description |
| --- | --- |
| clientID | Follow these docs to register your app and receive a clientID https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/README.md#prerequisite |

</div>

<div id="rightSide">

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada ipsum at ex luctus viverra.

<div class="codeBlockHeader">
  
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphCalendar/graphCalendar.html">
  </copy-button>
  
</div>

<div class="codeBlock">
 
```html
  <script src="https://secure.aadcdn.microsoftonline-p.com/lib/0.2.3/js/msal.js"></script>
  <button onclick="getCalendarEvents('clientIdHere')">Get Calendar Events</button>
```

</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada ipsum at ex luctus viverra.

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphCalendar/graphCalendar.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript
async function getCalendarEvents(clientID) {
  const token = await authWithGraph(clientID)

  if (token) {
    const headers = new Headers();
    const bearer = "Bearer " + token;
    headers.append("Authorization", bearer);
    const options = {
      method: "GET",
      headers: headers
    };
    const graphEndpoint = `https://graph.microsoft.com/v1.0/me/events`;

    try {
      const response = await fetch(graphEndpoint, options);
      const data = await response.json();

      return data;
    } catch (err) {
      console.error(`There was an error making the request: ${err}`)
    }
  } else {
    console.error(`
      An auth token must be passed in. To learn more about how to get an auth token
      for the Microsoft Graph API, check out https://github.com/AzureAD/microsoft-authentication-library-for-js.
    `);
  }
}

async function authWithGraph(clientID) {
  const scopes = ['User.Read, Calendar.Read'];

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
</div>
