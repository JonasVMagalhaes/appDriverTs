const md5 = require('md5');

export function encrypterPasswordMd5 (password: string): string {
    return md5(password);
}