/**
 * @file
 * MSFT Graph Contacts API.
 */

/**
 * This call returns the Contacts for the signed in user from the Microsoft Graph API.
 *
 * @alias Create MSFT Graph Contacts API
 * @method getContacts
 * @param {string} token An authentication token fro the MSFT Graph API.
 * @param {string} apiVersion The version of the MSFT Graph API you want to call. Set to 1.0 by default. Possible values are `1.0` and `beta`.
 * @returns {array} contacts
 * @see 
 */

async function getContacts(token, apiVersion = "v1.0") {
  if (token) {
    const headers = new Headers();
    const bearer = "Bearer " + token;
    headers.append("Authorization", bearer);
    const options = {
      method: "GET",
      headers: headers
    };
    const graphEndpoint = `https://graph.microsoft.com/${apiVersion}/me/contacts`;

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
