export default async function loginWithEmailAndPassword(email: string, password: string) {
    return { status: 200, json: { email, password } }
}

