<div id="headerDiv">

## Sign-in with Microsoft, Google, or Facebook

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Overview
`pwa-auth` is a modern web component that lets your users sign-in/sign-up using their Microsoft, Google, or Facebook account. Your app receives their email address, name, and profile picture. [Built](https://github.com/pwa-builder/pwa-auth) with ❤ by the PWABuilder team.

😎 Bonus: It's super lightweight, pulling in the authentication libraries only when the user tries to sign-in with one.

😎😎 Double bonus: It uses the new [Credential Management APIs](https://developers.google.com/web/fundamentals/security/credential-management/retrieve-credentials) to speed through sign-ins without bulky pop-ups or redirects.

### Using `pwa-auth`

By default, `pwa-auth` displays as a `Sign In` dropdown button:

<div class="glitch-embed-wrap" style="height: 486px; width: 100%;">
  <iframe
    loading="lazy"
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/pwa-auth-basic?previewSize=100&previewFirst=true&sidebarCollapsed=true"
    alt="pwa-auth-basic on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

#### List of provider buttons

Alternately, `pwa-auth` can be displayed as a list of sign-in provider buttons:

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/list.html">
  </copy-button>
</div>

<div class="codeBlock">

```html
<pwa-auth appearance="list"></pwa-auth>
```

</div>

<div class="glitch-embed-wrap" style="height: 486px; width: 100%;">
  <iframe
    loading="lazy"
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/pwa-auth-list?previewSize=100&previewFirst=true&sidebarCollapsed=true"
    alt="pwa-auth-list on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

#### Headless

Finally, `pwa-auth` can be headless; bring your own UI:

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/headless.html">
  </copy-button>
</div>

<div class="codeBlock">

```html
<pwa-auth appearance="none"></pwa-auth>
```

```javascript
<script>
  // Use your own UI to invoke pwa-auth sign-in
  const pwaAuth = document.querySelector("pwa-auth");
  myOwnSignInBtn.addEventHandler("click", () => pwaAuth.signIn("Microsoft")); // Or Google or Facebook
</script>
```

</div>

<div class="glitch-embed-wrap" style="height: 486px; width: 100%;">
  <iframe
    loading="lazy"
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/pwa-auth-headless?previewSize=100&previewFirst=true&sidebarCollapsed=true"
    alt="pwa-auth-headless on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

### What happens when a user signs in?

You'll get a `signin-completed` event containing the user's `email`, `name`, and `imageUrl`, as well as additional raw data from the provider (e.g. authentication token):

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/signInCompleted.js">
  </copy-button>
</div>
<div class="codeBlock">

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

Try it: [live](https://pwa-auth-basic.glitch.me/) | [code](https://glitch.com/edit/#!/pwa-auth-basic?path=script.js:3:1)

Once the `signin-completed` event fires, you can do whatever you normally do when your users sign in: set an authentication cookie, create a JWT token, etc.

If there's an error, or the user backs out of the authentication process, `signin-completed` will contain an `error`:

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/signInError.js">
  </copy-button>
</div>
<div class="codeBlock">

```javascript
pwaAuth.addEventListener("signin-completed", ev => {
    const signIn = ev.detail;
    if (signIn.error) {
        console.error("There was an error during sign-in", signIn.error);
    }
});
```

</div>

### What does the user see?

The <em>first time</eM> a user signs in, he'll see the familiar OAuth flow asking the user to sign-in. For example, signing in with Google looks like this:

<img src="https://raw.githubusercontent.com/pwa-builder/pwa-auth/master/assets/oauth.png">

Once your user signs-in or cancels, `signin-completed` event will fire.

When the user signs in successfully the first time, the browser asks to save your credentials:

<img src="https://raw.githubusercontent.com/pwa-builder/pwa-auth/master/assets/save-cred.png"/>

If the user saves his credentials, it will be stored using the new [Credential Management API](https://developers.google.com/web/fundamentals/security/credential-management/retrieve-credentials), enabling fast successive sign-ins.

### Successive sign-ins
#### (Or, [Credential Management](https://developers.google.com/web/fundamentals/security/credential-management/retrieve-credentials) FTW)

If a user has signed-in previously, future sign-ins will be instantaneous. 😎 The next time the user taps `Sign In`, he'll have a streamlined experience without needing any OAuth prompts or pop-ups:

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/silent.html">
  </copy-button>
</div>
<div class="codeBlock">

```html
<!-- When tapping sign-in, use the saved credential to sign in silently -->
<pwa-auth credentialmode="silent"></pwa-auth>
```

</div>

![pwa-auth silent mode](https://github.com/pwa-builder/pwa-auth/raw/master/assets/first-cred.png)

Try it: [live](https://pwa-auth-silent.glitch.me/) | [code](https://glitch.com/edit/#!/pwa-auth-silent?path=index.html:33:1)

In the above screenshot, the user tapped Sign In and was automatically signed-in using the first saved credential; no OAuth dialogs, pop-ups, or redirects needed! 😎 The browser typically displays a "Signing in as..." info bar during this process.

As an alternative, you can have the browser <em>prompt</em> the user to confirm his sign-in:

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/prompt.html">
  </copy-button>
</div>
<div class="codeBlock">

```html
<!-- When tapping sign in, prompt the user to confirm -->
<pwa-auth credentialmode="prompt"></pwa-auth>
```

</div>

![pwa-auth prompt mode](https://github.com/pwa-builder/pwa-auth/raw/master/assets/signin-prompt.png)

Try it: [live](https://pwa-auth-prompt.glitch.me/) | [code](https://glitch.com/edit/#!/pwa-auth-prompt?path=index.html:33:1)

In the above screenshot, the user taps `Sign In` and  the browser prompts him to sign-in using his stored credential.

If the user had previously signed-in with multiple accounts (e.g. once with Google, once with Microsoft), he'll be given a choice of which provider to sign-in with:

<img loading="lazy" src="https://raw.githubusercontent.com/pwa-builder/pwa-auth/master/assets/multiple-accounts.png" />

Finally, you can disable credential management when clicking the Sign In button:

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/credentialModeNone.html">
  </copy-button>
</div>
<div class="codeBlock">

```html
<!-- When tapping sign in, always show the provider dropdown menu -->
<pwa-auth credentialmode="none"></pwa-auth>
```

</div>

When `credentialmode="none"` and the user taps `Sign In`, pwa-auth will show the dropdown set of providers. Clicking any of those providers will still attempt to load a stored credential first, falling back to the OAuth flow as necessary. [View sample using credentialmode="none"](https://pwa-auth-basic.glitch.me/).

With regards to browser support, pwa-auth credential management is a <em>progressive</em> enhancement: on browsers that don't support Credential Management, pwa-auth will fallback to `credentialmode="none"` behavior and always use the OAuth flow.

### Creating keys

When you add a `<pwa-auth>` component to your page, you'll need to specify one or more keys:

```html
<pwa-auth 
    microsoftkey="..."
    googlekey="..."
    facebookkey="...">
</pwa-auth>
```

Each key lets your users sign-in with the corresponding service (e.g. a Microsoft key lets your users sign-in with their Microsoft account).

To create a key, see:
- [Creating a Microsoft key](/creating-microsoft-key.md)
- [Creating a Google key](/creating-google-key.md)
- [Creating a Facebook key](/creating-facebook-key.md)

## API

You can customize the appearance and behavior of pwa-auth component.

### Properties
| Property             | Attribute            | Description                                                                     | Type      | Default |
| - | - | - | - | - |
| `appearance` | `appearance` | Whether to render a single `Sign In` dropdown button or a list of sign-in provider buttons. See [what does it look like?](#what-does-it-look-like) for details. | `'button'\|'list'\|'none'` | `'button'` |
| `credentialMode` | `credentialmode` | What happens when you click the `Sign In` button. If the user has previously signed-in and saved his credential, you can speed the user through sign-in: <ul><li>`silent`: When clicking `Sign In`, silently sign-in using his saved credential if available.</li><li>`prompt`: When clicking `Sign In`, prompt the user to sign-in with his saved crendential if available.</li><li>`none`: When clicking `Sign In`, show the dropdown menu with list of sign-in providers</li></ul> See [successive sign-ins](#successive-sign-ins) for details. | `'silent'\|'prompt'\|'none'` | `'silent'` |
| `microsoftKey` | `microsoftkey`  | The `Application (client) ID` of the Microsoft App you created. See [creating a Microsoft key](/creating-microsoft-key.md). header | `string \| null` | `null` |
| `googleKey` | `googlekey`  | The `Client ID` of the Google credential you created. See [creating a Google key](/creating-google-key.md) | `string \| null` | `null` |
| `facebookKey` | `facebookkey`  | The `App ID` of the Facebook App you created. See [creating a Facebook key](/creating-facebook-key.md) | `string \| null`  | `null` |
| `signInButtonText` | `signinbuttontext` | The text of the `Sign In` button, displayed when `appearance="button"` | `string` | 'Sign in' |
| `microsoftButtonText` | `microsoftbuttontext` | The label for the `Sign in with Microsoft` button | `string`  | 'Sign in with Microsoft' |
| `googleButtonText` | `googlebuttontext` | The label for the `Sign in with Google` button | `string`  | 'Sign in with Google' |
| `facebookButtonText` | `facebookbuttontext` | The label for the `Sign in with Facebook` button | `string`  | 'Sign in with Facebook' |
| `menuOpened` | `menuopened`   | Whether the dropdown menu of the `Sign In` button is opened | `boolean`  | `false` |
| `menuPlacement` | `menuplacement` | The placement of the dropdown menu of the `Sign In` button. <br><br>`start`: <img loading="lazy" style="vertical-align: top" src="https://raw.githubusercontent.com/pwa-builder/pwa-auth/master/assets/menu-start.png"> <br><br>`end`: <img loading="lazy" style="vertical-align: top" src="https://raw.githubusercontent.com/pwa-builder/pwa-auth/master/assets/menu-end.png"> | `'start' \| 'end'`  | `'start'` |
| `disabled` | `disabled` | Whether the Sign In button(s) are disabled. They will be disabled while a sign-in is in-progress. | `boolean`  | `false` |


### Events


| Name | Type | Event Data | Description | 
| - | - | - | - | 
| `signin-completed` | `CustomEvent` | `e.detail` will contain the details of the sign-in event.<br><ul><li>`e.detail.email`: The email address of the signed-in user.</li><li>`e.detail.name`: The name of the signed-in user.</li><li>`e.detail.imageUrl`: URL of the user's profile picture. May be null in some scenarios.</li><li>`e.detail.provider`: The name of the provider the user signed-in with.</li><li>`e.detail.error`: The error that occurred during sign-in. Will be null if sign-in was successful.</li><li>`e.detail.providerData`: The raw sign-in data received from an OAuth flow sign-in. Maybe be null during successive sign-ins.</li></ul> | Fired when a sign-in completes successfully or unsuccessfully. If the sign-in failed, `e.detail.error` will be non-null. <br><br>[View code sample](#what-happens-when-a-user-signs-in).


### Methods


| Name | Arguments | Description |
| - | - | - |
| `signIn(provider: string)` | `provider`: `'Microsoft' \| 'Google' \| 'Facebook'` | Kicks off the sign-in process. If the user hasn't previously authenticated, he'll be prompted to sign-in via OAuth flow. If the user saved a previous credential, it will be used to sign-in quickly without the need for OAuth flow. |


## Styling


### Shadow parts


You can style the different parts of pwa-auth using [CSS ::part selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/::part). Below are the list of parts available for styling:

| Part Name | Description |
| - | - |
| `signInButton` | The sign-in button displayed when `appearance="button"`. |
| `microsoftButton` | The `Sign in with Microsoft` button. |
| `microsoftIcon` | The icon for the `Sign in with Microsoft` button. |
| `googleButton` | The `Sign in with Google` button. |
| `googleIcon` | The icon for the `Sign in with Google` button. |
| `facebookButton` | The `Sign in with Facebook` button. |
| `facebookIcon` | The icon for the `Sign in with Facebook` button. |
| `dropdownMenu` | The dropdown menu of the `Sign In` button displayed when `appearance="button"` |

### Styling samples

Jazz up the Sign In button:

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/shadowPart.css">
  </copy-button>
</div><div class="codeBlock">

```css
pwa-auth::part(signInButton) {
    background-color: green;
    color: white;
    transform: rotate3d(0, 0, 1, 25deg);
}
```

</div>

<div class="glitch-embed-wrap" style="height: 486px; width: 100%;">
  <iframe
    loading="lazy"
    allow="geolocation; microphone; camera; midi; encrypted-media"
    src="https://glitch.com/embed/#!/embed/pwa-auth-customize?previewSize=100&previewFirst=true&sidebarCollapsed=true"
    alt="pwa-auth-customize on Glitch"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

</div>

<div id="rightSide">

### Step 1: Add `pwa-auth` to your page

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/authButton.html"></copy-button>
</div>
<div class="codeBlock">

```html
<script 
  type="module" 
  src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwaauth/dist/pwa-auth.js">
</script>

<!-- Add this where you want the Sign In button to show up -->
<pwa-auth
  microsoftkey="..."
  googlekey="..."
  facebookkey="...">
</pwa-auth>
```
</div>

### Step 2: Create key(s)

You'll need to create one or more keys to let your users login. Creating a key takes about 2 minutes.

- [Create a Microsoft key](https://github.com/pwa-builder/pwa-auth/blob/master/creating-microsoft-key.md)
- [Create a Google key](https://github.com/pwa-builder/pwa-auth/blob/master/creating-google-key.md)
- [Create a Facebook key](https://github.com/pwa-builder/pwa-auth/blob/master/creating-facebook-key.md)

### Step 3: Listen for `signin-completed` event

The final step is to listen for the `signin-completed` event to know when a user signs-in. You'll receive the user's name, email, and profile picture URL.

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/authButton/signInCompleted.js">
  </copy-button>
</div>

<div class="codeBlock">

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

You're done! You've now given your users the ability to sign-in with their Microsoft, Google, or Facebook account. 😎

</div>

