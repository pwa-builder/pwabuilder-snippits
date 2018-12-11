/**
 * @file
 * MessageDialog feature set.
 */

/**
 * Represents a dialog for showing messages to the user. In a PWA hosted on Windows 10, JS methods like alert() and confirm() are not available. MessageDialogs can be used instead.
 * This snippet allows you to create MessageDialogs and then obtain the user selection.
 *
 * @alias Show a MessageDialog
 * @method showMessageDialog
 * @param {string} title The title of the MessageDialog.
 * @param {string} content The content to display inside the MessageDialog.
 * @param {array} [options=new Array()] Array of strings with the label of the options to display.
 * @returns {Promise} A promise that fulfills to the option the user selected (e.g.: { option: 'The label', optionIndex: 0 })
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/toast.jpg
 */
function showMessageDialog(title, content, options) {
    if (!window.Windows) return Promise.reject('unsupported');

    return new Promise((resolve, reject) => {
        var dialog = new Windows.UI.Popups.MessageDialog(content, title);
        if (options instanceof Array && options.length) {
            options.forEach((optionText, ix) => {
                dialog.commands.append(new Windows.UI.Popups.UICommand(
                    optionText,
                    () => resolve({ option: optionText, optionIndex: ix })));
            });
        }

        dialog.showAsync();
    });
}