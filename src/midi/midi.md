<div id="headerDiv">

## Connect to a MIDI device and print value on the screen

</div>

<div id="contentContainer">
<div id="leftSide">
  
### Description
Web MIDI can be a powerful way to connect MIDI hardware to your web apps.  MIDI provided you with three different values in the MIDIMessage array:
 - 0: the start and end of the note
 - 1: the numeric value of the note place
 - 2: the pressure of the note (strength)

In this demo, we are only returning the numeric value of the MIDI note, but it's not hard to pull the other values from the object as well.  You can learn more about Web MIDI from the [MDN Web Docs for Web MIDI APIs](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess)

</div>

<div id="rightSide">

### Step 1

Add this code to your HTML page: 

<div class="codeBlockHeader">
  <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/midi/midi.html">
  </copy-button>
</div>

<div class="codeBlock">
 
```html
<p id="midiValue">
  No recorded MIDI values
</p>
```

</div>

 
### Step 2

You will first want to check to see if the platform supports MIDI Include the following script in your website

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/midi/midi.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript
if (navigator.requestMIDIAccess) {
  console.log(' browser supports WebMIDI');
} else {
  console.log('WebMIDI is not supported.');
}
```
</div>

### Step 3

Next you want to attach an event to the MIDI "onMIDIMessage" event that you get from the requestMIDIAccess API.

<div class="codeBlockHeader">
  
   <copy-button codeurl="https://raw.githubusercontent.com/pwa-builder/pwabuilder-snippits/master/src/midi/midi2.js">
  </copy-button>
  
</div>

<div class="codeBlock">
  
```javascript

navigator.requestMIDIAccess()
.then(onSuccess, onFailure);

function onSuccess(midiAccess) {
for (var input of midiAccess.inputs.values())
    input.onmidimessage = getMIDIMessage;
}


function getMIDIMessage(midiMessage) {
console.log(midiMessage.data[1]);
document.getElementById('midiValue').innerHTML = midiMessage.data[1];
}

function onFailure() {
console.log('Could not access MIDI devices.');
}
```
</div>

That's all you need!  If you want to pull other values form the MIDIMessage object (like start-stop and pressure) you will find them here:
```JavaScript
midiMessage.data[0] //start-stop
midiMessage.data[2] //presure
```
</div>
