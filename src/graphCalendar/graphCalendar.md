<div id="headerDiv">

## Get calendar events with the Microsoft Graph

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
This call returns calendar events for the signed in user from the Microsoft Graph API.

### Prerequisite
You will also need to use a [Microsoft Graph Toolkit provider](https://docs.microsoft.com/en-us/graph/toolkit/providers/msal) in the same app to ensure there is an authenticated user. If you are already using the `mgt-msal-provider` in your app then you can use this feature.

</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page:

<div class="codeBlockHeader">
  
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphCalendar/graphCalendar.html">
  </copy-button>
  
</div>

<div class="codeBlock">
 
```html
  <script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>

  <mgt-agenda group-by-day></mgt-agenda>
```

</div>


</div>
