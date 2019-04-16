<div id="headerDiv">

## Copy data to clipboard

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
A simple script that uses the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) to allow your app to copy text to the users clipboard


</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/clipboard/clipboard.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<button onclick="copyToClipboard('Text im copying')">
  Copy To Clipboard
</button>
```

</div>

 
### Step 2

Include the following script in your website

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/clipboard/clipboard.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript
async function copyToClipboard(stringToCopy) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(stringToCopy);
      console.log('string copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
}
```
</div>


</div>
