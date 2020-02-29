const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.get("/",(req, res) => {

//  res.send('ola');
//});

 app.use(function (req, res, next)
{
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization ');
    res.header('Acess-Control-Allow-Credentials', true);
    next(); 
});    


require('./app/controllers/index')(app);

app.listen(3000);
