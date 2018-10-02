const output = document.body.querySelector('#output');
const scoreboard_output = document.body.querySelector('#scoreboard');
var scoreboard = new Scoreboard();

function Scoreboard() {
  this.title = "";
  this.stages = [];
  this.setTitle = function(src_name) {
    this.title = src_name;
  }
  this.update = function(stage, status) {
    var stg = {stage, status}
    this.stages.push(stg);
    scoreboard_output.innerHTML = "";
    for (stage of this.stages) {
      scoreboard_output.innerHTML += `${stage.stage} = ${stage.status} <br>`
    }
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
    <button class="btn btn-block btn-light" id="player_name_btn">Gå videre</button>
    </form>
    `;
    document.getElementById("player_name_btn").addEventListener("click", function(event){
      event.preventDefault()
      setScoreboardTitle(player_naming.player_name.value);
    });
  } else if (choice == 'no') {
    endGame('Du hadde ikke det som skulle til for å gå videre i spillet. Da avslutter vi med en gang...');
  }

}

function setScoreboardTitle(title) {
  scoreboard.setTitle(title);
  scoreboard.update('Valgt navn', '1');
}





function endGame(reason) {
  output.innerHTML = `
    <h2 class="text-center" >Ajjj...</h2>
    <p>${reason}</p>
    <p class="text-center text-muted">Prøve igjen?</p>
    <button type="button" class="btn btn-block btn-warning" onclick="startGame()">Ja!</button>
  `
}
