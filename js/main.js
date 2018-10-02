const output = document.body.querySelector('#output');
const scoreboard_output = document.body.querySelector('#scoreboard');
var scoreboard;

function Scoreboard() {
  this.update = function(stage, status) {

  }
}

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
    output.innerHTML = `
    <p>Du er nesten klar til å starte, men først må du gi karakteren din et navn!</p>
    <form name="player_naming">
    <p>
      <label for"player_name">Skriv inn navn:</label>
      <input class="form-control" name="player_name" id="player_name">
    </p>
    <button class="btn btn-block btn-light" onclick="setScoreboardName(player_naming.player_name.value)">Gå videre</button>
    </form>
    `;

  } else if (choice == 'no') {
    endGame('Du hadde ikke det som skulle til for å gå videre i spillet. Da avslutter vi med en gang...');
  }
}

function setScoreboardName(player_name) {
  scoreboard = new Scoreboard(player_name);
}





function endGame(reason) {
  output.innerHTML = `
    <h2 class="text-center" >Ajjj...</h2>
    <p>${reason}</p>
    <p class="text-center text-muted">Prøve igjen?</p>
    <button type="button" class="btn btn-block btn-warning" onclick="startGame()">Ja!</button>
  `
}
