/**
 * @file
 * FullScreen feature set.
 */

/**
 * When an app is in full-screen mode, it takes up the entirety of the screen. System elements, like title bars, status bars, or the taskbar, are hidden by default.
 * This snippet allows you to enter and exit full-screen mode.
 *
 * @alias Toggle FullScreen mode
 * @method toggleFullscreen
 * @param {boolean} [forceFullscreen=false] Force full-screen mode.
 * @returns {boolean} Indicates if mode switch was successful.
 */
function toggleFullscreen(forceFullscreen) {
    if (!window.Windows){
      const doc = window.document;
      const docEl = doc.documentElement;

      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
      }
      else {
        cancelFullScreen.call(doc);
      }
    } 
    else {
      const applicationView = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();

      const switchToFullScreen = (!applicationView.isFullScreenMode) || forceFullscreen;

      return switchToFullScreen
        ? applicationView.tryEnterFullScreenMode()
        : applicationView.exitFullScreenMode();
    }
}