import { Request, Response, NextFunction } from "express";
import EmployeeModel from "../model/employee.model";
import BranchModel from "../model/branch.model";
import employeeModel from "../model/employee.model";


export class PageController {
    constructor() {
    }

    async showEmployeeList(req: Request, res: Response, next: NextFunction) {
        let branches = await BranchModel.find();
        let employees = await EmployeeModel.find().populate("branch");
        res.render('list', {employees : employees, branches : branches});
    };

    async createEmployee(req: Request, res: Response, next: NextFunction) {
        let branches = await BranchModel.find()
        res.render('create',{branches : branches})
    }

    async addEmployee(req: Request, res: Response, next: NextFunction) {
        const data = req.body
        let employee = {
            name : data.name,
            ID : data.ID   ,
            age : data.age,
            salary : data.salary,
            branch : data.branch,
        };
        let employees = new EmployeeModel(employee);
        await employees.save();
        res.redirect('/')
    };

    async deleteProduct(req: Request, res: Response, next: NextFunction){
        await employeeModel.findByIdAndDelete({_id : req.params.id});
        res.redirect('/')
    }

    async editProduct(req: Request, res: Response, next: NextFunction){

        let branches = await BranchModel.find();

        let employees = await EmployeeModel.findById({_id : req.params.id}).populate('branch');

        res.render('edit',{branches : branches , employees : employees})
    }

    async edit(req: Request, res: Response, next: NextFunction){
        const data = req.body
        console.log(data)
        let employee = {
            name : data.name,
            ID : data.ID  ,
            age : data.age,
            salary : data.salary,
            branch : data.branch,
        };
        await EmployeeModel.findByIdAndUpdate(req.params.id,employee)
        res.redirect('/')
    };



}