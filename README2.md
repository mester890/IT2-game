# PathTwo Strand

## Logikken bak koden. Merk at noen av valgene er blitt forenklet eller fjernet.
## pathMal
 []Situasjon1 # Beskrivelse
    []KnappAlt1
        # Beskrivelse -> + pathX (+ flagSet)
    []KnappAlt2
        # Beskrivelse -> + pathX (+ flagSet)
    []KnappAlt3
        # Beskrivelse -> + pathX (+ flagSet)
        
## PathTwo Strand innhold ##

  [X] pathTwo1 # Du går lengs stranden, sanden er varm under føttene og solen lyser ganske gassende ned på deg. Du ser lengs kysten av øya. Lengre bort i horisonten kan du se en siluett av en stor gjennstand. Du kan ikke se helt klart hva det er, men det ser ut til å være en båt. Hva gjør du?
     [X]Gå mot siluetten
        # -> pathTwo2
            # Du går mot siluetten lengs stranden. Du går lengs skogkanten under hengende trær for å skjerme deg ifra solens lys. Bladene trasler i vinden, og du kommer nå langt nok frem til å se hva siluetten var. Det var en fiskebåt. Den virker spesielt gammel, og mye av malingen på skroget har tørket og krøllet seg opp. Skroget er lett skadd, med et lite hull på den siden du ser på. Den ser ut til å være motor drivet. Hva gjør du?
                [X]Gå inn i båten
                    # -> pathTwo6
                        # Du bestemmer deg for å prøve å gå inn i båten. Båtens skrog ser ut til å være i forholdsvis god skikk, men med noen hull som er store nok til å senke båten om den skulle ut i vann. Båten ligger på en vinkel slik at du kan klatre opp på dekket, og komme ned i båtens indre. Bortsett ifra noen krabber i kapteinens kabine, og mye vekst i alle de andre rommene så er det ikke mye som du finner umiddelbart. Ved videre undersøkelse av de to forskjellige rommene i båten finner vi en flaske, en kjetting, en nødboye og en bunte med tau i kapteinens kabine. Det er også et skap som er tilstede I båtens lugar og i det finner du noen utslitte klær og sengetøy. Det er en safe under styreroret i kapteinens kabine. Den er rusten, men du kan ikke finne noen måte å åpne den. Hva gjør du?
                            [X]Prøv å åpne safen
                                # -> pathTwo7
                                    # Du prøver å åpne safen med makt. Selv om døra på safen er skadd på hengslene, vil den ikke ryke. Det ser ikke ut til at den er villig til å rykke seg opp med makt bare. Du kan ikke dra den heller. Du merker at gulvet under safen er forholdsvis råttent, og vil kanskje gi etter hvis det får et kraftig smell. Hva gjør du?
                                        [X]La være å åpne safen, å gå ut av båten.
                                            # -> pathTwo8
                                                # Du bestemmer deg for å forlate båten, og er nå på utsiden av skipet. Hva gjør du?
                                                # Se pathTwo8 '[]Gå ut av båten' for valg av handling #
                                        [X]Prøv å knus gulvet under safen
                                            # -> pathTwo9
                                                # Du prøver å knuse gulvet under safen med makt. Gulvet er dessverre under roret, noe som gjør det litt vanskelig å nå frem. Du kan ikke lage nok makt for å knuse gulvet. Kanskje det er mulig ifra undersiden? Hva gjør du?
                                                    [X]Plukk opp kjettingen ifra kabinen
                                                        # -> setFlag:'tattKjetting' == true
                                                        # -> removeOption:'[]Plukk opp kjettingen ifra kabinen'
                                                        # -> returnTo:'pathTwo9'
                                                    [X]Gå til rommet under kabinen
                                                        # -> pathTwo10
                                                            # Du går ned båten og kommer til rommet under kabinen. Rommet lukter sterkt av tang og hav. Det er varmt, og det er ikke mye i rommet. Før du gikk ned markerte du plassen hvor du skulle slå igjennom gulvet. Hva gjør du?
                                                                [X]Knus gulvet
                                                                    # -> if flag:'tattKjetting' == true
                                                                        # then write
                                                                        # Du knuser gulvet med kjettingen, og etter et høyt brak faller safen ned på marken og knuser safedøra. Du går opp og undersøker safen. I safen finner du en død slange, og en nødbluss pistol. Du har totalt sett 4 skudd, når du teller med den som var allerede ladd. Du bestemmer deg for å ta den. Hva gjør du?
                                                                    # -> if flag:'tattKjetting' == false
                                                                        # then defaultTo: pathGameEnd
                                                                        # write
                                                                            # Du prøver å knuse gulvet under safen med bare nevene. Du får det til, men safen faller rett oppe på deg, og  knuser hodet ditt. Du dør.
                                                                            [X]Gå ut og skyt opp noen nødbluss
                                                                                # -> pathGameEnd
                                                                                    # Du skyter opp noen skudd til du ikke har noe igjen. Lysene skimrer i himmelen. Men siden det er dag, er det ikke like klart some det kunne ha vært. Du ser at blussene faller sakte ned i havets dyp og forsvinner sammen med lyset. Etter flere dager med sult og mangel på vann, dør du.
                                                                            [X]Vent til det er blitt kveld
                                                                                # -> pathGameWin
                                                                                    # Du venter til det er blitt kveld, og stjernene har satt seg på himmelen. De blinker som hvite kristaller i et mørkt hav. Du fyrer av et nødbluss ut i nattehimmelen. Det røde lyset sto ut imellom de glimrende hvite prikkene, og mange burde kunne se lyset på en lang avstand. Du venter en stund og ser det røde lyset brenne sakte over horisonten, før det så treffer havet. Du skytter en til, og ser den seile over den lysende nattehimmelen. Du er på vei til å fyre av en ny, når du ser et lys på havets kant. Først liten, men så kommer den nærmere. Det er en båt som kommer. Du er blitt reddet!
                                        [X]Prøv å åpne en gang til
                                            # -> pathGameEnd
                                                # Du prøver enda en gang å få opp safen med makt. Den rykker seg fortsatt ikke noe, og du er trøtt i kroppen etter arbeidet. Plutselig hører du hvesing ifra safen. Du reagerer, men alt for sakte og blir bitt av en slange som gjemte seg i safen. Slangen var giftig, og du dør innom 15 minutter.
                            [X]Gå ut av båten
                                # -> pathTwo8
                                    # Du går ut ifra båten, og kommer frem til utsiden. Hva gjør du?
                [X]Undersøk båten på utsiden
                    # -> pathTwo2
                        # write
                        # Du undersøker båten på utsiden, men det ser ut som om du ikke kan finne noe av større interesse. Du finner ikke noen måte å fikse hullene på. Du finner motoren, men den er bortenom reparasjon. Kanskje det er noe mer på innsiden av båten?
     [X]Gå ifra siluetten i motsatt retning
        # -> pathTwo3
            # Du går ifra siluetten og tilbake lengs du kom. Du kan gå lengre ned stranden ifra siluetten og følge kysten, eller du kan gå in i jungelen. Hva gjør du?
                [X]Gå lengs strandkanten ifra siluetten
                    # -> pathTwo4
                        # Du går lengs strandkanten på den andre siden. Her er det mindre trær og mer strender. Disse var langstrekte, og fulgte hele kysten slik du kunne se. Øynene dine følger lengs strandkanten og passerer klukende vann og lekne sjømåker og andre tropiske fulger. Du ser også noen krabber og skaldyr. Men på slutten av stranden er det flere steiner som er store som hus. Disse blokerer videre gang. Hva gjør du?
                            [X]Gå til steinene
                                # -> pathTwo5
                                    # Du fortsetter likevel lengs stranden. Du ser deg om imens du går, og lurer på hvordan disse steinene kom hit i det heletatt. Mot jungelen så ser du en betydelig høyde som reiser seg over øya. Antageligvis kom steinene fallende ned derfra? På nærmere undersøkelse av steinene så finner du flere forskjellige symboler former og tegn. De forskjellige symbolene har linjer som treffer hver av symbolene som om de var punkter. Det påminner om et stjernekart. Bortsett ifra at de var vakkert uthugget, så ser det ut som om de ikke har noen annen funksjon. Det er noen små hakk og skrapemerker som du kan få plass med fingrer og føtter. Det ser ut som om du kan klatre opp steinen. Hva gjør du?
                                    [X]Klatre opp steinen
                                        # -> pathGameEnd
                                            # Du begynner å klatre opp siden av den uthoggde steinen igjennom å stikke føtter og hender hvorhen du kan få grepp om steinen. Steinene var meget høye og gamle, og fylt med sprekker og hakk som en kunne klatre i. Du nærmer deg toppen, men du gjør et feiltrinn og din ene fot glir ut av sprekken som den sto i. (charNavn) faller til sin død.
                                    [X]Gå tilbake til der du kom fra
                                        # -> pathTwo3
                                            # Du går tilbake til der du startet. Du kan gå til Jungelen, havet eller tilbake til stranden. Hva gjør du?
                [X]Gå til jungelen
                    # -> pathOne1
                        # Se videre detaljer i README.md for resten av paths
     [X]Gå ifra stranden ned til havet i stedet
        # -> pathThree1
            # Se videre detaljer i README3.md for resten av paths
                # Du går ned til havet. Bølgene piskes lett opp av den lett dansende vinden, og vannet strømmer over dine føtter når du står på kanten av stranden. I vannet ser du at det er det en lett bakke som gradvis blir dypere. Bunnen har en blanding av sand, stein og flere forskjellige alger som sitter fast i bunnen, eller flyter på vannet. Du kan ikke se noe på flere mils avstand, og horisonten er uklar. Hva gjør du videre?