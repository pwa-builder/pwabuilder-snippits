/**
 * @file
 * MSFT Graph User Authentication
 */

/**
 * This allows you to authenticate your users with a microsoft account or Acitve Directory account to get access to the graph
 *
 * @alias Create MSFT Graph Authentication 
 * @method authWithGraph
 * @param {object} [clientID = ""] Follow these docs to register your app and receive a clientID https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/README.md#prerequisite
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/graphAuth.png
 */


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

