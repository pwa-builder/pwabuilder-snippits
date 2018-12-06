/**
 * @file
 * App Title Bar.
 */

/**
 * You can customize the appearance of the title bar of your Windows 10 app window (ApplicationView class), which by default is Windows system grey and displays the title of your app on the left, and includes three buttons (Minimize, Maximize, and Close) on the right.
 *
 * @alias Change app title bar color
 * @method changeAppTitleBarColor
 * @param {Rgb} [backgroundColor={ a: 255, r: 54, g: 60, b: 116 }] RGB Background color.
 * @param {Rgb} [foregroundColor={ a: 255, r: 232, g: 211, b: 162 }] RGB foreground color.
 * @param {Rgb} [buttonBackgroundColor={ a: 255, r: 54, g: 60, b: 116 }] RGB button background color.
 * @param {Rgb} [buttonForegroundColor={ a: 255, r: 232, g: 211, b: 162 }] RGB button foreground color.
 * @param {Rgb} [buttonHoverBackgroundColor={ a: 255, r: 19, g: 21, b: 40 }] RGB button hover Background color.
 * @param {Rgb} [buttonHoverForegroundColor={ a: 255, r: 255, g: 255, b: 255 }] RGB button hover foreground color.
 * @param {Rgb} [buttonPressedBackgroundColor={ a: 255, r: 232, g: 211, b: 162 }] RGB button pressed background color.
 * @param {Rgb} [buttonPressedForegroundColor={ a: 255, r: 54, g: 60, b: 116 }] RGB button pressed foreground color.
 * @param {Rgb} [inactiveBackgroundColor={ a: 255, r: 135, g: 141, b: 199 }] RGB inactive background color.
 * @param {Rgb} [inactiveForegroundColor={ a: 255, r: 232, g: 211, b: 162 }] RGB inactive foreround color.
 * @param {Rgb} [buttonInactiveBackgroundColor={ a: 255, r: 135, g: 141, b: 199 }] RGB button inactive background color.
 * @param {Rgb} [buttonInactiveForegroundColor={ a: 255, r: 232, g: 211, b: 162 }] RGB button inactive foreground color.
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/appBar.PNG
 */

function changeAppTitleBarColor(backgroundColor, foregroundColor, buttonBackgroundColor, buttonForegroundColor, 
                                buttonHoverBackgroundColor, buttonHoverForegroundColor, buttonPressedBackgroundColor, 
                                buttonPressedForegroundColor, inactiveBackgroundColor, inactiveForegroundColor,
                                buttonInactiveBackgroundColor, buttonInactiveForegroundColor ){

  if (window.Windows && Windows.UI.ViewManagement.ApplicationView) {
    const customColors = {
      backgroundColor: backgroundColor,
      foregroundColor:  foregroundColor,
      buttonBackgroundColor: buttonBackgroundColor,
      buttonForegroundColor: buttonForegroundColor,
      buttonHoverBackgroundColor: buttonHoverBackgroundColor,
      buttonHoverForegroundColor: buttonHoverForegroundColor,
      buttonPressedBackgroundColor: buttonPressedBackgroundColor,
      buttonPressedForegroundColor: buttonPressedForegroundColor,
      inactiveBackgroundColor: inactiveBackgroundColor,
      inactiveForegroundColor: inactiveForegroundColor,
      buttonInactiveBackgroundColor: buttonInactiveBackgroundColor,
      buttonInactiveForegroundColor: buttonInactiveForegroundColor
    };

    const titleBar = Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;
    titleBar.backgroundColor = customColors.backgroundColor;
    titleBar.foregroundColor = customColors.foregroundColor;
    titleBar.inactiveBackgroundColor = customColors.inactiveBackgroundColor;
    titleBar.inactiveForegroundColor = customColors.inactiveForegroundColor; 
  }
}