/**
 * @file
 * Share
 */

/**
 * This call allows you to share content
 *
 * @alias Create Share
 * @method share
 * @param {string} Title title of content to share.
 * @param {string} Text text of content to share.
 * @param {string} url url of content to share.
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/shareCommand.PNG
 * @returns {boolean} success
 */

async function share(title, text, url) {
  if (window.Windows) {
    const DataTransferManager = window.Windows.ApplicationModel.DataTransfer.DataTransferManager;

    const dataTransferManager = DataTransferManager.getForCurrentView();
    dataTransferManager.addEventListener("datarequested", (ev) => {
      const data = ev.request.data;

      data.properties.title = title;
      data.properties.url = url;
      data.setText(text);
    });

    DataTransferManager.showShareUI();

    return true;
  } else if (navigator.share) {
    try {
      await navigator.share({
        title: title,
        text: text,
        url: url,
      });

      return true;
    } catch (err) {
      console.error('There was an error trying to share this content');
      return false;
    }
  }
}
