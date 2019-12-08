const express = require('express');

const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const path = require('path');
const rootDir = require('./util/path')

const app = express();

app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);