import { Schema, model } from 'mongoose';
import { IAddress, IFullname, IUser } from './user.interface';

const fullNameSchema = new Schema<IFullname>({
    firstName: { type: String, required: [true, 'first name is required'] },
    lastName: { type: String, required: [true, 'last name is required'] },
})

const addressSchema = new Schema<IAddress>({
    street: { type: String, required: [true, 'street is required'] },
    city: { type: String, required: [true, 'city is required'] },
    country: { type: String, required: [true, 'country is required'] },
  })

const userSchema = new Schema<IUser>({
    userId : {
        type: Number,
        required: [true,'UserId is Required'],
        unique: true,
        index: true
    },
    username: {
        type: String,
        required: [true,'UserName is Required'],
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: [true,'Password is Required']
    },
    fullName: {
        type: fullNameSchema,
        required: true,
    },
    age: {
        type: Number,
        required: [true,'Age is Required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
      },
      isActive: {
        type: Boolean,
        required: [true, 'active status  is required'],
      },
      hobbies: {
        type: [String],
      },
      address: {
        type: addressSchema,
        required: true,
      },
})


const User = model<IUser>('User', userSchema)

export default User