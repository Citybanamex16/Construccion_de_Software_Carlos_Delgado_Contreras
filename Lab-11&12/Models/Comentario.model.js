//Modulo De Breadcrumbs

//Modulo de Comentario
//Estructura de datos temporal
const listaComentarios = [{ name: "Sistema", texto: "¡Sé el primero!" }];

//Clase comentario nuevo
module.exports = class Comentario {
    constructor(nombre, review) {
        // Aquí ocurre la "Limpieza y Traducción"
        this.name = nombre || "Anónimo";
        this.texto = review.trim();
        this.fecha = new Date();
    }

    save() {
        listaComentarios.push(this);
    }

    static fetchAll() {
        return listaComentarios;
    }
}