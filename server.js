const express = require('express');
const app = express();
//looks for environment var for port first
const port = process.env.PORT || 8080;
//serves static files
app.use(express.static(__dirname + '/public'));
//index page served
app.get('/', (req,res) => res.render('index'));
//app starts and listens on port
app.listen(port, () => console.log(`Listening on PORT: ${port}`));
