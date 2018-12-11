/**
 * @file
 * MSFT Graph Contacts API.
 */

/**
 * This call returns the Contacts for the signed in user from the Microsoft Graph API.
 *
 * @alias Create MSFT Graph Contacts API
 * @method getContacts
 * @param {object} [clientID = ""] Follow these docs to register your app and receive a clientID https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/README.md#prerequisite
 * @returns {array} contacts
 * @see 
 */

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
