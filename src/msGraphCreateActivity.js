/**
 * @file
 * MSFT Graph User Activity API.
 */

/**
 * This creates a new user activity and posts it to the MSFT Graph API.
 *
 * @alias Create MSFT Graph Activity API
 * @method createActivity
 * @param {string} token An authentication token from the MSFT Graph API.
 * @param {object} [activityObject = ""] activityObject  An MSFT Graph Activity object https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/projectrome_activity
 * @param {string} apiVersion The version of the MSFT Graph API you want to call. Set to 1.0 by default. Possible values are `1.0` and `beta`.
 * @returns {object} activity
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/timeline.gif
 */

async function createActivity(token, activityObject, apiVersion = "v1.0") {
  if (token) {
    const headers = new Headers();
    const bearer = "Bearer " + token;
    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");
    const options = {
      method: "PUT",
      body: JSON.stringify(activityObject),
      headers: headers
    };
    const graphEndpoint = `https://graph.microsoft.com/${apiVersion}/me/activities/${activityObject.appActivityId}`;

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
