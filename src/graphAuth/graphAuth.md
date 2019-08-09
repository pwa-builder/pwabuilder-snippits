<div id="headerDiv">

## Authenticate with Microsoft Graph 

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
A simple script to authenticate your users with a Microsoft account or Active Directory account to get access to the graph.

### Prerequisite
You need to get a "client ID" to set up Auth on your website. To get a client ID visit [https://apps.dev.microsoft.com](https://apps.dev.microsoft.com) and login with your [Microsoft Account](https://login.live.com/). If you already have a client ID, retrieve it from: [https://apps.dev.microsoft.com/#/appList](https://apps.dev.microsoft.com/#/appList).

![graph login](https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphAuth/graph.JPG)


</div>

<div id="rightSide">

### MSAL Authentication

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/graphAuth/graphAuth.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<mgt-msal-provider client-id="[CLIENT-ID]"></mgt-msal-provider>
<mgt-login></mgt-login>
```

</div>


### Teams Authentication

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphAuth/graphAuth.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<mgt-teams-provider client-id="<YOUR_CLIENT_ID>" auth-popup-url="https://<YOUR-DOMAIN>.com/AUTH-PATH" ></mgt-teams-provider>
<mgt-login></mgt-login>
```

</div>

