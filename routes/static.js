//routes/static.js

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('home', {}); 
});

router.get('/contacts', (req, res) => {
    res.render('contacts', {});
});

module.exports = router;
