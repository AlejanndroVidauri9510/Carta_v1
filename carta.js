function mostrarImagen() {
    var imagen = document.getElementById("imagenOculta");
    if (imagen.style.display === "none" || imagen.style.display === "") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}
