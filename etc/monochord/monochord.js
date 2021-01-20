"enable strict"

function playFrequency(inputField) {
    if(event.key === 'Enter') {
        playTone(parseFloat(inputField.value));        
    }
}

function playNote(noteId) {
    var input = parseFloat(document.getElementById(noteId).value);
	var openPitch = parseFloat(document.getElementById("openPitch").value);
	var noteDuration = parseFloat(document.getElementById("noteDuration").value);
	var stringLength = parseFloat(document.getElementById("stringLength").value);
    playTone(frequency=(openPitch * stringLength / input), type="triangle", duration=noteDuration)
}

function changeInput(position) {
    if (position === 1) {
        document.getElementById("parhypateHypaton").value =
            document.getElementById("setLower").value;
        document.getElementById("parhypateMeson").value =
            document.getElementById("setLower").value * 3 / 4;
    } else if (position === 0) {
        document.getElementById("lichanosHypaton").value =
            document.getElementById("setUpper").value;
        document.getElementById("lichanosMeson").value =
            document.getElementById("setUpper").value * 3 / 4;
    }

}

function changeMoveables(position) {
	if (position === 0) {
		var newParhypate = document.getElementById("setLower").value ;
		document.getElementById("parhypateHypaton").value = newParhypate ;
		document.getElementById("parhypateMeson").value = newParhypate * 3 / 4 ;
		document.getElementById("triteSynemmenon").value = newParhypate * 9 / 16 ;
		document.getElementById("triteDiezeugmenon").value = newParhypate / 2 ;
		document.getElementById("triteHyperbolaion").value = newParhypate * 3 / 8 ;
	}
	else if (position === 1) {
		var newLichanos = document.getElementById("setUpper").value ;
		document.getElementById("lichanosHypaton").value = newLichanos ;
		document.getElementById("lichanosMeson").value = newLichanos * 3 / 4 ;
		document.getElementById("paraneteSynemmenon").value = newLichanos * 9 / 16 ;
		document.getElementById("paraneteDiezeugmenon").value = newLichanos / 2 ;
		document.getElementById("paraneteHyperbolaion").value = newLichanos * 3 / 8 ;
	}
}

function changeStringLength() {
    var oldProslambanomenos = document.getElementById("proslambanomenos").value;
    var noteFields = document.getElementsByClassName("note");
    for (var i = 0; i < noteFields.length; i++) {
        document.getElementById(noteFields[i].id).value = (
            document.getElementById("stringLength").value *
            document.getElementById(noteFields[i].id).value /
			oldProslambanomenos
            )
    }
}
