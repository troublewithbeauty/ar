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


// things to do: 
// action when a marker is found!
// see https://ar-js-org.github.io/AR.js-Docs/ui-events/, @ "Trigger action when marker has been found"
