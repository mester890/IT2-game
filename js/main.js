const output = document.body.querySelector('#output');
const scoreboard_output = document.body.querySelector('#scoreboard');
var scoreboard = new Scoreboard();

function Scoreboard() {
  this.name = "";
  this.stages = [];

  this.setTitle = function(src_name) {
    this.name = src_name;
  }

  this.update = function(stage, status) {
    var stg = {stage, status}
    this.stages.push(stg);
    scoreboard_output.innerHTML = `<h4>${this.name}</h4>`;
    for (stage of this.stages) {
      var status;
      if(stage.status == '1') {
        status = `<i class="fa fa-check"></i>`
      }
      scoreboard_output.innerHTML += `${stage.stage}  ${status}<br>`
    }
  }

  this.nullstill = function() {
    while(this.stages.length > 0) {
        this.stages.pop();
    }
  }
}

function startGame(pre_text) {
  scoreboard.nullstill();
  text = "";
  if(pre_text) {
    text = pre_text;
  }
  output.innerHTML = `
  <p>
    ${text}Du er strandet på en øde øy. Du må ta de riktige valgene for å komme deg til spillets ende. Greier du utfordringen?
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
  stageTwo()
}

function stageTwo() {
  output.innerHTML = `
  <p>
    ${scoreboard.name} sitter fast på øya. Det er hav rundt øya, og en strand og en jungel på øya. Hvor vil du gå?
    <button class="btn btn-block btn-light" onclick="pathOne('havet')">Gå til havet</button>
    <button class="btn btn-block btn-light" onclick="pathOne('stranden')">Gå langs stranden</button>
    <button class="btn btn-block btn-light" onclick="pathOne('jungelen')">Gå inn i jungelen</button>
  </p>
  `
}

function pathOne(choice) {
  if (choice == 'jungelen') {
    scoreboard.update('Går til ' + choice, '1');
    output.innerHTML = `
    <p>
      Du går inn i jungelen, og går i en ganske lang stund. Du klarer ikke finne veien tilbake. Du finner en hule. Hva gjør du?
    </p>
    <button class="btn btn-block btn-light" onclick="pathOne1()">Gå til hulen</button>
    <button class="btn btn-block btn-light" onclick="pathOne2()">Gå lengre inn i jungelen</button>
    `
  } else if (choice == 'havet') {
    scoreboard.update('Går til ' + choice, '1');
    output.innerHTML = `
    <p>
      Du går inn i jungelen, og går i en ganske lang stund. Du klarer ikke finne veien tilbake. Du finner en hule. Hva gjør du?
    </p>
    <button class="btn btn-block btn-light" onclick="pathOne1()">Gå til hulen</button>
    <button class="btn btn-block btn-light" onclick="pathOne2()">Gå lengre inn i jungelen</button>
    `
  } else if (choice == 'stranden') {
    scoreboard.update('Går til ' + choice, '1');
    output.innerHTML = `
    <p>
      Du går inn i jungelen, og går i en ganske lang stund. Du klarer ikke finne veien tilbake. Du finner en hule. Hva gjør du?
    </p>
    <button class="btn btn-block btn-light" onclick="pathOne1()">Gå til hulen</button>
    <button class="btn btn-block btn-light" onclick="pathOne2()">Gå lengre inn i jungelen</button>
    `
  }
}

function pathOne1() {
  scoreboard.update('Går til hulen', '1');
  output.innerHTML = `
  <p>
    Du går til hulen. Den er bekmørk og du kan ikke se noe lengre enn fem meter ned i hulen ifra åpningen. Du hører ikke noe som kommer ifra hulen. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathOne3()">Gå inn i hulen</button>
  <button class="btn btn-block btn-light" onclick="pathOne4()">Lag en fakkel, og gå inn i hulen</button>
  <button class="btn btn-block btn-light" onclick="pathOne('jungelen')">Gå tilbake mot jungelen</button>
  `
}

function pathOne2() {
  scoreboard.update('Går lengre inn i jungelen og dør', '1');
  endGame(scoreboard.name + ' går lengre in i jungelen. Det blir sakte mørkere og kaldere. Tilslutt kan du ikke se eller finne veien tilbake. Noen glimt i buskene viser seg igjennom bladene. Flere par av de dukker opp. En gruppe løver hopper ut og spiser deg.')
}

function pathOne3() {
  scoreboard.update('Går inn i hulen, faller og dør', '1');
  endGame('Du går inn i hulen. Hulen er veldig mørk, og du kan ikke se noe i hulen. Du hører drypping og drummingen av en foss. Plutselig snubbler du og faller. Men du stopper ikke opp. ' + scoreboard.name + ' falt ned en klippe.')
}

function pathOne4() {
  scoreboard.update('Lager en fakkel og går inn i hulen', '1');
  output.innerHTML = `
  <p>
    Du går inn i hulen med en fakkel. Fakkelen lyser opp hulen godt og du kan se at du er i et stort hulerom. Du ser en foss, og i fossen sitter det en skarpmetalstav fast. Du kan ta den om du strekker deg etter den. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathOne5('stav', 'true')">Ta staven</button>
  <button class="btn btn-block btn-light" onclick="pathOne5('stav', 'false')">Ikke ta staven</button>
  <button class="btn btn-block btn-light" onclick="pathOne6()">Gå videre innover hulen</button>
  `
}
function pathOne5(key, val) {
  if (key == 'stav' && val == 'true') {

  } else if (key == 'stav' && val == 'false') {
    
  }
}


function endGame(reason) {
  output.innerHTML = `
    <h2 class="text-center" >Ajjj...</h2>
    <p>${reason}</p>
    <p class="text-center text-muted">Prøve igjen?</p>
    <button type="button" class="btn btn-block btn-warning" onclick="startGame('Som du sikkert vet...  ')">Ja!</button>
  `
}
