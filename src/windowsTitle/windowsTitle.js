/**
 * @file
 * Window's Title feature set.
 */

/**
 * This snippet allows you to change the application window's title.
 *
 * @alias Set the window's title
 * @method setWindowsTitle
 * @param {string} newTitle The new window's title.
 */
function setWindowsTitle(newTitle) {
    if (!window.Windows) {
        return;
    }

    Windows.UI.ViewManagement.ApplicationView.getForCurrentView().title = newTitle;

}