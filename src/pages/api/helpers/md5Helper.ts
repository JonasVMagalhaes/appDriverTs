import md5 from "md5";

export function encrypterPasswordMd5(password: string): string {
    return md5(password);
}