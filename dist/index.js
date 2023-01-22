import express from 'express';
import userRouter from './Routers/userRouter.js';
var app = express();
app.use(express.json());
app.use(userRouter);
var PORT = 5001;
app.listen(PORT, function () {
    console.log("Running in ".concat(PORT));
});
