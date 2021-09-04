import jwt from 'jsonwebtoken';

export function generatePasswordJWT(password: string): string {
    const keyJWT: any = process.env.keyHashJwt;
    return jwt.sign({ foo: password }, keyJWT);
}