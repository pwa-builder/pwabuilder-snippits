/**
 * @file
 * The Secondary tile feature set.
 */

/**
 * Secondary tiles allow users to pin specific content and deep links from your app onto their Start menu, providing easy future access to the content within your app. 
 * This snippet allow you to creates, enumerates, and provides information about a secondary tile.
 *
 * @alias Create Secondary Tile
 * @method createSecondaryTile
 * @param {string} text Text to display on the secondary tile.
 * @param {string} activationArguments Arguments to include when the tile activates the app.
 * @param {string} tileId Id of the secondary tile (so it can be replaced by a matching id). Defaults to the activationArguments.
 * @param {string} logoUri Uri of the logo to display on the tile.
 * @param {string} uriSmallLogo Uri of the small logo to display on the tile.
 * @see https://raw.githubusercontent.com/pwa-builder/Windows-universal-js-samples/master/win10/images/pinCommand.PNG
 * @returns {Promise} promise.
 */
function createSecondaryTile(text, activationArguments, tileId = null, logoUri = null, uriSmallLogo = null) {
    const currentTime = new Date();
    logoUri = logoUri || new Windows.Foundation.Uri("ms-appx:///images/Square150x150Logo.png");
    uriSmallLogo = uriSmallLogo || new Windows.Foundation.Uri("ms-appx:///images/Square44x44Logo.png");
    const newTileDesiredSize = Windows.UI.StartScreen.TileOptions.showNameOnLogo;
    tileId = tileId || activationArguments;

    let tile;
    try {
        tile = new Windows.UI.StartScreen.SecondaryTile(tileId, text, text, activationArguments,
            newTileDesiredSize, logoUri);
    } catch (e) {
        //Utils.error('failed to create secondary tile', e);
        return;
    }
    const element = document.body;
    if (element) {
        const selectionRect = element.getBoundingClientRect();
        const buttonCoordinates = { x: selectionRect.left, y: selectionRect.top, width: selectionRect.width, height: selectionRect.height };
        const placement = Windows.UI.Popups.Placement.above;
        return new Promise((resolve, reject) => {
            try {
                tile.requestCreateForSelectionAsync(buttonCoordinates, placement).done((isCreated) => {
                    if (isCreated) {
                        resolve(true);
                    } else {
                        reject(false);
                    }
                });
            } catch (e) {
                //Utils.error('failed to create secondary tile', e);
                reject(false);
            }
        });
    } else {
        //Utils.debug('No element to place (shall I pin a tile) question above:' + elementId);
        return new Promise(async (resolve, reject) => {
            reject(false);
        });
    }
}

document.addEventListener("DOMContentLoaded", createSecondaryTile, false);
