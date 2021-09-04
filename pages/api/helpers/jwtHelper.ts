const jwt = require('jsonwebtoken');

export function generatePasswordJWT(password: string): string {
    return jwt.sign({ foo: password }, process.env.HASH_JWT);
}