//Models
const Comentarios = require('../models/Comentario.model.js');
const Nav = require('../models/breadcrumbs.model.js');


exports.getForms = (request,response) =>{
    console.log(`Helo from middleware for /forms -> Client requests: ${request.url}`)
    //Leemos nuestro HTML
    //Model dame los breadcrombs de forms
    const breadcrumbs = Nav.getBreadcrumbs('forms');
    //Model dame la lista de comentarios para poder cargarla
    const listaComentarios = Comentarios.fetchAll()
    //Views -> ¡Necesito breadcrumbs de model!
    response.render('forms',{breadcrumbs,listaComentarios});
}

exports.getShop = (request,response) =>{
    console.log(`Helo from middleware for / -> Client requests: ${request.url}`)
    //Leemos nuestro HTML
    const breadcrumbs = Nav.getBreadcrumbs('shop');
    //Views -> ¡Necesito breadcrumbs de model!
    response.render('index',{breadcrumbs});
}


exports.postForms = (request,response) =>{
    // 1. Ya no hay on('data'). Express llenó request.body por ti.
    // 2. Delegamos la creación al modelo
    const nuevoComentario = new Comentarios(
        request.body.nombre_usuario, 
        request.body.review
    );
    
    nuevoComentario.save();
    
    response.redirect('/shop/forms');
};