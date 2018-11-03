//T: Definerer variabelnavn for enkelte elementer på siden. Disse brukes flittig
//videre utover koden, for enklere aksess.
const output = document.body.querySelector('#output');
const scoreboard_output = document.body.querySelector('#scoreboard');

//T: Tar ibruk Scoreboard-funksjonen og lager en ny instans av dette. gir et passende navn.
var scoreboard = new Scoreboard();

//T: Definerer hva et Scoreboard er i denne funksjonen. Ikke noe i veien for å lage flere scoreboards.
function Scoreboard() {
  this.name = "";
  this.stages = [];
  this.hasStav = false;
  this.gikkStille = false;

  //T: Funksjon i scoreboard.
  this.setTitle = function(src_name) {
    this.name = src_name;
  }

  //T: Funksjon for å legge til "fullførte steg i spillet. Lagres i scoreboard."
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

  //T: nullstillingsfunksjon i scoreboard.
  this.nullstill = function() {
    while(this.stages.length > 0) {
        this.stages.pop();
    }
  }
}

/** Thomas
 * Nullstiller scoreboard og legger til første steg i viewet. 
 * Om det er sendt med en parameter til denne funksjonen, legges det til før teksten i viewet.
 */
function startGame(pre_text) {
  scoreboard.nullstill();
  document.body.style.background = 'linear-gradient:(40deg, #ffffff, #000000)';
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

//T: Første stage. bruker en parameter, yes eller no. Bruker if for å velge hva som skal vises i viewet.
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
      //T: event.preventDefault gjør det slik at vinduet ikke refresher, som er standardhandling når det kommer til nettlesere og forms.
      event.preventDefault()
      setScoreboardTitle(player_naming.player_name.value);
    });
  } else if (choice == 'no') {
    endGame('Du hadde ikke det som skulle til for å gå videre i spillet. Da avslutter vi med en gang...');
  }

}

//T: Funksjon for å oppdatere tittelen på scoreboardet. 
function setScoreboardTitle(title) {
  //T: tar ibruk internfunksjonene på scoreboard.
  scoreboard.setTitle(title);
  scoreboard.update('Valgt navn', '1');
  //T: sender deg til neste view.
  stageTwo()
}

function stageTwo() {
  output.innerHTML = `
  <p>
    ${scoreboard.name} sitter fast på øya. Det er en strand og en jungel på øya. Hvor vil du gå?
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

  } else if (choice == 'stranden') {
    scoreboard.update('Går til ' + choice, '1');
    output.innerHTML = `
    <p>
      Du går lengs stranden, sanden er varm under føttene og solen lyser ganske gassende ned på deg. Du ser lengs kysten av øya. Lengre bort i horisonten kan du se en siluett av en stor gjennstand. Du kan ikke se helt klart hva det er, men det ser ut til å være en båt. Hva gjør du?
    </p>
    <button class="btn btn-block btn-light" onclick="pathTwo2()">Gå mot Siluetten</button>
    <button class="btn btn-block btn-light" onclick="pathTwo21()">Gå ifra siluetten og rundt</button>
    `
  }
}

function pathTwo21() {
  scoreboard.update('Går ifra siluetten', '1');
  output.innerHTML = `
  <p>
    Du går ifra siluetten og tilbake lengs du kom. Du kan gå lengre ned stranden ifra siluetten og følge kysten, eller du kan gå in i jungelen. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathOne1()">Gå in i jungelen</button>
  <button class="btn btn-block btn-light" onclick="pathTwo22()">Gå videre lengs kysten</button>
  `
}

function pathTwo22() {
  scoreboard.update('Går videre lengs kysten', '1');
  output.innerHTML = `
  <p>
    Du går lengs strandkanten på den andre siden. Her er det mindre trær og mer strender. Disse var langstrekte, og fulgte hele kysten slik du kunne se. Øynene dine følger lengs strandkanten og passerer klukende vann og lekne sjømåker og andre tropiske fulger. Du ser også noen krabber og skaldyr. Men på slutten av stranden er det flere steiner som er store som hus. Disse blokerer videre gang. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo23()">Gå videre til steinene</button>
  `
}

function pathTwo23() {
  scoreboard.update('Går videre til steinene', '1');
  output.innerHTML = `
  <p>
    Du fortsetter likevel lengs stranden. Du ser deg om imens du går, og lurer på hvordan disse steinene kom hit i det heletatt. Mot jungelen så ser du en betydelig høyde som reiser seg over øya. Antageligvis kom steinene fallende ned derfra? På nærmere undersøkelse av steinene så finner du flere forskjellige symboler former og tegn. De forskjellige symbolene har linjer som treffer hver av symbolene som om de var punkter. Det påminner om et stjernekart. Bortsett ifra at de var vakkert uthugget, så ser det ut som om de ikke har noen annen funksjon. Det er noen små hakk og skrapemerker som du kan få plass med fingrer og føtter. Det ser ut som om du kan klatre opp steinen. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo24()">Prøv å klatre opp steinene</button>
  <button class="btn btn-block btn-light" onclick="pathOne1()">Gå inn i jungelen</button>
  `
}

function pathTwo24() {
scoreboard.update('Blir bitt av slange', '1');
  endGame('Du begynner å klatre opp siden av den uthoggde steinen igjennom å stikke føtter og hender hvorhen du kan få grepp om steinen. Steinene var meget høye og gamle, og fylt med sprekker og hakk som en kunne klatre i. Du nærmer deg toppen, men du gjør et feiltrinn og din ene fot glir ut av sprekken som den sto i. ' + scoreboard.name + ' faller til sin død.')
}

function pathTwo2() {
  scoreboard.update('Går til siluetten', '1');
  output.innerHTML = `
  <p>
    Du går mot siluetten lengs stranden. Du går lengs skogkanten under hengende trær for å skjerme deg ifra solens lys. Bladene trasler i vinden, og du kommer nå langt nok frem til å se hva siluetten var. Det var en fiskebåt. Den virker spesielt gammel, og mye av malingen på skroget har tørket og krøllet seg opp. Skroget er lett skadd, med et lite hull på den siden du ser på. Den ser ut til å være motor drivet. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo3()">Gå inn i båten</button>
  `
}

function pathTwo3() {
  scoreboard.update('Går inn i båten', '1');
  output.innerHTML = `
  <p>
    Du bestemmer deg for å prøve å gå inn i båten. Båtens skrog ser ut til å være i forholdsvis god skikk, men med noen hull som er store nok til å senke båten om den skulle ut i vann. Båten ligger på en vinkel slik at du kan klatre opp på dekket, og komme ned i båtens indre. Bortsett ifra noen krabber i kapteinens kabine, og mye vekst i alle de andre rommene så er det ikke mye som du finner umiddelbart. Ved videre undersøkelse av de to forskjellige rommene i båten finner vi en flaske, en kjetting, en nødboye og en bunte med tau i kapteinens kabine. Det er også et skap som er tilstede I båtens lugar og i det finner du noen utslitte klær og sengetøy. Det er en safe under styreroret i kapteinens kabine. Den er rusten, men du kan ikke finne noen måte å åpne den. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo4()">Prøv å åpne safen</button>
  `
}

function pathTwo4() {
  scoreboard.update('Prøver å åpne safen', '1');
  output.innerHTML = `
  <p>
    Du prøver å åpne safen med makt. Selv om døra på safen er skadd på hengslene, vil den ikke ryke. Det ser ikke ut til at den er villig til å rykke seg opp med makt bare. Du kan ikke dra den heller. Du merker at gulvet under safen er forholdsvis råttent, og vil kanskje gi etter hvis det får et kraftig smell. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo5()">Prøv å åpne safen igjen</button>
  <button class="btn btn-block btn-light" onclick="pathTwo6()">Prøv å knus gulvet under safen</button>
  `
}

function pathTwo5() {
scoreboard.update('Blir bitt av slange', '1');
  endGame('Du prøver enda en gang å få opp safen med makt. Den rykker seg fortsatt ikke noe, og du er trøtt i kroppen etter arbeidet. Plutselig hører du hvesing ifra safen. Du reagerer, men alt for sakte og blir bitt av en slange som gjemte seg i safen. Slangen var giftig, og du dør innom 15 minutter.')
}

function pathTwo6() {
  scoreboard.update('Prøver å knuse gulvet', '1');
  output.innerHTML = `
  <p>
    Du prøver å knuse gulvet under safen med makt. Gulvet er dessverre under roret, noe som gjør det litt vanskelig å nå frem. Du kan ikke lage nok makt for å knuse gulvet. Kanskje det er mulig ifra undersiden? Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo7()">Prøv å knus gulvet ifra undersiden</button>
  <button class="btn btn-block btn-light" onclick="pathTwo8()">Plukk opp kjettingen og knus gulvet ifra undersiden</button>
  `
}

function pathTwo7() {
 scoreboard.update('Prøver å knuse gulvet ifra undersiden', '1');
 endGame('Du prøver å knuse gulvet under safen med bare nevene. Du får det til, men safen faller rett oppe på deg, og  knuser hodet ditt. Du dør.')
}


function pathTwo8() {
  scoreboard.update('Knuser gulvet med kjettingen', '1');
  output.innerHTML = `
  <p>
    Du knuser gulvet med kjettingen, og etter et høyt brak faller safen ned på marken og knuser safedøra. Du går opp og undersøker safen. I safen finner du en død slange, og en nødbluss pistol. Du har totalt sett 4 skudd, når du teller med den som var allerede ladd. Du bestemmer deg for å ta den. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo9()">Gå ut og skyt opp noen nødbluss</button>
  <button class="btn btn-block btn-light" onclick="pathTwo10()">Vent til det er blitt kveld</button>
  `
}

function pathTwo9() {
 scoreboard.update('Skyter opp bluss på dagtid', '1');
 endGame('Du skyter opp noen skudd til du ikke har noe igjen. Lysene skimrer i himmelen. Men siden det er dag, er det ikke like klart some det kunne ha vært. Du ser at blussene faller sakte ned i havets dyp og forsvinner sammen med lyset. Etter flere dager med sult og mangel på vann, dør du...')
}

function pathTwo10() {
 scoreboard.update('Skyter opp bluss på kvelden', '1');
 endGameReason('win', 'Du venter til det er blitt kveld, og stjernene har satt seg på himmelen. De blinker som hvite kristaller i et mørkt hav. Du fyrer av et nødbluss ut i nattehimmelen. Det røde lyset sto ut imellom de glimrende hvite prikkene, og mange burde kunne se lyset på en lang avstand. Du venter en stund og ser det røde lyset brenne sakte over horisonten, før det så treffer havet. Du skytter en til, og ser den seile over den lysende nattehimmelen. Du er på vei til å fyre av en ny, når du ser et lys på havets kant. Først liten, men så kommer den nærmere. Det er en båt som kommer. Du er blitt reddet!')
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
    scoreboard.update('Du bestemmer deg for å ta staven', '1');
    scoreboard.hasStav = true;
  } else if (key == 'stav' && val == 'false') {
    scoreboard.update('Du bestemmer deg for å ikke ta staven', '1');
  }
  stageOne6();
}

function stageOne6() {
  output.innerHTML = `
  <p>
  Du går videre in i hulen. Du går en stund som virker en evighet. Forbi farlige klipper og skarpe steiner. Tilslutt kommer du frem til en åpning i hulen. Den slipper in lys, og du kan gå ut av hulen. Du vet ikke hva som er der oppe, men du kan ikke høre eller se noe som kan være truseler. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathOne7('gikkStille', 'true')">Gå stille opp utgangen</button>
  <button class="btn btn-block btn-light" onclick="pathOne7('gikkStille', 'false')">Gå opp utgangen</button>
  <button class="btn btn-block btn-light" onclick="pathOne8()">Kast opp fakkelen for å se om noe gjemmer seg der oppe</button>
  `
}
function pathOne7(key, val) {
  if (key == 'gikkStille' && val == 'true') {
    scoreboard.update('Du går stille opp utgangen', '1');
    scoreboard.gikkStille = true;
    output.innerHTML = `
    <p>
      Du stikker opp hodet sakte igjennom åpningen, og ser deg om. Rundt 10 meter unna ligger en løve og sover. Hva gjør du?
    <p>
    <p id='innerOutput'></p>
    `;
  } else if (key == 'gikkStille' && val == 'false') {
    scoreboard.update('Du rabler ivei opp utgangen', '1');
    endGame('Du går opp igjennom åpningen. Når du kommer opp sitter en løve og sover. Løven våkner, og begynner å jage deg. Du blir overrasket og faller baklengs nedover huleåpningen. ' + scoreboard.name + ' faller ned til sin død.');
  }
  var innerOutput = document.body.querySelector('#innerOutput');
  if (scoreboard.gikkStille == true) {
    innerOutput.innerHTML = `
      <button class="btn btn-block btn-light" onclick="pathOne10()">Snik deg bort fra løven</button>
    `;
  } else if (scoreboard.hasStav == true) {
    output.innerHTML = `
      <p>Du stikker opp hodet sakte igjennom åpningen, og ser deg om. Rundt 10 meter unna ligger en løve og sover. Hva gjør du?</p>
      <button class="btn btn-block btn-light" onclick="pathOne9()">Snik deg opp og drep løven</button>
    `;
  } 
}

function pathOne8() {
  scoreboard.update('Kaster opp fakkelen', '1');
  output.innerHTML = `
  <p>
    Du kaster opp fakkelen så hardt du kan. Den flyver opp mot utgangen, og kort etter kunne du høre et dunk. Etterhvert hører du brøling og knistring av ild. Du går opp utgangen etter en stund forsiktig og ser at jungelen brenner. Du traff en løve som begynte å brenne. Løven løp in i skogen og tente på resten. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathOne11()">Løp vekk ifra brannen</button>
  <button class="btn btn-block btn-light" onclick="pathOne12()">Hopp tilbake in i hulen</button>
  <button class="btn btn-block btn-light" onclick="pathTwo101()">Prøv lykken og løp in i den brennende skogen!</button>
  `
}

function pathOne11() {
  scoreboard.update('Løp vekk ifra brannen', '1');
    endGame('Du prøver å løpe ifra brannen, men løven som ble tent ild på har tent ild på jungelen rundt deg. Før du vet det havner du i en sky av røyk og aske. #charNavn# prøver å vandre igjennom røyken og komme seg til sikkerhet. ' + scoreboard.name + ' svimer, og kveles etter en stund.');
  }

function pathOne12() {
  scoreboard.update('Hoppet inn i hulen', '1');
    endGame('Du hopper tilbake in i hulen, og prøver å gjemme deg ifra brannen. For en stund funker dette, og du klarer å skjerme deg ifra både ilden og røyken. Brannen hadde gjort trærne svakere, derimot og noen av de falt over åpningen av hulen. Du har ikke styrken til å fjerne de, og du er innestengt.' + scoreboard.name + ' sulter eventuelt ihjel.');
  }


function pathOne9() {
  scoreboard.update('Prøver å¨drepe løven', '1');
    endGame('Du sniker deg opp på løven, og sikter staven du plukket opp i hulen mot brystkassen av løven. Du tar i alt du kan, og stikker løven i brystet. Staven går igjennom huden på løven, men treffer bein. Løven våkner og slår deg med sin pote i ansiktet. ' + scoreboard.name + ' slåes bevistløs, og blir senere drept.');
  }

function pathTwo101() {
 scoreboard.update('Blir reddet av fly', '1');
 endGameReason('win', 'Du løper igjennom den brennende jungelen. Igjennom røyk, aske og ild løper du. Du klarer å komme ut av jungelen, og lander på stranden. Øyen brenner i sitt fulle. Siden du er på stranden er du sikker ifra ilden. På horisonten ser du et paserende fly! Flyet er av en havtype, og kan lande på vannet. Den ser den brennende øya, og lander i nærheten. Manskapet åpner cockpiten, og ser deg. ' + scoreboard.name + ' er blitt reddet!')
}

function pathOne10() {
  scoreboard.update('Sniker seg ut av jungelen', '1');
  output.innerHTML = `
  <p>
    Du sniker deg forsiktig ifra løven, og kommer deg videre ut av jungelen. Du er nå på stranden, og ser en båt foran deg. Du tenker at det ikke er en så god idè å gå tilbake der du kom fra. Hva gjør du?
  </p>
  <button class="btn btn-block btn-light" onclick="pathTwo3()">Gå in i båten</button>
  `
}

function endGame(reason) {
  output.innerHTML = `
    <h2 class="text-center" >Ajjj...</h2>
    <p>${reason}</p>
    <p class="text-center text-muted">Prøve igjen?</p>
    <button type="button" class="btn btn-block btn-warning" onclick="startGame('Som du sikkert vet...  ')">Ja!</button>
  `
}

function endGameReason(type, text) {
  if(type == 'win') {
    scoreboard.update(`Du ble reddet, og vinner derfor denne runden.`);
    output.innerHTML = `
      <h2 class="text-center" >Gratulerer!</h2>
      <p>${text}</p>
      <button type="button" class="btn btn-block btn-warning" onclick="startGame('Greier du det i gjen? ')">Rematch</button>
    `;
  }
  
  if(type == 'loss') {
    scoreboard.update(`Du blir drept, og taper derfor denne runden.`);
    output.innerHTML = `
      <h2 class="text-center" >Dessverre!</h2>
      <p>${text}</p>
      <p class="text-center text-muted">Prøve igjen?</p>
      <button type="button" class="btn btn-block btn-warning" onclick="startGame('Som du sikkert vet...  ')">Ja!</button>
    `
  }
}
