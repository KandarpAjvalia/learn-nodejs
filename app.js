const express = require('express');

const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const path = require('path');
const rootDir = require('./util/path')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', errorController.get404Page);

app.listen(3000);