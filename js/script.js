var recognition = new webkitSpeechRecognition();

function isRecognitionAvailable() {
    return window.hasOwnProperty('webkitSpeechRecognition');
}

function startDictation(onResult, onError) {
	if (recognition) {
		recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "ru-RU";
		recognition.onresult = onResult;
		recognition.onerror = onError;
		recognition.start();
	}
}

function stopDictation() {
	if (recognition) {
		recognition.stop();
	}
}
