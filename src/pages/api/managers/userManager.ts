import userSchema from "../models/userSchema";

import dbConnect from "../utils/dbConnect";

import IUserSchema from "../interfaces/IUserSchema";

export async function addNewUserInDB(user: IUserSchema): Promise<any> {
    const response: any = await userSchema.create(user);
    return response;
}

export async function recoveryUserByLoginAndHashPassword(email: string, md5Password: string): Promise<any> {
    dbConnect();
    const response: any = await userSchema.findOne({ email: email, md5Password: md5Password });

    
    return response ? {
        id: response._doc.id,
        name: response._doc.name,
        email: response._doc.email,
        profile: response._doc.profile,
    } : false;
}

export async function updateJWTPasswordUser(email: string, jwtPassword: string): Promise<any> {
    dbConnect();
    const response: any = await userSchema.updateOne({ email }, { $set: { jwtPassword } });
    return response;
}
