//Models
const Comentarios = require('../models/Comentario.model.js');
const Nav = require('../models/breadcrumbs.model.js');

exports.getPort = (request,response) =>{
    console.log(`Client requests: ${request.url}`)
    const breadcrumbs = Nav.getBreadcrumbs('port')
    response.render('portafolio',{breadcrumbs});

}


exports.getLabs = (request,response) =>{
    console.log(`Client requests: ${request.url}`)
    const filePath = path.join(__dirname,'..','Public','Portafolio_HTMLs','Laboratorios.html');

    //Mandamos el archivo

    response.sendFile(filePath,(err) =>{
        if(err){
            response.status(500,'Error Interno');
        }
    })
}





