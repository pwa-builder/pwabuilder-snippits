<div id="headerDiv">

## Install your PWA from the browser

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
A simple script that gives users a button to install your PWA directly from the browser


</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/installButton/installButton.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<button onclick="install()">
  Install
</button>
```

</div>

 
### Step 2

Include the following script in your website

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/installButton/installButton.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log(e);
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice();

    if (choiceResult.outcome === 'accepted') {
      console.log('Your PWA has been installed');
    } else {
      console.log('User chose to not install your PWA');
    }

    deferredPrompt = null;
  }
}
```
</div>


</div>
