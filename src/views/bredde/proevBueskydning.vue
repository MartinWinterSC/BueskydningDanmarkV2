<script setup>
import { ref } from 'vue'

const accordions = ref([
  {
    title: 'Hvordan kan jeg komme i gang med bueskydning?',
    open: false,
  },
  {
    title: 'Er det svært at lære at skyde med bue?',
    open: false,
  },
  {
    title: 'Hvad er aldersgrænsen for at begynde at skyde med bue?',
    open: false,
  },
  {
    title: 'Hvilke discipliner findes der indenfor bueskydning?',
    open: false,
  },
  {
    title: 'Hvilke buetyper findes der?',
    open: false,
  },
  {
    title: 'Hvordan kommer jeg i gang med udstyr?',
    open: false,
  },
])

const toggleAccordion = (index) => {
  accordions.value[index].open = !accordions.value[index].open
}
</script>

<template>
<main>
    <section class="intro">
        <img src="@/assets/Billeder/Bue-Buddy-hjemmeside-1.1.jpg" alt="">
        <h1>Det er sjovt at skyde med bue!</h1>
        <p>Som ny skytte finder man rundt om i Danmark, mere end 60 klubber som er klar til at give en god oplevelse. De fleste klubber har buer og pile, som man kan låne i starten, så man ikke skal ud og investere en masse penge får man er sikker på at man bliver bidt af bueskydning.</p>
        <div class="buttonContainer">
            <StandardBtn variant="primary" @click="$router.push('klubOversigtView')">Find din lokale bueforening</StandardBtn>
        </div>
    </section>
    <section>
        <video src="@/assets/Bueskydning-Danmark-Profilfilm.mp4"></video>
        <h2>Hvad er bueskydning?</h2>
        <p>Bueskydning er en sport og fritidsbeskæftigelse for alle. Drenge og piger i alle aldre kan være med og få sig en hyggelig stund på skydebanen eller i skoven.</p>
        <p>Bueskydning er en individuel sport og man kan frit bestemme selv, hvor meget man vil gøre ud af bueskydningen. Mange har stor fornøjelse af at bruge bueskydningen som rekreation og afslapning – og til at koble fra med. Andre sætter sig mål som de forsøger at opnå, hvorefter de sætter nye mål og atter andre har evnerne til at blive blandt verdens bedste bueskytter.</p>
        <p>Bueskydning kræver mest af alt koncentration og at man bliver i stand til at gøre de samme bevægelser skud for skud. Det er forholdsvist svært at opnå høj præcision og mange bliver bidt af jagten på at kunne skyde sine pile ens hver gang. Bueskydning skærper ens evne til at fordybe sig, skærper ens tålmodighed og skærper ens evner til at være rolig i stressede situationer. Alt sammen og mere til, er det egenskaber, der er gode at have med sig ud i dagligdagen.</p>
        <p>I mange tilfælde kan man få adgang til sin klubs skydebaner på alle tidspunkter, hvorfor man har mulighed for at træne på de tidspunkter der passer én bedst, udover de fastsatte træningstidspunkter. Det sociale samvær over en kop kaffe eller sodavand er ofte højt værdsat blandt bueskytterne i alle aldre, hvilket gør træningssamlingerne til hyggelige stunder som man ser frem til.</p>
    </section>
    <section>
        <h2>Hvorfor vælge bueskydning?</h2>
        <p>Der er mange gode grunde til at vælge at gå til bueskydning. Bueskydning kræver nemlig præcision, kontrol, fokus, fysisk og beslutsomhed. Uanset om du er topatlet eller bare dyrker bueskydning i din fritid, om du praktisere bueskydning indendørs eller udendørs, konkurrencemæssigt eller socialt – og på trods af at det ofte opfattes som stationært – gør bueskydning dig aktiv, forbrænder kalorier og i bedre humør. Bueskydning har flere fordele for dit helbred. Her kommer der 8 gode grunde til at vælge bueskydning:</p>
        <dl>
            <dt>Motion</dt>
            <dd>Bueskydning er en sport, der kan dyrkes af alle, uanset alder, køn eller evner. Du bruger din fysisk, når du skal spænde buen samt bruger du også energi på at gå frem og tilbage mellem skydelinjen og skiverne for at hente pilene.</dd>
            <dd>Under de Olympiske Lege i London i 2012 sammenlignede The Economist kalorieforbruget ved at vinde olympisk guld med 10 minutters andre aktiviteter som dans, snorkling, fejning og støvsugning. På vej til toppen af ​​det olympiske podie forbrænder en mandlig bueskytte anslået 1.084 kalorier – kun 747 kalorier mindre end kvinder i maraton, men mere end 1.054 end mændene på 100 meter sprint. (Ja, tidsrammerne er forskellige – men pointen er gyldig!)</dd>
            <dd>Ved turneringer går bueskytter omkring otte kilometer hver dag og kan forbrænde mellem 100 og 150 aktive kalorier hvert 30. minut.</dd>

            <dt>Styrke</dt>
            <dd>Bueskydning kræver korte energiudbrud fra kernemusklerne, idet at spænde en bue skaber spændinger i bryst, hænder, arm og store øvre rygmuskler samt ikke-kerneområder af din anatomi, fx rotatormanchettene, der støtter dine skuldre. Den korrekte og kontinuerlige gentagelse af denne bevægelse styrker disse væv.</dd>

            <dt>Kontrol</dt>
            <dd>Bueskytter lærer at bevare fokus på deres skudrutine og undgå distraktioner som vind, afstand, støj og deres konkurrenter for at affyre den perfekte pil. Den kontrol er også gavnlig for andre områder af livet.</dd>

            <dt>Koordination</dt>
            <dd>De trin, der kræves for at skabe et godt skud, kombineres for at danne en præcisionsrutine, der skal indarbejdes i en bueskyttes muskelhukommelse og underbevidsthed. Der sker så meget på samme tid – og med så lille margen for fejl – at koordineringen af ​​alle disse bevægelser bliver næsten instinktiv.</dd>

            <dt>Tålmodighed</dt>
            <dd>Bueskydning er let at lære, men svært at perfektionere. Selvom det er sjovt, kan det være frustrerende – og tålmodighed i praksis er afgørende for en langsigtet fremtid i sporten. At have beslutsomheden til præcist at gentage en teknik gør dig til en bedre bueskytte og dermed til et bedre menneske!</dd>

            <dt>Rolighed</dt>
            <dd>At forblive rolig og præcis under pres er en evne, som bueskytter udvikler ved at styre deres vejrtrækning, koncentration og nervøsitet. Når du skyder godt, kan timerne gå på et øjeblik – og selvom sporten kan være social, handler bueskydning, når du er på banen, kun om dig og din bue. Det perfekte tidspunkt til lidt indre meditation.</dd>

            <dt>Selvtillid</dt>
            <dd>Selv i konkurrencer er en bueskyttes største modstander sig selv. Det er nemt at identificere, hvad man skal forbedre, og at sætte klare mål – resultater er trods alt baseret på let målbare scorer. Fremskridt avler selvtillid.</dd>

            <dt>Social</dt>
            <dd>Der er meget få sportsgrene i verden, der giver verdens bedste mulighed for at konkurrere om målet med en forholdsvis ny person. Turneringer i bueskydning er ofte uden barrierer – og muliggør venskaber mellem personer fra alle samfundslag. Man ved aldrig, hvem man ender med at skyde imod næste gang.</dd>
        </dl>
    </section>
    <section>
        <h2>Alt der er værd at vide om bueskydning</h2>
        <div class="expandable">
            <div class="expandableHeader">
                <h3>HVOR KAN JEG PRØVE BUESKYDNING?</h3>
                <span class="toggleIcon">+</span>
            </div>                
            <div class="expandableContent">
                <p>Kunne du godt tænke dig at prøve bueskydning? Så har du flere muligheder!</p>
                <ul>
                    <li>Du er altid velkommen til at tage fat i den lokale bueforening. Du kan finde din lokale forening her.</li>
                    <li>Den første søndag i september afholder Bueskydning Danmark i samarbejde med interesserede foreninger ´Buernes Dag´. Buernes dag er et gratis åbent hus arrangement, hvor Bueskydning Danmark og din lokale bueklub inviterer alle interesserede til at komme og prøve kræfter med bueskydning.  Læs mere om ´Buernes Dag´ her.</li>
                    <li>Bueskydning Danmark er også en del af DIF Skole OL, hvor 5. og 6. klasse kan dyste i skiveskydning. Læs mere om bueskydning i DIF Skole OL her. </li>
                    <li>Bueskydning Danmark er også en del af DIF Soldaterprojekt. Det er et ønske om at bidrage til processen for at danske veteraner kan indgå i den almindelige foreningsidræt. Den proces kræver særlige hensyn, og projektet handler om at etablere platforme, hvor veteranerne i trygge rammer kan motiveres til at komme i gang med idræt. Du kan finde læse mere samt finde de foreninger, som er en del af DIF Soladterprojekt her.</li>
                </ul>
            </div>
         </div>
         <div class="expandable">
             <div class="expandableHeader">
                 <h3>ER BUESKYDNING SVÆRT SOM NYBEGYNDER?</h3>
                 <span class="toggleIcon">+</span>
             </div>             
             <div class="expandableContent">
                 <p>Det er let at lære de indledende trin i bueskydning, som at få fat i en bue og pil og forstå den grundlæggende mekanik, er ligetil. Det er svært at mestre at opnå ensartet præcision og udvikle en solid teknik tager tid og gentagelse.</p>
                <p>Bueskydning kræver tålmodighed og en vilje til at øve sig regelmæssigt. Forvent ikke at blive ekspert med det samme. Tålmodighed er nøglen!</p>
                <p>Bueskydningsforeninger under Bueskydning Danmark står klar til at lære, rådgive og vejlede dig til en god start i bueskydning!</p>
            </div>
        </div>
        <div class="expandable">
            <div class="expandableHeader">
                <h3>ER DER EN ALDERSGRÆNSE FOR BUESKYDNING?</h3>
                <span class="toggleIcon">+</span>
            </div>
            <div class="expandableContent">
                <p>Bueskydning er for alle alder! Dog har de fleste bueforeninger en minimumsalder omkring de 10 år. Minimumsalderen er grundet sikkerhed og even til at trække buen. Det er op til foreningerne selv i forhold til at have en minimumsalder samt hvad den er. Derfor bør du høre din lokale forening, om de har en minimumsalder for at gå til bueskydning.</p>
            </div>
        </div>
        <div class="expandable">
            <div class="expandableHeader">
                <h3>ER DER FORSKELLIGE DISCIPLINER I BUESKYDNING?</h3>
                <span class="toggleIcon">+</span>
            </div>
        </div>

        <section>
            <video src="@/assets/Bueskydning-Danmark-Profilfilm.mp4"></video>
            <h2>Hvad er bueskydning?</h2>
            <p>Bueskydning er en sport og fritidsbeskæftigelse for alle. Drenge og piger i alle aldre kan være med og få sig en hyggelig stund på skydebanen eller i skoven.</p>
            <p>Bueskydning er en individuel sport og man kan frit bestemme selv, hvor meget man vil gøre ud af bueskydningen. Mange har stor fornøjelse af at bruge bueskydningen som rekreation og afslapning – og til at koble fra med. Andre sætter sig mål som de forsøger at opnå, hvorefter de sætter nye mål og atter andre har evnerne til at blive blandt verdens bedste bueskytter.</p>
            <p>Bueskydning kræver mest af alt koncentration og at man bliver i stand til at gøre de samme bevægelser skud for skud. Det er forholdsvist svært at opnå høj præcision og mange bliver bidt af jagten på at kunne skyde sine pile ens hver gang. Bueskydning skærper ens evne til at fordybe sig, skærper ens tålmodighed og skærper ens evner til at være rolig i stressede situationer. Alt sammen og mere til, er det egenskaber, der er gode at have med sig ud i dagligdagen.</p>
            <p>I mange tilfælde kan man få adgang til sin klubs skydebaner på alle tidspunkter, hvorfor man har mulighed for at træne på de tidspunkter der passer én bedst, udover de fastsatte træningstidspunkter. Det sociale samvær over en kop kaffe eller sodavand er ofte højt værdsat blandt bueskytterne i alle aldre, hvilket gør træningssamlingerne til hyggelige stunder som man ser frem til.</p>
        </section>

   
        <section>
            <h2>Hvorfor vælge bueskydning?</h2>
            <p>Der er mange gode grunde til at vælge at gå til bueskydning. Bueskydning kræver nemlig præcision, kontrol, fokus, fysisk og beslutsomhed. Uanset om du er topatlet eller bare dyrker bueskydning i din fritid, om du praktisere bueskydning indendørs eller udendørs, konkurrencemæssigt eller socialt – og på trods af at det ofte opfattes som stationært – gør bueskydning dig aktiv, forbrænder kalorier og i bedre humør. Bueskydning har flere fordele for dit helbred. Her kommer der 8 gode grunde til at vælge bueskydning:</p>
            <dl>
                <dt>Motion</dt>
                <dd>Bueskydning er en sport, der kan dyrkes af alle, uanset alder, køn eller evner. Du bruger din fysisk, når du skal spænde buen samt bruger du også energi på at gå frem og tilbage mellem skydelinjen og skiverne for at hente pilene.</dd>
                <dd>Under de Olympiske Lege i London i 2012 sammenlignede The Economist kalorieforbruget ved at vinde olympisk guld med 10 minutters andre aktiviteter som dans, snorkling, fejning og støvsugning. På vej til toppen af ​​det olympiske podie forbrænder en mandlig bueskytte anslået 1.084 kalorier – kun 747 kalorier mindre end kvinder i maraton, men mere end 1.054 end mændene på 100 meter sprint. (Ja, tidsrammerne er forskellige – men pointen er gyldig!)</dd>
                <dd>Ved turneringer går bueskytter omkring otte kilometer hver dag og kan forbrænde mellem 100 og 150 aktive kalorier hvert 30. minut.</dd>

                <dt>Styrke</dt>
                <dd>Bueskydning kræver korte energiudbrud fra kernemusklerne, idet at spænde en bue skaber spændinger i bryst, hænder, arm og store øvre rygmuskler samt ikke-kerneområder af din anatomi, fx rotatormanchettene, der støtter dine skuldre. Den korrekte og kontinuerlige gentagelse af denne bevægelse styrker disse væv.</dd>

                <dt>Kontrol</dt>
                <dd>Bueskytter lærer at bevare fokus på deres skudrutine og undgå distraktioner som vind, afstand, støj og deres konkurrenter for at affyre den perfekte pil. Den kontrol er også gavnlig for andre områder af livet.</dd>

                <dt>Koordination</dt>
                <dd>De trin, der kræves for at skabe et godt skud, kombineres for at danne en præcisionsrutine, der skal indarbejdes i en bueskyttes muskelhukommelse og underbevidsthed. Der sker så meget på samme tid – og med så lille margen for fejl – at koordineringen af ​​alle disse bevægelser bliver næsten instinktiv.</dd>

                <dt>Tålmodighed</dt>
                <dd>Bueskydning er let at lære, men svært at perfektionere. Selvom det er sjovt, kan det være frustrerende – og tålmodighed i praksis er afgørende for en langsigtet fremtid i sporten. At have beslutsomheden til præcist at gentage en teknik gør dig til en bedre bueskytte og dermed til et bedre menneske!</dd>

                <dt>Rolighed</dt>
                <dd>At forblive rolig og præcis under pres er en evne, som bueskytter udvikler ved at styre deres vejrtrækning, koncentration og nervøsitet. Når du skyder godt, kan timerne gå på et øjeblik – og selvom sporten kan være social, handler bueskydning, når du er på banen, kun om dig og din bue. Det perfekte tidspunkt til lidt indre meditation.</dd>

                <dt>Selvtillid</dt>
                <dd>Selv i konkurrencer er en bueskyttes største modstander sig selv. Det er nemt at identificere, hvad man skal forbedre, og at sætte klare mål – resultater er trods alt baseret på let målbare scorer. Fremskridt avler selvtillid.</dd>

                <dt>Social</dt>
                <dd>Der er meget få sportsgrene i verden, der giver verdens bedste mulighed for at konkurrere om målet med en forholdsvis ny person. Turneringer i bueskydning er ofte uden barrierer – og muliggør venskaber mellem personer fra alle samfundslag. Man ved aldrig, hvem man ender med at skyde imod næste gang.</dd>
            </dl>
        </section>
        
        <section>
            <h2>Alt der er værd at vide om bueskydning</h2>
           <div v-for="(accordion, index) in accordions" :key="index" class="expandable">
        <div class="expandableHeader" @click="toggleAccordion(index)">
          <h3>{{ accordion.title }}</h3>
          <span class="toggleIcon">{{ accordion.open ? '–' : '+' }}</span>
        </div>

        <div v-show="accordion.open" class="expandableContent">
          <template v-if="index === 0">
            <p>Kunne du godt tænke dig at prøve bueskydning? Så har du flere muligheder!</p>
            <ul>
              <li>Du er altid velkommen til at tage fat i den lokale bueforening. Du kan finde din lokale forening her.</li>
              <li>Den første søndag i september afholder Bueskydning Danmark i samarbejde med interesserede foreninger ´Buernes Dag´. Buernes dag er et gratis åbent hus arrangement, hvor Bueskydning Danmark og din lokale bueklub inviterer alle interesserede til at komme og prøve kræfter med bueskydning.  Læs mere om ´Buernes Dag´ her.</li>
              <li>Bueskydning Danmark er også en del af DIF Skole OL, hvor 5. og 6. klasse kan dyste i skiveskydning. Læs mere om bueskydning i DIF Skole OL her. </li>
              <li>Bueskydning Danmark er også en del af DIF Soldaterprojekt. Det er et ønske om at bidrage til processen for at danske veteraner kan indgå i den almindelige foreningsidræt. Den proces kræver særlige hensyn, og projektet handler om at etablere platforme, hvor veteranerne i trygge rammer kan motiveres til at komme i gang med idræt. Du kan finde læse mere samt finde de foreninger, som er en del af DIF Soladterprojekt her.</li>
            </ul>
          </template>

          <template v-else-if="index === 1">
            <p>Det er let at lære de indledende trin i bueskydning, som at få fat i en bue og pil og forstå den grundlæggende mekanik, er ligetil. Det er svært at mestre at opnå ensartet præcision og udvikle en solid teknik tager tid og gentagelse.</p>
            <p>Bueskydning kræver tålmodighed og en vilje til at øve sig regelmæssigt. Forvent ikke at blive ekspert med det samme. Tålmodighed er nøglen!</p>
            <p>Bueskydningsforeninger under Bueskydning Danmark står klar til at lære, rådgive og vejlede dig til en god start i bueskydning!</p>
          </template>

          <template v-else-if="index === 2">
            <p>Bueskydning er for alle alder! Dog har de fleste bueforeninger en minimumsalder omkring de 10 år. Minimumsalderen er grundet sikkerhed og evnen til at trække buen. Det er op til foreningerne selv i forhold til at have en minimumsalder samt hvad den er. Derfor bør du høre din lokale forening, om de har en minimumsalder for at gå til bueskydning.</p>
          </template>

          <template v-else-if="index === 3">
            <p>I princippet er der 3 hoved discipliner i bueskydning: Skiveskydning, feltskydning og 3D.</p>
            <h4>Skiveskydning</h4>
            <p>Skiveskydning foregår ved at man skyder mod ”ansigter” – papirskiver, der er inddelt i 10 cirkelrunde pointzoner i 5 forskellige farver og som monteres på skydeskiver. Størrelsen af disse ansigter varierer med afstandene, der skydes på. Indendørs skydes der på 18 m afstand for voksne og da anvendes et ansigt, der er 40 cm i diameter. Udendørs skydes der på afstande mellem 30 m og op til 90 m, for voksne. På de længste afstande er ansigtet 122 cm i diameter.</p>
            <h4>Feltskydning</h4>
            <p>Feltskydning foregår ude i terrænnet – ofte i skovområder. Her skydes også på ”ansigter”, der er påsat skydeskiver. Disse ansigter er anderledes i farve og point inddeling end de tilsvarende skiveskydnings ansigter. Der kan skydes både på ukendte og kendte afstande.</p>
            <h4>3D</h4>
            <p>3D foregår ligesom med feltskydning ude i terrænnet, men her skyder man på 3-dimensionelle modeller af forskellige dyr. Det simulerer i nogen grad forholdene som man an komme ud for under buejagt – men er en ret udbredt skydeform, der dyrkes af alle slags bueskytter, piger og drenge i alle aldre. Det er ganske sjovt og hyggeligt at gå rundt i terrænnet med sin patrulje og skyde til de forskellige dyrefigurer – på ukendte afstande.</p>
          </template>

          <template v-else-if="index === 4">
            <p>De fire primære buetyper er; Recurvebue, Barbue, Compoundbue og Langbue.</p>
            <h4>Recurvebue</h4>
            <p>Recurvebuen er den olympiske buetype. Recurvebuen kaldes sådan på grund af udformningen af buebenenes ender, som er bøjet fremad i skudretningen. Dette har dels til formål at give buen et bedre kast (højere pilehastighed) og dels at buen føles en smule blødere at trække ved fuldt træk. Der opnåes dog ikke decideret ”let-off” (mindre trækvægt ved fuldt træk), som det er tilfældet med compoundbuen.</p>
            <p>Recurvebuen laves både i lamineret træ og glasfiber, mens midtersektionen er lavet af f.eks. aluminium, magnesium eller fiberkomposit amt er buebenene lamineret af forskellige kombinationer af træ, glasfiber, keramik, syntetisk foam, kulfiber osv.</p>
            <p>Recurvebuen er udstyret med sigte, stabilisator(er), pilehylde og plunger (en enhed, der fjedrer mod siden af pilen). Disse enkelte dele kan fås i alle varianter af simple og avancerede udgaver. Stabilisatoren(e) tjener primært to formål: For det første at hjælpe til, at holde buen stabilt og roligt mens man sigter. For det andet opsuger stabilisatoren en del af buens rystelser og rekyl – hvorved den arm og hånd der holder buen, ikke påvirkes så meget af disse rystelser og dermed er mere rolig i skudøjeblikket.</p>
            <p>Pilehastighederne med recurvebue ligger normalt på mellem 40-70 m/s afhængig af trækvægt, pilevægt osv.</p>
            <h4>Barbue</h4>
            <p>En barbue ligner en recurvebue. Dog er det ikke tilladt at skyde med en barbue med sigte og stabilisatorer, mens pilehylde og plunger er tilladt. Man ”sigter” således på samme måde som med langbue, enten med pilespidsen eller instinktivt. I nogle tilfælde foretrækker nogen at skyde ”off the shelf” – dvs. uden pilehylde, hvor pilen blot ligger i bunden af udskæringen til sigtevindue.</p>
            <h4>Compoundbue</h4>
            <p>Compoundbuen er den teknisk set mest avancerede buetype. Buetypen er karakteriseret ved at være en ret kort bue og ved at være forsynet med streng, kabler og hjul (cams) som kablerne kører omkring. Formålet med systemet er, at buen bliver lettere at holde ved fuldt træk, idét man da kun holder 50-20% af buens maximale trækvægt. Desuden bevirker systemet at buen skyder pilene med relativt høje hastigheder. Det at buen bliver lettere at holde ved fuldt træk øger den tekniske præcision og der opnås højere pilehastigheder end med recurvebue.</p>
            <p>Compoundbuen anvendes næsten udelukkende til bueskydning uden for OL, men til gengæld til mange andre discipliner, bl.a. buejagt.</p>
            <p>Compoundbuen har sigte, stabilisator(er), pilehylde og plunger.</p>
            <h4>Langbue</h4>
            <p>Langbuen er en ganske enkel bue, der kan være lavet i ét helt stykke eller i lamineret træ. Langbuen er altid lang (op til ca. 2 meter), og uden udskæringer og modifikationer. Den har normalt ikke pilehylde, men derimod sigtes med pilespidsen eller skydes instinktivt. Langbuen bruges næsten udelukkende til instinktiv skydning (uden sigte). Langbuen har den egenskab, at den er en ganske stille bue, idet dens lange bueben ikke giver så meget rystelse og rekyl.</p>
            <p>Langbuen anvendes primært til buejagt og til historisk bueskydning, men der findes også langbueklasser i almindelig konkurrencemæssig bueskydning.</p>
          </template>

          <template v-else-if="index === 5">
            <p>For at komme i gang med bueskydning anbefales det at finde en lokal bueklub eller forening under Bueskydning Danmark. Her vil du kunne få instruktion og adgang til udstyr.</p>
            <p>Hvis du vil købe udstyr selv, så start med at spørge en erfaren bueskytte eller instruktør til råds, så du vælger det rette udstyr for dit niveau og behov.</p>
            <p>Et begynderudstyr består typisk af en bue, pile, armguard og fingerbeskytter. Det er vigtigt at få korrekt størrelse og trækvægt, så du kan øve dig komfortabelt.</p>
          </template>
        </div>
      </div>
    </section>
    </section>
  </main>
</template>

<style scoped>
.intro{
    background-color: var(--Main-color);
}
.intro img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}
.intro p, h1{
    color: white;
}
section:not(.intro){
    padding: var(--space-xs);
}
.intro *:not(img){
    padding: var(--space-xs);
}
main{
    padding: 0;
}
.buttonContainer{
    text-align: center;
}
video{
    width: 100%;
}
.expandable{
    background-color: var(--BtnColor);
}
.expandable *{
    color: white;
    margin: var(--space-xs);
    padding: var(--space-xs);
}
h4, dt{
    font-weight: bold;
    font-size: 1rem;
}
p, li, dd, dt, h3, h4, h2{
    margin: var(--space-xs);
}
.toggleIcon{
    font-size: 30px;
}
.expandableHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>