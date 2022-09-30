import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import {PageController} from "../controller/manager.controller";


const upload = multer();
const wedRouter = express.Router();
const page = new PageController();

wedRouter.get("/", (req, res, next) => {
    page.showEmployeeList(req, res, next).catch(err=>{
        res.status(500).json(err.message)
    });
});

wedRouter.get("/create", (req, res, next) => {
    page.createEmployee(req,res,next).catch(err=>{
        res.status(500).json(err.message)
    });
})

wedRouter.post('/create', upload.none(),(req,res,next)=>{
    page.addEmployee(req,res,next).catch(err=>{
        res.status(500).json(err.message)
    });
})

wedRouter.get('/manager/:id/delete',(req, res, next)=>{
    page.deleteProduct(req,res,next).catch(err=>{
        console.log(err.message)
    })
})

wedRouter.get('/manager/:id/update',(req, res, next)=>{
    page.editProduct(req,res,next).catch(err=>{
        console.log(err.message)
    })
});

wedRouter.post('/manager/:id/update',upload.none(), (req, res, next)=>{
    page.edit(req,res,next).catch(err=>{
        console.log(err.message)
    })
});

export default wedRouter;