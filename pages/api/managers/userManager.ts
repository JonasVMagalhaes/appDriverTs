import userSchema from "../models/userModel";

import dbConnect from "../utils/dbConnect";

export async function recoveryUserByLoginAndHashPassword(email: string, md5Password: string): Promise<any> {
    dbConnect();
    const response: any = await userSchema.findOne({ email, md5Password });
    return response ? response._doc : false;
}
