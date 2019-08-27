<div id="headerDiv">

## Immersive Reader

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
The Microsoft Immersive Reader learning tools are free tools that implement proven techniques to improve reading and writing for people regardless of their age or ability.

Usage of this SDK requires an Azure subscription to Immersive Reader. Follow [these instructions](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/azure-active-directory-authentication) to create an Immersive Reader resource with a custom subdomain and configure Azure Active Directory (Azure AD) authentication in your Azure tenant.

Once you have completed that configuration, you will have a subdomain and will be able to create an Azure AD authentication token. Both the subdomain and a token are required when calling the SDK to launch the Immersive Reader.

Learn more at [https://azure.microsoft.com/en-us/services/cognitive-services/immersive-reader/](https://azure.microsoft.com/en-us/services/cognitive-services/immersive-reader/)

![immersive reader example imamge](https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/immersiveReader/ir.png)


</div>

<div id="rightSide">

### Step 1

Acquire an Azure [Immersive reader endpoint](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/azure-active-directory-authentication) and private key. and add them to your component below.

### Step 2
Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/immersiveReader/immersiveReader.html">
  </copy-button>
</div>

<div class="codeBlock">

```html

<script src="https://unpkg.com/pwabuilder-components@latest"></script>
<pwb-immersiveReader irName="SAMPLENAME" irToken="SAMPLETOKEN">
  <div>
   Add any text or HTML inside this tag to have it presented in the imersive reader
  </div>
</pwb-immersiveReader>

<div class="immersive-reader-button">Read with Immersive Reader</div>

```

</div>
</div>
