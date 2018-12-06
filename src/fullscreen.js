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
    if(!window.Windows) return false;

    var applicationView = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();

    var switchToFullScreen = (!applicationView.isFullScreenMode) || forceFullscreen;

    return switchToFullScreen
        ? applicationView.tryEnterFullScreenMode()
        : applicationView.exitFullScreenMode();
}