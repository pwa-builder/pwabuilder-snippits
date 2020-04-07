<div id="headerDiv">

## Install your PWA from the browser

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
`pwa-install` is a [web component](https://meowni.ca/posts/web-components-with-otters/) from the [PWABuilder](https://pwabuilder.com) team that brings an awesome "install" experience to your Progressive Web App!

![pwa install](https://raw.githubusercontent.com/pwa-builder/pwa-install/master/assets/installsnip.png)

</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/authButton.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<!-- Place this in <head> or <body> -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwaauth/dist/pwa-auth.js"
></script>

<!-- Add this where you want the Sign In button to show up -->
<!-- To create a key, see https://github.com/pwa-builder/pwa-auth#creating-keys -->
<pwa-auth
  microsoftkey="..."
  googlekey="..."
  facebookkey="...">
</pwa-auth>
```
</div>


</div>

