# IT2-game

#stage3 (start)

#mal

#[] situasjon
    [] alt1 -> effekt1
    [] alt2 -> effekt2
    [] alt3 -> effekt3# 
    
#pathGameEnd
`Au da! Din karakter #charNavn# døde! Vil du prøve på nytt?`
    [] Ja! -> gameStart
    [] Nei. -> gameMenu (Leder tilbake til startsiden)
    
#script

[] #charNavn# sitter fast på øya. Det er hav rundt øya, og en strand og en jungel på øya. Hvor vil du gå? (no return + startpunkt)
    [] Gå in i jungelen -> pathOne
    [] Gå til havet -> pathTwo
    [] Gå langs stranden -> pathThree
    
    [] pathOne # Du går in i jungelen, og går i en ganske lang stund. Du klarer ikke finne veien tilbake. Du finner en hule. Hva gjør du?
        [] Gå til hulen -> pathOne1
        [] Gå lengre in i jungelen -> pathOne2 -> pathGameEnd (X)
    
    [] pathOne2 # #charNavn# går lengre in i jungelen. Det blir sakte mørkere og kaldere. Tilslutt kan du ikke se eller finne veien tilbake. Noen glimt i buskene viser seg igjennom bladene. Flere par av de dukker opp. En pakke med løver hopper ut på deg og spiser deg.
        [] defaultTo -> pathGameEnd
        
    [] pathOne1 # Du går til hulen. Den er bekkmørk og du kan ikke se noe lengre enn fem meter ned i hulen ifra åpningen. Du hører ikke noe som kommer ifra hulen. Hva gjør du?
        [] Gå inn i hulen -> pathOne3 -> pathGameEnd (X)
        [] Lag en fakkel, og gå in i hulen -> pathOne4
        [] Gå tilbake mot jungelen -> pathOne
    
    [] pathOne3 # Du går in i hulen. Hulen er veldig mørk, og du kan ikke se noe i hulen. Du hører drypping og drummingen av en foss. Plutselig snubbler du og faller. Men du stopper ikke opp. #charNavn# falt ned en klippe.
        [] defaultTo -> pathGameEnd
        
    [] pathOne4 # Du går in i hulen med en fakkel. Fakkelen lyser opp hulen godt og du kan se at du er i et stort hulerom. Du ser en foss, og i fossen sitter det en skarp metal stav fast. Du kan ta den om du strekker deg etter den. Hva gjør du?
        [] Ta staven -> setFlag: TattStav = true; + pathOne5
        [] Ikke ta staven -> pathOne5
        [] Gå videre innover hulen -> pathOne6