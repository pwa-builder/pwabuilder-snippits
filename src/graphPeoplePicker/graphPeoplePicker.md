<div id="headerDiv">

## Pick the right people with the Microsoft Graph


</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
The People Picker component enables the user to view, add, or remove people objects from a dynamic drop-down list as they type.

### Prerequisite
You will also need to use a [Microsoft Graph Toolkit provider](https://docs.microsoft.com/en-us/graph/toolkit/providers/msal) in the same app to ensure there is an authenticated user. If you are already using the `mgt-msal-provider` in your app then you can use this feature.

![graph people picker](https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/graphPeoplePicker/graphPeoplePicker.png)


</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/graphPeoplePicker/graphPeoplePicker.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>

<mgt-people-picker></mgt-people-picker>
```

</div>


</div>

