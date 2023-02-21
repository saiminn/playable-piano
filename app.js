const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckBox = document.querySelector('.key-checkbox input');

let audio = new Audio('tunes/a.wav');
let allKeys = [];

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key='${key}']`);
  clickedKey.classList.add('active');
  setTimeout(() => {
    clickedKey.classList.remove('active');
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener('click', () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle('hide'));
 
};

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

document.addEventListener('keydown', pressedKey);
volumeSlider.addEventListener('input', handleVolume);
keysCheckBox.addEventListener('click', showHideKeys);
