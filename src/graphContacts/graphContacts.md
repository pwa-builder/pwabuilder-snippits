<div id="headerDiv">

## Get contacts with the Microsoft Graph

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
This call returns the Contacts for the signed in user from the Microsoft Graph API.
### Required Properties

| Name | Description |
| --- | --- |
| clientID | Follow these docs to register your app and receive a clientID https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/README.md#prerequisite |

</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page:

<div class="codeBlockHeader">
  
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphContacts/graphContacts.html">
  </copy-button>
  
</div>

<div class="codeBlock">
 
```html
  <script src="https://secure.aadcdn.microsoftonline-p.com/lib/0.2.3/js/msal.js"></script>
  <button onclick="getContacts('clientIdHere')">Get Contacts</button>
```

</div>

### Step 2

Include the following script on your website and *don't forget to update the Cleint ID with the ID from [apps.dev.microsoft.com](https://apps.dev.microsoft.com)*.  You will also need to configure your callback URL while there.

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphContacts/graphContacts.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript
async function getContacts(clientID) {
  const token = await authWithGraph(clientID);

  if (token) {
    const headers = new Headers();
    const bearer = "Bearer " + token;
    headers.append("Authorization", bearer);
    const options = {
      method: "GET",
      headers: headers
    };
    const graphEndpoint = `https://graph.microsoft.com/v1.0/me/contacts`;

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
  const scopes = ['User.Read', 'Contacts.Read'];

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

### Step 3

Add a listener for your button, and click away

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphContacts/graphContacts.js">
  </copy-button>
  
  
</div>

<div class="codeBlock">
  
```javascript
document.getElementById("login").addEventListener("click", () => {
    // Call this code on the click event of your login button
    userAgentApplication.loginRedirect(graphAPIScopes);   
});
```

</div>

</div>
