"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const manager_controller_1 = require("../controller/manager.controller");
const upload = (0, multer_1.default)();
const wedRouter = express_1.default.Router();
const page = new manager_controller_1.PageController();
wedRouter.get("/", (req, res, next) => {
    page.showEmployeeList(req, res, next).catch(err => {
        res.status(500).json(err.message);
    });
});
wedRouter.get("/create", (req, res, next) => {
    page.createEmployee(req, res, next).catch(err => {
        res.status(500).json(err.message);
    });
});
wedRouter.post('/create', upload.none(), (req, res, next) => {
    page.addEmployee(req, res, next).catch(err => {
        res.status(500).json(err.message);
    });
});
wedRouter.get('/manager/:id/delete', (req, res, next) => {
    page.deleteProduct(req, res, next).catch(err => {
        console.log(err.message);
    });
});
wedRouter.get('/manager/:id/update', (req, res, next) => {
    page.editProduct(req, res, next).catch(err => {
        console.log(err.message);
    });
});
wedRouter.post('/manager/:id/update', upload.none(), (req, res, next) => {
    page.edit(req, res, next).catch(err => {
        console.log(err.message);
    });
});
exports.default = wedRouter;
//# sourceMappingURL=manager.router.js.map