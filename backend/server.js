const app = require('./app');
const dotenv = require('dotenv');
const Database_Connection = require('./config/database');


//====CONFIG DOTENV=====//
dotenv.config({path:"backend/config/config.env"})


//======= DATABASE CONNECTION FUNCTION=======//
Database_Connection();




app.listen(process.env.PORT,(req,res,next) =>{
     console.log(`Server is working port on http://localhost:${process.env.PORT}`)
})