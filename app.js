const express = require('express');
const UserRouter = require("./routes/userRouter");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const DB = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => {
    console.log("connection a la base assuré !!!");
})
    .catch((e) => { console.log(e) })
const app = express();
app.use(express.json());
app.use("/user", UserRouter);
const port = 5555;
app.listen(port, () => {
    console.log("the port is running!!!");

});