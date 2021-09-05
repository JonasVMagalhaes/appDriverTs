import { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function RegisterPage() {
    const login = () => {
        console.log({ email, password });
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-blue-400 grid h-screen place-items-center">
            <h1 className="font-ser if mb-16 text-3xl text-blue-900 text-center">Nome da aplicação</h1>

            <div className="bg-white flex flex-col relative rounded shadow-m px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 mt-5">
                    <Input id="email" label="Email" type="text" placeholder="email@email.com" value={email} callBackValue={setEmail} />
                </div>
                <div className="mb-6">
                    <Input id="password" label="Senha" type="password" placeholder="**********" value={password} callBackValue={setPassword} />
                    <p className="italic mt-1 text-red text-xs">Por gentileza, digite sua senha</p>
                </div>

                <Button textBtn={"Registrar"} callBackFunction={login} />
            </div>
        </div>
    )
}