/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserService } from "./user.service";




const createUser =async (req: Request, res: Response) => {
    try{
        const data = req.body
        console.log(data)
        // if (isNaN(data.userId)) {
        //     throw new Error('Invalid userId. Please provide a valid number.');
        // }
        const result = await UserService.createUsertIntoDB(data);
        res.status(200).json({
            success: true,
            message:'User Created Successfully',
            data: result,
        })
    } catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something Went Wrong',
            error: err,
        })
    }
}
const getAllUser =async (req: Request, res: Response) => {
    try{
        
        const result = await UserService.getAllUser();
        res.status(200).json({
            success: true,
            message:'User Getting Successfully',
            data: result,
        })
    } catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something Went Wrong',
            error: err,
        })
    }
}
const getSingleUser =async (req: Request, res: Response) => {
    try{
        const userId = req.params.userId
        const result = await UserService.getSingleUser(parseInt(userId))
        res.status(200).json({
            success: true,
            message:'Single User Getting Successfully',
            data: result,
        })
    } catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something Went Wrong',
            error: err,
        })
    }
}
const deleteUser =async (req: Request, res: Response) => {
    try{
        const userId = req.params.userId
        const result = await UserService.deleteUser(parseInt(userId))
        if (result?.deletedCount == 1) {
            res.json({
              success: true,
              message: 'User deleted successfully!',
              data: null,
            })
          } else {
            res.json({
              success: false,
              message: 'User not found',
              error: {
                code: 404,
                description: 'User not found!',
              },
            })
          }
        
    } catch(err: any){
        res.status(500).json({
            success: false,
            message: err.message || 'Something Went Wrong',
            error: err,
        })
    }
}

export const UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    deleteUser,
    
}