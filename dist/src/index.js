import express from 'express';
import movieRouter from './routers/movieRouter.js';
import directorRouter from './routers/directorRouter.js';
import studioRouter from './routers/studioRouter.js';
var app = express();
app.use(express.json());
app.use(movieRouter);
app.use(directorRouter);
app.use(studioRouter);
var PORT = 5001;
app.listen(PORT, function () {
    console.log("Running in ".concat(PORT));
});
