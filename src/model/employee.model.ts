import mongoose,{Schema , model} from "mongoose";
import {EmployeeInterface} from "./interfaces/employee.interface";

const employeeSchema = new mongoose.Schema<EmployeeInterface>({
    name : String,
    ID : String,
    age : Number,
    salary : Number,
    branch : {
        type : Schema.Types.ObjectId,
        ref : "Branch"
    }
})

const employeeModel = mongoose.model('Employee', employeeSchema);

export default employeeModel;