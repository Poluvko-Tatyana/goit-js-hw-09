const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId = null;

startButton.addEventListener('click', onClickStart)
function onClickStart(evt){
    timerId = setInterval(function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
      },1000)
    
}
stopButton.addEventListener("click", () => {
    clearInterval(timerId);
  });




