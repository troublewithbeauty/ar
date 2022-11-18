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

    if (inputState == "off") {
        header.classList.add("hidden");
    }
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


function addTargetListeners() {
    for (i=0;i<markerIds.length;i++) {

        let currentQuerySelector = "#" + markerIds[i];

        document.querySelector(currentQuerySelector).addEventListener("targetFound", event => {
            console.log("target "+currentQuerySelector+" found");
            targetFoundHandler(currentQuerySelector);
          });

        document.querySelector(currentQuerySelector).addEventListener("targetLost", event => {
            console.log("target "+currentQuerySelector+" lost");
            targetLostHandler(currentQuerySelector);
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
            detailTextContent = "Die Interpretation konträrer menschlicher Aussagen über Schönheit durch eine künstliche Intelligenz lädt dazu ein, in den visuellen Ergebnissen zu baden und sich jenseits von Definitionszwängen treiben zu lassen.";
            break;

        case "#Nail_Adorning": // no break statement in 'case 0:' so this case will run as well
            detailTextContent = "DIY: Verziere deine Nägel mit den Trouble with Beauty Nagelstickern! <br> <a href='assets/docs/Nail_Adorning_Anleitung.pdf'><b>PDF-Download</b></a> (6 MB)";
            let popupInnerHTMLText = "<a href='assets/docs/Nail_Adorning_Anleitung.pdf'> Nail it! <br> <b>PDF-Anleitung für dein individuelles Nail Adorning</b> (6&nbsp;MB)</a>";
            togglePopup("on", popupInnerHTMLText);
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
          console.log('no valid targetFoundHandler() event');
      }

    document.querySelector("#ar_DetailText").innerHTML = detailTextContent;
}



function togglePopup(intendedState, content) {

    console.log(intendedState);
    console.log(content);

    switch (content) {
        case undefined:
            console.log("no popup content defined, not changing anything");
            break;
        
        default:
            console.log("popup content defined, changing the content");
            document.querySelector("#info_overlay #hint").innerHTML = content;
            break;
    }

    switch (intendedState) {
        case "on":
            document.querySelector("#info_overlay").classList.add("nothidden-hack");
            break;

        case "off":
            document.querySelector("#info_overlay").classList.remove("nothidden-hack");
            break;

        default:
            console.log("no intended popup state defined, just toggling!");
            document.querySelector("#info_overlay").classList.toggle("hidden");
    }
}



function targetLostHandler(target) {

    // activates when the target gets lost from AR recognition -- in most cases, attach it to the screen instead of the AR marker

    console.log("target lost handler activating");
    let targetName = target.replace(/_/g," ");
    document.querySelector("#markerName > h3").innerHTML = targetName.replace(/#/g,"");

    let detailTextContent;

    switch (target) {
        case "#Trouble_with_Beauty":
            detailTextContent = ""
            break;

        case "#Generative_Bathing": // Value of foo matches this criteria; execution starts from here
            detailTextContent = "Die Interpretation konträrer menschlicher Aussagen über Schönheit durch eine künstliche Intelligenz lädt dazu ein, in den visuellen Ergebnissen zu baden und sich jenseits von Definitionszwängen treiben zu lassen.";
            break;

        case "#Nail_Adorning": // no break statement in 'case 0:' so this case will run as well
            detailTextContent = "DIY: Verziere deine Nägel mit den Trouble with Beauty Nagelstickern! <br> <a href='assets/docs/Nail_Adorning_Anleitung.pdf'><b>PDF-Download</b></a> (6 MB)";
            let popupInnerHTMLText = "Kein Marker sichtbar – Scanne einen der QR-Codes im Magazin!";
            togglePopup("off", popupInnerHTMLText);
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
          console.log('no valid targetFoundHandler() event');
      }

    document.querySelector("#ar_DetailText").innerHTML = detailTextContent;
}



function toggleNotes(intendedState, target) {

    if (intendedState == "on" && target == "imprint") {
        document.querySelector("#impressum").classList.add("notesVisible");
        toggleHeader("off");
    } else {
        document.querySelector("#impressum").classList.remove("notesVisible");
        toggleHeader("off");
    }

}
// things to do: 
// action when a marker is found!
// see https://ar-js-org.github.io/AR.js-Docs/ui-events/, @ "Trigger action when marker has been found"
