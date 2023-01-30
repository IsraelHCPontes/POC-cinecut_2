import express from 'express';
import movieRouter from './routers/movieRouter.js'
import directorRouter from './routers/directorRouter.js';
import  studioRouter from './routers/studioRouter.js';

const app = express();
app.use(express.json());

app.use(movieRouter)
app.use(directorRouter)
app.use(studioRouter)

const PORT = 5001
app.listen(PORT, () => {
    console.log(`Running in ${PORT}` )
})
