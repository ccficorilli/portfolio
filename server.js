const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const profile = require('./profile');
const app = express();

app.use('/profile', profile);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Chris',
            lastName: 'Ficorilli'
        }
    }
    res.render('index', data);
});
app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});