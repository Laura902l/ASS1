const express = require('express');
const router = express.Router();
const app = express();

app.set('view engine', 'ejs');

const tourHistory = [];

// Route to view tour history
router.get('/', (req, res) => {
    res.render('tourHistory', { tourHistory });
});

module.exports = router;
