<div id="headerDiv">

## Let your users sign-in with Microsoft, Google, or Facebook

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
`pwa-auth` is a modern web component that lets your users sign-in/sign-up using their Microsoft, Google, or Facebook account. Your app receives their email address, name, and profile picture. [Built](https://github.com/pwa-builder/pwa-auth) with ❤ by the PWABuilder team.

😎 Bonus: It's super lightweight, pulling in the authentication libraries only when the user tries to sign-in with one.

😎😎 Double bonus: It uses the new [Credential Management APIs](https://developers.google.com/web/fundamentals/security/credential-management/retrieve-credentials) to speed through sign-ins without bulky pop-ups or redirects.

![pwa auth](https://github.com/pwa-builder/pwa-auth/raw/master/assets/install-btn-dropdown.png)

Alternately, `pwa-auth` can be displayed as a list of buttons:

```html
<pwa-auth appearance="list"></pwa-auth>
```
![pwa-auth buttons](https://github.com/pwa-builder/pwa-auth/raw/master/assets/list.png)

Finally, `pwa-auth` can be headless; bring your own UI:

```html
<pwa-auth appearance="none"></pwa-auth>
```
```javascript
// Use your own UI to invoke pwa-auth sign-in
const pwaAuth = document.querySelector("pwa-auth");
myOwnSignInBtn.addEventHandler("click", () => pwaAuth.signIn("Microsoft")); // Or Google or Facebook
```

You can also change the appearance and behavior of `pwa-auth`. 

</div>

<div id="rightSide">

### Step 1: Add it to your page

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/authButton.html">
  </copy-button>
</div>

<div class="codeBlock">

Import the script in your page &lt;head&gt;:
```html
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

### Step 2: Create key(s)
You'll need to create one or more keys to let your users login.

- [Create a Microsoft key](https://github.com/pwa-builder/pwa-auth/blob/master/creating-microsoft-key.md)
- [Create a Google key](https://github.com/pwa-builder/pwa-auth/blob/master/creating-google-key.md)
- [Create a Facebook key](https://github.com/pwa-builder/pwa-auth/blob/master/creating-facebook-key.md)

### Step 3: Listen for `signin-completed` event

```javascript
const pwaAuth = document.querySelector("pwa-auth");
pwaAuth.addEventListener("signin-completed", ev => {
    const signIn = ev.detail;
    if (signIn.error) {
        console.error("Sign in failed", signIn.error);
    } else {
        console.log("Email: ", signIn.email);
        console.log("Name: ", signIn.name);
        console.log("Picture: ", signIn.imageUrl);
        console.log("Provider (MS, Google, FB): ", signIn.provider);
        console.log("Raw data from provider: ", signIn.providerData);
    }
});
```

</div>

