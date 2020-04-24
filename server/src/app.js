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
app.get('/status', (req, res)=> {
	res.send({
		message: 'Hello world!'
	});
});

app.get('/', (req, res)=> {
	res.send({
		message: 'Welcome to the home page!'
	});
});

app.listen(process.env.PORT || 8081);