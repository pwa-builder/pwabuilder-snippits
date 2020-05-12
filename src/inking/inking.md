<div id="headerDiv">

## Enable 2D inking on the web

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Using this component

### Install

There are two ways to use this component. For simple projects or just to get started fast, we recommend using the component by script tag. If your project is using [npm](https://www.npmjs.com/) then we recommend using the npm package.

### Script tag

- Put this script tag in the head of your index.html:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwa-inking"
></script>
```

### NPM

- Run `npm install @pwabuilder/pwa-inking`
- import with `import '@pwabuilder/pwa-inking'`

Then you can use the element `<inking-canvas></inking-canvas>` anywhere in your template, JSX, html etc. By itself, you will get a blank, bordered canvas which you can control through its APIs (see table for details).

You can also add the `<inking-toolbar></inking-toolbar>` element beneath the `<inking-canvas></inking-canvas>` element so the user can control the canvas visually. To connect these elements, their respective `canvas` and `name` attribute values must match.

<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/pwa-inking?path=index.html&previewSize=100"
    title="pwa-inking on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## APIs

## inking-canvas

### Properties

| Property             | Attribute            | Description                                                                     | Type      | Default                                             |
| -------------------- | -------------------- | ------------------------------------------------------------------------------- | --------- | --------------------------------------------------- |
| `name`               | `name`               | Used to connect an inking toolbar                                               | `string`  | `""`                                                |
| `canvasHeight`       | `height`             | Fills parent by default                                                         | `number`  | `-1`                                                |
| `canvasWidth`        | `width`              | Fills parent by default                                                         | `number`  | `-1`                                                |

### Methods

| name                                      | Description                                                   |
| ---------------                           | --------------------------                                    |
| `changeUtensilColor(color: string)`       | Changes ink color                                             |
| `changeStrokeSize(strokeSize: number)`    | Changes ink stroke width                                      |
| `changeToolStyle(toolStyle: string)`      | Changes active canvas tool                                    | 
| `eraseAll()`                              | Deletes all canvas ink                                        |
| `getScale()`                              | Returns canvas size relative to its content's aspect ratio    |

## inking-toolbar

### Properties

| Property             | Attribute            | Description                                                                     | Type      | Default                                             |
| -------------------- | -------------------- | ------------------------------------------------------------------------------- | --------- | --------------------------------------------------- |
| `orientation`        | `orientation`        | Toolbar layout direction                                                        | `string`  | `horizontal`                                        |
| `targetInkingCanvas` | `canvas`             | Connects to canvas whose name matches its value                                 | `string`  | `""`                                                |

### Methods

None

</div>

<div id="rightSide">

### Step 1: Add pwa-inking to your page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/demo/src/inking/inking.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwa-inking"
></script>
<inking-canvas name="myInkingCanvas"></inking-canvas>
<inking-toolbar canvas="myInkingCanvas"></inking-toolbar>
```
</div>

</div>