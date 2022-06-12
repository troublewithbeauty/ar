function toggleHeader(inputState) {
    let header = document.getElementById("header");
    header.classList.toggle("hidden");

    console.log("toggling header");
}

function toggleMenu() {
    let header = document.getElementById("header");
    if (header.classList.contains("hidden")) {
        console.log("enabling header");
    }
}