<div id="headerDiv">

## Manage tasks through the Microsoft Graph


</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
The Tasks component enables the user to view, add, remove, complete, or edit tasks. It works with tasks in Microsoft Planner or Microsoft To-Do.

### Prerequisite
You will also need to use a [Microsoft Graph Toolkit provider](https://docs.microsoft.com/en-us/graph/toolkit/providers/msal) in the same app to ensure there is an authenticated user. If you are already using the `mgt-msal-provider` in your app then you can use this feature.

### Documentation
[Click here](https://docs.microsoft.com/en-us/graph/toolkit/components/tasks) to learn more.


</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/demo/graphTasks/graphTasks.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>

<mgt-tasks></mgt-tasks>
```

</div>


</div>

