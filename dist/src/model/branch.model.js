"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const branchSchema = new mongoose_1.default.Schema({
    name: String
});
const branchModel = mongoose_1.default.model('Branch', branchSchema);
exports.default = branchModel;
//# sourceMappingURL=branch.model.js.map