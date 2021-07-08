const jwt = require('jsonwebtoken');

require('dotenv').config();
exports.loggin = ((req, res)=>{
  
    res.send(
    ` <html><head>
    <title>login</title>
    </head>
    <body>
    <form method="POST" action="/auth">
    Nombre de usuario: <input type="text" name="text"><br>
    contraseña: <input type="password" name="password"><br> 
    <input type="submit" value="iniciar sesion"><br>
    </form>
    </body>
    </html> `
 )
})

exports.getcontroller = ((req, res)=>{

res.json({
nombres: [
{
    id:0,
    nombre: 'yesid',
    apellido: 'sanches'
    
},
{
    id:0,
    nombre: 'nohema',
    apellido: 'montero' 
},
{

    id:0,
    nombre: 'lazaro',
    apellido: 'aroca'
}


]
})
    
})

exports.auth = ((req, res)=>{

const {username, password} = req.body;

//consultar BD y validar que existen username y password 

const user = {username: username}

//aqui empezamos a usar jsonweb toeken

//lo primero es crear generar un access-token 
const accessToken = generateAccessToken(user);

res.header('authorization', accessToken).json({

    message: 'usuario autenticado',
    token: accessToken
})

function generateAccessToken(user){

// esta funcion nos permite hacer el sign o la firma, verificar donde poner

//Esta fucion debe ir ligada al usuario que hace uso del token
return jwt.sign(user, process.env.SECRET, {expiresIn: '1m'});

}

})