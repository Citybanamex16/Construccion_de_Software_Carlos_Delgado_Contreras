//Models
const Comentarios = require('../models/Comentario.model.js');
const Nav = require('../models/breadcrumbs.model.js');


exports.getForms = (request,response) =>{
    //Model dame los breadcrombs de forms
  

    const breadcrumbs = Nav.getBreadcrumbs('forms');
    //Model dame la lista de comentarios para poder cargarla
    Comentarios.fetchAll().then(
        ([rows,fieldData]) => {
            //console.log(rows)
             response.render('forms',{breadcrumbs,listaComentarios: rows});

        }).catch(err =>{

            console.log(err)
            response.render('500');

        })
    
    
}

exports.getShop = (request,response) =>{
    console.log(`Helo from middleware for / -> Client requests: ${request.url}`)
    //Leemos nuestro HTML
    const breadcrumbs = Nav.getBreadcrumbs('shop');
    //Views -> ¡Necesito breadcrumbs de model!
    response.render('index',{breadcrumbs});
}


exports.postForms = async (request,response) =>{
    // 1. Ya no hay on('data'). Express llenó request.body por ti.
    // 2. Delegamos la creación al modelo
    const nuevoComentario = new Comentarios(
        request.body.nombre_usuario, 
        request.body.review
    );

    try{

       await nuevoComentario.save();

    }
     catch (error) {
        console.log(error);
    }
    
    
    
    response.redirect('/shop/forms');
};