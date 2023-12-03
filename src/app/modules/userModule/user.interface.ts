import { Schema, model, connect } from 'mongoose';

export type IFullname = {
    firstName: string;
    lastName: string;
}
export type IAddress = {
    street: string;
    city: string;
    country: string;
}
export type IUser = {
    userId: number;
    username: string;
    password: string;
    fullName: IFullname;
    age: number;
    email:string;
    isActive: boolean;
    hobbies:string[];
    address:
}