const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index.js');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/rickandmorty', router);



app.listen(PORT, () => {
   console.log('Server raised in port ');
});
