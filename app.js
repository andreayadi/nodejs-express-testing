const express = require('express');

const app = express();

const userRouter = require('./routes/userRoutes');

// app.use(express.static(`${__dirname}/public`)); //Serving static files

// app.use((req, res, next) => {
//   console.log('Hello from the middleware 👋');
//   next();
// }); //Middleware

app.use(express.json());

app.use('/api/v1/user', userRouter);

module.exports = app;
