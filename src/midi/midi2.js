
navigator.requestMIDIAccess()
.then(onSuccess, onFailure);

function onSuccess(midiAccess) {
for (var input of midiAccess.inputs.values())
    input.onmidimessage = getMIDIMessage;
}


function getMIDIMessage(midiMessage) {
console.log(midiMessage.data[1]);
document.GetElementById('midiValue').innerHTML = midiMessage.data[1];
}

function onFailure() {
console.log('Could not access MIDI devices.');
}