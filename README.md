# IT2-game
# Situasjonsmal
`
    [] alt1 -> effekt1
    [] alt2 -> effekt2
    [] alt3 -> effekt3
`
# pathGameEnd #
`Au da! Din karakter #charNavn# døde! Vil du prøve på nytt?`
    [] Ja! -> gameStart
    [] Nei. -> gameMenu (Leder tilbake til startsiden)

# script #

  [x] #charNavn# sitter fast på øya. Det er hav rundt øya, og en strand og en jungel på øya. Hvor vil du gå? (no return + startpunkt)
      [x] Gå in i jungelen -> pathOne
      [] Gå til havet -> pathTwo
      [] Gå langs stranden -> pathThree

      [x] pathOne # Du går in i jungelen, og går i en ganske lang stund. Du klarer ikke finne veien tilbake. Du finner en hule. Hva gjør du?
          [] Gå til hulen -> pathOne1
          [x] Gå lengre in i jungelen -> pathOne2 -> pathGameEnd (X)

      [x] pathOne2 # #charNavn# går lengre in i jungelen. Det blir sakte mørkere og kaldere. Tilslutt kan du ikke se eller finne veien tilbake. Noen glimt i buskene viser seg igjennom bladene. Flere par av de dukker opp. En pakke med løver hopper ut på deg og spiser deg.
          [] defaultTo -> pathGameEnd

      [x] pathOne1 # Du går til hulen. Den er bekkmørk og du kan ikke se noe lengre enn fem meter ned i hulen ifra åpningen. Du hører ikke noe som kommer ifra hulen. Hva gjør du?
          [x] Gå inn i hulen -> pathOne3 -> pathGameEnd (X)
          [x] Lag en fakkel, og gå inn i hulen -> pathOne4
          [x] Gå tilbake mot jungelen -> pathOne

      [x] pathOne3 # Du går in i hulen. Hulen er veldig mørk, og du kan ikke se noe i hulen. Du hører drypping og drummingen av en foss. Plutselig snubbler du og faller. Men du stopper ikke opp. #charNavn# falt ned en klippe.
          [x] defaultTo -> pathGameEnd

      [x] pathOne4 # Du går in i hulen med en fakkel. Fakkelen lyser opp hulen godt og du kan se at du er i et stort hulerom. Du ser en foss, og i fossen sitter det en skarp metal stav fast. Du kan ta den om du strekker deg etter den. Hva gjør du?
          [] Ta staven -> setFlag: TattStav = true; + pathOne5
          [] Ikke ta staven -> pathOne5 -> pathOne6
          [] Gå videre innover hulen -> pathOne6

        (#TattStav.Value = True = Write('ta staven.')#; #TattStav.Value = false = Write('ikke ta staven.')#;)
        [] pathOne5 # Du bestemmer deg for å #TattStav.Value# Du går så lengere inn i hulen
            [] defaultTo -> pathOne6

        [] pathOne6 # Du går videre in i hulen. Du går en stund som virker en evighet. Forbi farlige klipper og skarpe steiner. Tilslutt kommer du frem til en åpning i hulen. Den slipper in lys, og du kan gå ut av hulen. Du vet ikke hva som er der oppe, men du kan ikke høre eller se noe som kan være truseler. Hva gjør du?
            [] Gå stille opp utgangen -> setFlag: gikkStille = true -> pathOne7
            [] Gå opp utgangen -> pathOne7 (#if flag:"gikkStille" = false then -> pathGameEnd)
            [] Kast opp fakkelen for å se om noe gjemmer seg der oppe. -> pathOne8


        [] pathOne7 # #if flag:"gikkStille" = true then Write('Du stikker opp hodet sakte igjennom åpningen, og ser deg om. Rundt 10 meter unna ligger en løve og sover. Hva gjør du?')#
            #if flag:"TattStav" = true then show button; [] Snik opp og drep løven -> pathOne9 -> pathGameEnd (X)
            [] Snik deg bort ifra løven -> pathOne10

            #if flag:"gikkStille" = false then -> pathGameEnd and Write('Du går opp igjennom åpningen. Når du kommer opp sitter en løve og sover. Løven våkner, og begynner å jage deg. Du blir overrasket og faller baklengs nedover hule åpningen. #charNavn# faller ned til sin død.') -> defaultTo -> pathGameEnd

        [] pathOne9 # Du sniker deg opp på løven, og sikter staven du plukket opp i hulen mot brystkassen av løven. Du tar i alt du kan, og stikker løven i brystet. Staven går igjennom huden på løven, men treffer bein. Løven våkner og slår deg med sin pote i ansiktet. #charNavn# slåes bevistløs, og blir senere drept. -> pathGameEnd

        [] pathOne8 # Du kaster opp fakkelen så hardt du kan. Den flyver opp mot utgangen, og kort etter kunne du høre et dunk. Etterhvert hører du brøling og knistring av ild. Du går opp utgangen etter en stund forsiktig og ser at jungelen brenner. Du traff en løve som begynte å brenne. Løven løp in i skogen og tente på resten. Hva gjør du?
            [] Løp vekk ifra brannen -> pathOne11 -> pathGameEnd
            [] Hopp tilbake in i hulen -> pathOne12 -> pathGameEnd
            [] Prøv lykken og løp in i den brennende skogen! -> pathOne10

        [] pathOne10 # Du løper igjennom den brennende jungelen. Igjennom røyk, aske og ild løper du. Du klarer å komme ut av jungelen, og lander på stranden. Øyen brenner i sitt fulle. Siden du er på stranden er du sikker ifra ilden. På horisonten ser du et paserende fly! Flyet er av en havtype, og kan lande på vannet. Den ser den brennende øya, og lander i nærheten. Manskapet åpner cockpiten, og ser deg. #charNavn# er blitt reddet! -> defaultTo -> pathGameWin

        [] pathOne11 # Du prøver å løpe ifra brannen, men løven som ble tent ild på har tent ild på jungelen rundt deg. Før du vet det havner du i en sky av røyk og aske. #charNavn# prøver å vandre igjennom røyken og komme seg til sikkerhet. #charNavn# svimer, og kveles etter en stund. -> defaultTo -> pathGameEnd

        [] pathOne12 # Du hopper tilbake in i hulen, og prøver å gjemme deg ifra brannen. For en stund funker dette, og du klarer å skjerme deg ifra både ilden og røyken. Brannen hadde gjort trærne svakere, derimot og noen av de falt over åpningen av hulen. Du har ikke styrken til å fjerne de, og du er innestengt. #charNavn# sulter eventuelt ihjel. -> defaultTo -> pathGameEnd
