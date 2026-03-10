//Modulo comentarios 

//Comunicación con BD
const db = require('../util/database.js');

//Modulo de Comentario
//Estructura de datos temporal

//Clase comentario nuevo
module.exports = class Comentario {
    constructor(nombre, review) {
        // Aquí ocurre la "Limpieza y Traducción"
        this.name = nombre || "Anónimo";
        this.texto = review ? review.trim() : "";
        this.fecha = new Date();
    }

    async save() {
        //Lo debemos de subir a la BD

        try{
            console.log("Creating new Comment in BD")
            const result = await db.execute(
                'INSERT INTO `Comentarios` (`username`, `comment`, `fecha`) VALUES (?,?,?)',
                [this.name,this.texto,this.fecha])
            return result
                }
        catch(err){
            console.error("Error al guardar en BD:", err);
            throw err; // Re-lanzamos el error para manejarlo en el controlador
        }

    }

     

    static async fetchAll() {
        console.log("Fetching all comments")

        try{
            const comments = await db.execute('SELECT * FROM Comentarios');
            return comments;
        }
        catch(err){
            console.log("Error detectado al traer comentarios de BD");
            throw err;
        }
        
    }

//End of objet Comentario
}




