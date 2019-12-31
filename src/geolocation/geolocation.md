<div id="headerDiv">

## Ask for the users location using the Geolocation API

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
A simple script that uses the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to allow your app to ask for the users current location.


</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/geolocation/geolocation.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<button onclick="getLocation()">
  Get Location
</button>
```

</div>

 
### Step 2

Include the following script in your website

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/geolocation/geolocation.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript
function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);

      return position;
    })
  }
  else {
    console.info("geolocation is not supported in this environment");
  }
}
```
</div>


</div>
