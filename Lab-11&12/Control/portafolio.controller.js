//Modulos nativos
const path = require('path')

//Models
const Comentarios = require('../models/Comentario.model.js');
const Nav = require('../models/breadcrumbs.model.js');

exports.getPort = (request,response) =>{
    console.log(`Client requests: ${request.url}`)
    const breadcrumbs = Nav.getBreadcrumbs('port')
    response.render('portafolio',{breadcrumbs});

}





