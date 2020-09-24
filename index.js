//Import lines
const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost/base_back', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

//Init app
let app = express();

//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

//Import routes
let apiRoutes = require('./api-routes');

//Setup server port
var port = process.env.PORT || 4000;

//Send message ofr default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);

//Launch app to listen the specified port
app.listen(port, function () {
    console.log('Running on port ' + port);
});

