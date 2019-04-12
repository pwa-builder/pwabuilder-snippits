<div id="headerDiv">

## Authenticate with Microsoft Graph 

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
A simple script to authenticate your users with a microsoft account or Acitve Directory account to get access to the graph.

### Prerequisite
You need to get a "client ID" to set up Auth on your website. To get a client ID visit [https://apps.dev.microsoft.com](https://apps.dev.microsoft.com) and login with your [Microsoft Account](https://login.live.com/). If you already have a client ID, retrieve it from: [https://apps.dev.microsoft.com/#/appList](https://apps.dev.microsoft.com/#/appList).

![graph login](https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphAuth/graph.JPG)


</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphAuth/graphAuth.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<script src="https://secure.aadcdn.microsoftonline-p.com/lib/0.2.3/js/msal.js"></script>
<button id="login" >Login</button>
```

</div>

 
### Step 2

include the following script on your website and *don't forget to update the Cleint ID with the ID from [apps.dev.microsoft.com](https://apps.dev.microsoft.com)*.  You will also need to configure your callback URL while there.

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphAuth/graphAuth.js">
  </copy-button>
  
</div>

<div class="codeBlock javascript hljs">
  
```javascript
var userAgentApplication;
var user;

var msalconfig = {
    clientID: "Add-Your-Client-ID",
    redirectUri: location.origin
};

var graphAPIScopes = ["https://graph.microsoft.com/contacts.read", "https://graph.microsoft.com/user.read", "https://graph.microsoft.com/sites.readwrite.all"];

userAgentApplication = new Msal.UserAgentApplication(msalconfig.clientID, null, loginCallback, {
    redirectUri: msalconfig.redirectUri
});

if(userAgentApplication && userAgentApplication.getUser()) {
    document.getElementById('login').innerHTML =  "hello "+userAgentApplication.getUser().name;
}

function showError(endpoint, error, errorDesc) {
    var formattedError = JSON.stringify(error, null, 4);
    if (formattedError.length < 3) {
        formattedError = error;
    }
    console.error(error);
}

function loginCallback(errorDesc, token, error, tokenType) {
    if (errorDesc) {
        showError(msal.authority, error, errorDesc);
    } else {
        console.log("You can now do calls to Graph API starting from here.");
    }
}
```
</div>



### Step 3

Add a listener for your button, and click away

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphAuth/graphAuth.js">
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

