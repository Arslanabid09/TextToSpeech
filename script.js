const textInput = document.getElementById('text-input');
const voiceSelect = document.querySelector('select');
const speakButton = document.getElementById('speak');
const inputForm = document.querySelector('form');
const utterance = new SpeechSynthesisUtterance();
let voices = [];

const speak = () => {
    let text = textInput.value;
    utterance.text = text;

    // Stop any ongoing speech
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

    speechSynthesis.speak(utterance); 
}

const populateVoiceList = () => {
    voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
        voiceSelect.innerHTML = ''; // Clear previous options
        voices.forEach((voice) => {
            let option = document.createElement('option');
            option.value = voice.name;
            option.innerText = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

// Manually call populateVoiceList in case onvoiceschanged doesn't fire
populateVoiceList();

voiceSelect.addEventListener("change", (e) => {
    const selectedVoiceName = e.target.value;
    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    console.log(`Selected voice: ${utterance.voice.name}`); // Debugging output
});

speakButton.addEventListener('click', speak);
