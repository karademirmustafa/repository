require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


app.use(express.json());
app.use(cors());



app.use("/api/v1/post", require("./routes/posts"));
app.use("/api/v1/category", require("./routes/categories"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/image", require("./routes/images"));

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected server and db");
    })
})