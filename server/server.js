const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const profile = require('./profile');
const app = express();
const PORT = process.env.PORT || 3000;

// app.use('/profile', profile);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('../public/index.html');
});
app.set('views', './views');

app.set('view engine', 'ejs');


app.get('/contact', (req, res) => res.render('contact'));
app.post('/thanks', (req, res) => res.render('thanks', { contact: req.body }));


app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
