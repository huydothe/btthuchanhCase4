import { Request, Response, NextFunction } from "express";
export declare class PageController {
    constructor();
    showEmployeeList(req: Request, res: Response, next: NextFunction): Promise<void>;
    createEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    addEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    editProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    edit(req: Request, res: Response, next: NextFunction): Promise<void>;
}
