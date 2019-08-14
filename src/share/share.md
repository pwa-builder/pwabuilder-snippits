<div id="headerDiv">

## Share content with the Web Share API

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
A simple script that uses the [Web Share API](https://developers.google.com/web/updates/2016/09/navigator-share) to allow your app to share content on the web. This snippit will use the WinRT share API in PWAs installed from the Microsoft Store.


</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/share/share.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<button onclick="share('title', 'https://www.xbox.com/en-US/xbox-one-x', 'Check out the new Xbox!')">
  Share
</button>
```

</div>

 
### Step 2

Include the following script on your website.

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/share/share.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript
async function share(title, text, url) {
  if (window.Windows) {
    const DataTransferManager = window.Windows.ApplicationModel.DataTransfer.DataTransferManager;

    const dataTransferManager = DataTransferManager.getForCurrentView();
    dataTransferManager.addEventListener("datarequested", (ev) => {
      const data = ev.request.data;

      data.properties.title = title;
      data.properties.url = url;
      data.setText(text);
    });

    DataTransferManager.showShareUI();

    return true;
  } else if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: text,
        url: url,
      });

      return true;
    } catch (err) {
      console.error('There was an error trying to share this content');
      return false;
    }
  }
}

```
</div>


</div>
