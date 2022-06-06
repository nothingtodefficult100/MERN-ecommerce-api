const express = require('express');
const app = express();

//======= USE EXPRESS JSON=====//
app.use(express.json());


const productRoutes = require("./routes/productRoute")
//========ALL ROUTES HERE=======//

//======product routes=====//
app.use("/api/v1",productRoutes)






module.exports = app