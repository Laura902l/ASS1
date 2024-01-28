//server.js
const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const travelRoutes = require('./routes/travelRoutes');
const staticRoutes = require('./routes/static');


app.use('/travel', travelRoutes);
app.use('/', staticRoutes);

app.use(bodyParser.json());



// Запускаем сервер
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
