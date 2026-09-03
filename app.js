console.log("Proyecto web funcionando");

function mostrarOcultarMenu() {
    const menu = document.getElementById("menu");

    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

document.addEventListener("click", mostrarOcultarMenu);
