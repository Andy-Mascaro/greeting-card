//Message
const messageInput = document.getElementById('background-select');
const nameHeader = document.getElementById('background-header');
backgroundInput.addEventListener('input', () => {
  backgroundHeader.textContent = nameInput.value;});


//Background
const backgroundSelect = document.getElementById('background-select');   
const backgroundImage = document.getElementById('background-image');

//description

const descriptionTextarea = document.getElementById('message-textarea');
const descriptionDisplay = document.getElementById('message-display');
descriptionTextarea.addEventListener('input', () => {
descriptionDisplay.textContent = descriptionTextarea.value;

  //Export
//const exportButton = document.getElementById('export-button');
//exportButton.addEventListener('click', async () => {
//const dataUrl = await domtoimage.toPng(character);
//const link = document.createElement('a');
//link.download = nameInput.value + '.png';
//link.href = dataUrl;
//link.click();
//});