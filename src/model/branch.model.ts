import mongoose, {Schema,model} from 'mongoose';

const branchSchema = new mongoose.Schema({
    name : String
})

const branchModel = mongoose.model('Branch',branchSchema);
export default branchModel;