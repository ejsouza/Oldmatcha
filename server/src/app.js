const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Bild a very basic express server
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Set ending point
// GET
app.get('/', (req, res)=> {
	res.send({
		message: 'Welcome to the home page!'
	});
});


// POST
app.post('/register', (req, res)=> {
	res.send({
		message: `Hello ${req.body.email}! You were registered successfully! Have fun`
	});
});
// The server application is running in port http://localhost:8081 
// Or it will be running in the env.PORT number if set
app.listen(process.env.PORT || 8081);