<div id="headerDiv">

## Get contacts with the Microsoft Graph

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
This call returns the Contacts for the signed in user from the Microsoft Graph API.

### Prerequisite
You will also need to use the [Microsoft Graph Auth feature](https://pwabuilder-site-dev.azurewebsites.net/feature/Microsoft%20Graph%20Authentication) in the same app to ensure there is an authenticated user. If you are already using the `mgt-login` componenent in your app then you can use this feature.

</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page:

<div class="codeBlockHeader">
  
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/graphContacts/graphContacts.html">
  </copy-button>
  
</div>

<div class="codeBlock">
 
```html
  <script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>

  <mgt-people></mgt-people>
```

</div>


</div>
