import { v4 as uuidv4 } from 'uuid';

import IResponse from "../interfaces/IResponse";
import IUser from "../interfaces/IUser";
import IUserSchema from '../interfaces/IUserSchema';

import { formatName } from '../helpers/stringsHelper';
import { validateEmail } from '../helpers/emailHelper';
import { encrypterPasswordMd5 } from '../helpers/md5Helper';

import { addNewUserInDB } from '../managers/userManager';

export async function createNewUser(user: IUser): Promise<IResponse> {
    const newUser: IUserSchema = {
        id: uuidv4(),
        name: formatName(user.name),
        email: validateEmail(user.email),
        profile: validateProfile(user.profile),
        md5Password: encrypterPasswordMd5(user.password),
        jwtPassword: ""
    };

    const userAdded = await addNewUserInDB(newUser);

    return { status: 200, response: userAdded }
}

const validateProfile = (profile: string): string => {
    const profileLowerCase = profile.toLowerCase().trim();
    const profilesValids: string[] = ["passenger", "driver"];
    const isProfileValid: boolean = profilesValids.includes(profileLowerCase);

    if (isProfileValid) return profileLowerCase;

    throw new Error(`Profile is not valid, profiles valids are: ${profilesValids}`);
}
