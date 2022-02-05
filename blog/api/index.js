require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());



app.use("/api/v1/post", require("./routes/posts"));

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected server and db");
    })
})