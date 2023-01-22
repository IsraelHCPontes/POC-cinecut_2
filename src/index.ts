import express from 'express';
import userRouter from './Routers/userRouter.js'

const app = express();
app.use(express.json());

app.use(userRouter)


const PORT = 5001
app.listen(PORT, () => {
    console.log(`Running in ${PORT}` )
})
