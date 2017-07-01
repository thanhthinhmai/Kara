const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');

const { db, } = require('./pgp');

// Cấu hình nunjucks
nunjucks.configure('views',{
    autoescape: true,
    cache: false,
    express: app,
    watch: true
})
 
app.use('/', express.static(path.join(__dirname,'public')));
app.engine('html', nunjucks.render);

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'html');

const routes = require('./routes');


app.listen(4000, ()=> { 
    console.log('Start port 4000');
})

app.get('/', routes.home);

app.get('/manage', routes.manage)

app.get('/room',routes.room);

app.get('/staff', routes.staff);