const textInput = document.getElementById('text-input');
const voiceSelect = document.querySelector('select');
const speakButton = document.getElementById('speak');
const inputForm = document.querySelector('form');
    const uttrence = new SpeechSynthesisUtterance();
const speak = ()=>{
    let text = textInput.value;
        uttrence.text = text;
        speechSynthesis.speak(uttrence); 
}

let voices = [];

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    voices.map((voice)=>{
        let option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voiceSelect.appendChild(option);
    })
}
 
voiceSelect.addEventListener("change",(e)=>{
    uttrence.voice = voices.find(voice => voice.name === e.target.value);
})
