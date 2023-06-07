
const express = require('express')
const routerApi = require('./routes')

const {logErrors, errorHandler, boomErrorhadler } = require('./middlewares/error.handler')


const app =  express();
const port = 3000;

app.use(express.json())

app.listen(port, () => {
  console.log('mi port ' +  port);
});

app.get('/', (req, res ) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res ) => {
  res.send('Hola soy una nueva ruta');
});


routerApi(app); //los middlewares van despues del routing




app.use(logErrors); // el orden de los middlewares se respeta
app.use(boomErrorhadler);
app.use(errorHandler);