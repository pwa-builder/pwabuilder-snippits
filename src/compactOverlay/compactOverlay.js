/**
 * @file
 * The CompactOverlay
 */

/**
 * When an app window enters compact overlay mode it’ll be shown above other windows so it won’t get blocked. This allows users to continue to keep an eye on your app's content even when they are working with something else. The canonical example of an app taking advantage of this feature is a media player or a video chat app.
 * This snippet allows you to switch into compact overlay mode or return to the default mode.
 *
 * @alias Toggle Compact Overlay mode
 * @method toggleCompactOverlayMode
 * @param {boolean} [forceCompactOverlay=false] Force Compact Overlay mode.
 * @returns {Promise} Promise with new mode value (1=CompactOverlay | 0=Default).
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/compactOverlay.png
 */
async function toggleCompactOverlayMode(forceCompactOverlay = false) {
  const videoEl = document.querySelector('#ourVideo');

  if (window.Windows) {
    const applicationView = Windows.UI.ViewManagement.ApplicationView;
    const currentMode = applicationView.getForCurrentView().viewMode;

    let newMode = (currentMode == Windows.UI.ViewManagement.ApplicationViewMode.default) || forceCompactOverlay
      ? Windows.UI.ViewManagement.ApplicationViewMode.compactOverlay
      : Windows.UI.ViewManagement.ApplicationViewMode.default;

    return applicationView.getForCurrentView()
      .tryEnterViewModeAsync(newMode)
      .then(() => newMode);
  } else if ('pictureInPictureEnabled' in document) {
    // for the web picture in picture api
    if (videoEl instanceof HTMLVideoElement) {
      if (videoEl !== document.pictureInPictureElement) {
        try {
          await videoEl.requestPictureInPicture();
          return Promise.resolve(1);
        }
        catch(error) {
          console.error(`There was an error moving the video to PIP mode: ${error}`)
        }
      } else {
        await document.exitPictureInPicture();
        return Promise.resolve(0);
      }
    } else {
      console.error('the element passed in must be a video element');
    }
  } else {
    return Promise.resolve('unsupported on this platform or browser')
  }
}
