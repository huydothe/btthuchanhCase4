"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
const employee_model_1 = __importDefault(require("../model/employee.model"));
const branch_model_1 = __importDefault(require("../model/branch.model"));
const employee_model_2 = __importDefault(require("../model/employee.model"));
class PageController {
    constructor() {
    }
    async showEmployeeList(req, res, next) {
        let branches = await branch_model_1.default.find();
        let employees = await employee_model_1.default.find().populate("branch");
        res.render('list', { employees: employees, branches: branches });
    }
    ;
    async createEmployee(req, res, next) {
        let branches = await branch_model_1.default.find();
        res.render('create', { branches: branches });
    }
    async addEmployee(req, res, next) {
        const data = req.body;
        let employee = {
            name: data.name,
            ID: data.ID,
            age: data.age,
            salary: data.salary,
            branch: data.branch,
        };
        let employees = new employee_model_1.default(employee);
        await employees.save();
        res.redirect('/');
    }
    ;
    async deleteProduct(req, res, next) {
        await employee_model_2.default.findByIdAndDelete({ _id: req.params.id });
        res.redirect('/');
    }
    async editProduct(req, res, next) {
        let branches = await branch_model_1.default.find();
        let employees = await employee_model_1.default.findById({ _id: req.params.id }).populate('branch');
        res.render('edit', { branches: branches, employees: employees });
    }
    async edit(req, res, next) {
        const data = req.body;
        console.log(data);
        let employee = {
            name: data.name,
            ID: data.ID,
            age: data.age,
            salary: data.salary,
            branch: data.branch,
        };
        await employee_model_1.default.findByIdAndUpdate(req.params.id, employee);
        res.redirect('/');
    }
    ;
}
exports.PageController = PageController;
//# sourceMappingURL=manager.controller.js.map