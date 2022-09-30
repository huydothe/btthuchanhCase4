import express from 'express'
import * as mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from 'multer';
import ejs from 'ejs';
import webRouter from './src/router/manager.router'

const port = 3000;
const upload = multer();
const app = express();

app.use(express.static('./src/public'))
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(bodyParser.json());


const DB_URL = "mongodb://localhost:27017/employee";
mongoose.connect(DB_URL)
    .then(()=>{
        console.log(`DataBase connected`);
    })
    .catch(err=>{
        console.log(`Connect fail, error: ${err.message}`)
    });

app.use('/',webRouter)


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
