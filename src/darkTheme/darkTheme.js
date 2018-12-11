/**
 * @file
 * Dark Theme Check.
 */

/**
 * This call checks the values inside the UISettings to tell if the user is in dark mode or light mode.
 * This call returns "dark" or "light" for you to set your css
 *
 * @alias Create Dark Theme Check
 * @method checkForDarkTheme
 * @returns {string} theme
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/darkTheme.png
 */

function checkForDarkTheme(){
  if ( window.Windows ){
    // Change the theme to light or dark
    const uiSettings = new Windows.UI.ViewManagement.UISettings();
    const color = uiSettings.getColorValue(Windows.UI.ViewManagement.UIColorType.background)
    if(color.b === 0){
      return "dark"
    }else{
      return "light"
    }
  }
}
