<div id="headerDiv">

## Manage tasks through the Microsoft Graph


</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
The Tasks component enables the user to view, add, remove, complete, or edit tasks. It works with tasks in Microsoft Planner or Microsoft To-Do.

### Prerequisite
You need to get a "client ID" to set up Auth on your website. To get a client ID visit [https://apps.dev.microsoft.com](https://apps.dev.microsoft.com) and login with your [Microsoft Account](https://login.live.com/). If you already have a client ID, retrieve it from: [https://apps.dev.microsoft.com/#/appList](https://apps.dev.microsoft.com/#/appList).

![graph login](https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/graphAuth/graph.JPG)


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
<mgt-tasks data-source="planner"></mgt-tasks>
```

</div>


</div>

