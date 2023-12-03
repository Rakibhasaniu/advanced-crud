import { IUser } from "./user.interface";
import User from "./user.model";


const createUsertIntoDB = async (data: IUser) => {
    const result = await User.create(data)
    return result;
}
const getAllUser = async () => {
    const result = await User.find();
    return result;
}
const getSingleUser = async (userId : number) => {
    const result = await User.findOne({userId});
    return result;

}
const updateUser = async (userId: number, updateData: IUser) => {
    const result= await User.findByIdAndUpdate({userId},{updateData});
    return result;
}

const deleteUser = async (userId: number) => {
    const result = await User.deleteOne({userId});
    return result
}

export const UserService = {
    createUsertIntoDB,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
}