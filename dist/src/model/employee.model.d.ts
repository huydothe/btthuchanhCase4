import mongoose from "mongoose";
import { EmployeeInterface } from "./interfaces/employee.interface";
declare const employeeModel: mongoose.Model<EmployeeInterface, {}, {}, {}, mongoose.Schema<EmployeeInterface, mongoose.Model<EmployeeInterface, any, any, any, any>, {}, {}, {}, {}, "type", EmployeeInterface>>;
export default employeeModel;
