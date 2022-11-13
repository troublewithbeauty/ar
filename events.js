let markerIds = [
    "Trouble_with_Beauty",
    "Generative_Bathing",
    "Nail_Adorning",
    "Karma_Trimming",
    "Soul_Bleaching",
    "Paradise_Practicing"
];
let markers = [];

function toggleHeader(inputState) {
    let header = document.getElementById("header");
    header.classList.toggle("hidden");

    console.log("pulling down header");
}

function toggleMenu() {
    let header = document.getElementById("header");
    if (header.classList.contains("hidden")) {
        console.log("enabling header");
    }
}

function toggleDescriptions() {
    let descriptionContainer = document.getElementById("ar_DetailText");
    descriptionContainer.classList.toggle("hiddenDescription");
    document.querySelector("#infotoggle").classList.toggle("rotatedIcon");
}

function addTargetFoundListener() {
    for (i=0;i<markerIds.length;i++) {

        let currentQuerySelector = "#" + markerIds[i];

        //console.log(currentQuerySelector);

        //markers.push(document.querySelector(currentQuerySelector));
        //console.log(markers);

        document.querySelector(currentQuerySelector).addEventListener("targetFound", event => {
            console.log("target "+currentQuerySelector+" found");
            targetFoundHandler(currentQuerySelector);
          });
    }
}

function targetFoundHandler(target) {
    console.log("target found handler activating");
    let targetName = target.replace(/_/g," ");
    document.querySelector("#markerName > h3").innerHTML = targetName.replace(/#/g,"");

    let detailTextContent;

    switch (target) {
        case "#Trouble_with_Beauty":
            detailTextContent = ""
            break;

        case "#Generative_Bathing": // Value of foo matches this criteria; execution starts from here
            detailTextContent = "Die Interpretation konträrer  menschlicher Aussagen über Schönheit durch eine künstliche Intelligenz lädt dazu ein, in den visuellen Ergebnissen zu baden und sich jenseits von Definitionszwängen treiben zu lassen.";
            break;

        case "#Nail_Adorning": // no break statement in 'case 0:' so this case will run as well
            detailTextContent = "DIY: Nagelverzierung mit den Trouble with Beauty Nagelstickern!";
            break; // Break encountered; will not continue into 'case 2:'

        case "#Karma_Trimming":
            detailTextContent = "Designströmungen und die Suche nach alternativen Schönheitsverständnissen lösen warenästhetische Verspannungen. Können Brunnen schön und zugleich funktional sein? Können Sie als »Wasserkiosk« Aufenthaltsorte bzw. Stadtmobiliar der Gemeinschaft werden? Können sie Menschen durch eine neu gewonnene Schönheit verführen und von der Nutzung der Plastikflasche ablenken?";
            break;

        case "#Soul_Bleaching":
            detailTextContent = "Die Welt ist voller Produkte, die nur einen einzigen Lebenszyklus haben und danach für immer nutzlos werden. Dieser Leuchter aus verglühten Lampen verleiht ihnen jedoch eine neue, echte Schönheit: Ein selbst umsetzbarer Entwurf und Denkanstoß, um aus nutzlos gewordenen Gegenständen ein neues Design zu kreieren." ;
            break;

        case "#Paradise_Practicing":
            detailTextContent = "Entspannung für alle Muskeln: Begib' dich auf eine Vitamin–D getränkte Reise und flüchte deinen Geist in eine von Tropizismus geprägte Welt. AUDIO-WIDGET HIER";
            break;
            

        default:
          console.log('default');
      }

    document.querySelector("#ar_DetailText").innerHTML = detailTextContent;
}


// things to do: 
// action when a marker is found!
// see https://ar-js-org.github.io/AR.js-Docs/ui-events/, @ "Trigger action when marker has been found"
