const express = require('express');
const path = require('path');
const pg = require('pg');
const routes = require('./routes/index');
const bodyParse = require('body-parser');
const app = express();


//Db settings


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 

//Middlewares
app.use((req,res,next)=>{
    console.log(`${req.url} - ${req.method}`);
    next();
});

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

//Routes
app.use(routes);

//Static files
app.use(express.static( path.join(__dirname,'public')));

//Start server
app.listen(app.get('port'),()=> {
    console.log('Server on port',app.get('port'))
});
