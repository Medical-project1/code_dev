import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/ViewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();

let app = express();
viewEngine(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
initWebRoutes(app);
connectDB();
let port =process.env.PORT || 6969;

app.listen(port, () =>{
    console.log("backend nodejs is running on the port",port)
})