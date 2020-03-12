const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const cors = require ('cors');
const app = express();


//Db settings


//Settings
app.set('port', process.env.PORT || 8081)
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html'); 

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

//Middlewares
/**app.use((req,res,next)=>{
    console.log(`${req.url} - ${req.method}`);
    next();
});
*/

app.post('/register', (req,res) =>{
    res.send({
        message:  `Hola ${req.body.email} ya se encuentra registrado `
    })
})

/** 
//Routes
app.use(routes);

//Static files
app.use(express.static( path.join(__dirname,'public')));


*/

//Start server
app.listen(app.get('port'),()=> {
    console.log('Server on port',app.get('port'))
})