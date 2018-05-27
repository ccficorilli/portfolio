const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const profile = require('./profile');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const fs = require ('fs');
const key = '9092363-a9707005820a8ad4bec1d245a';
const imageStore = './server/images.json';
var jsonData;


// app.use('/profile', profile);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(express.static('public'));


  //   res => res.data.hits)
  // .then(data => fs.writeFile( images, data, (err => {
  //     if (err) throw err;
  //     else console.log('Images Stored!')
  //     })
  //   ));
  async function getImages() {
    try {
      jsonData = await axios.get(`https://pixabay.com/api/?key=${key}&q=mountains&orientation=horizontal&category=nature&image_type=photo&editors_choice=true`)
        .then(res => res.data)
      console.log('data loaded successfully');
      fs.writeFile( imageStore, JSON.stringify(jsonData), (err => { 
    if (err) throw err;
    else console.log('Json stored successfully!')
    })
  );
    } catch (error) {
      console.error(error);
    }
  }

getImages();  



app.get('/', (req, res) => { 
  
  

  //.then(data => console.log, err => console.log('something broke'))
    

  res.render('../public/index.html');
});
app.set('views', './views');

app.set('view engine', 'ejs');


app.get('/contact', (req, res) => res.render('contact'));
app.post('/thanks', (req, res) => res.render('thanks', { contact: req.body }));


app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
