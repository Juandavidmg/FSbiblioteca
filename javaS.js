function ejVar() {
    let persona = {
        nombre: "Laura",
        edad: 25,
        profesion: "Ingeniero",
        saludar: function () {
            return("Buenas noches");
        }
    };

    console.log( "Persona: "+ persona.nombre);
    console.log("Edad: "+ persona["edad"]);
    console.log("Saludo: "+ persona.saludar());

}
