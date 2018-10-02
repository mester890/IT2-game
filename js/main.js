const output = document.body.querySelector('#output');

function startGame() {
  output.innerHTML = `
  <p>
    Du er strandet på en øde øy. Du må ta de riktige valgene for å komme deg til spillets ende. Greier du utfordringen?
  </p>
  <button type="button" class="btn btn-light" onclick="stageOne('yes');">Ja!</button>
  <button type="button" class="btn btn-light" onclick="stageOne('no');">Nei</button>
  `;

}

function stageOne(choice) {
  if(choice == 'yes') {
    moveOn();
  } else if (choice == 'no') {
    endGame('Du hadde ikke det som skulle til for å gå videre i spillet. Da avslutter vi med en gang...');
  }
}






function endGame(reason) {
  output.innerHTML = `
    <p>Ajjj... ${reason}</p>
    <br>
    <p>Prøve igjen?</p>
    <button type="button" onclick="startGame()">Ja!</button>
  `
}
