import type { NextPage } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import Toast from '@components/Toast';

import avatarImg from '@images/avatar.png';


import { saveInLocalStorage } from 'src/data/services/localStorageService';
import {
    emitToastSuccess,
    emitToastError
} from 'src/data/services/toastService';

const Home: NextPage = (props: any) => {
  const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async (): Promise<any> => {
        const baseUrl: any = process.env.BASE_URL;
        const response = await axios.post(`${baseUrl}/auth`, { email, password })

        console.log(response);

        if (response.data.status === 200) {
            emitToastSuccess('Usuário logado com sucesso.');
            saveInLocalStorage({ key: "authentication", value: response.data.response });
        }

        if (response.data.status !== 200) {
            emitToastError(response.data.response);
        }
    }

    return (
        <div className="bg-blue-400 grid h-screen place-items-center">
            <h1 className="font-serif mb-16 text-3xl text-blue-900 text-center">Nome de aplicação</h1>

            <div className="bg-white flex flex-col relative rounded shadow-m px-8 pt-6 pb-8 mb-4">
                <div className="absolute flex items-center justify-center right-0 -top-11 w-full">
                    <Image className="rounded-full" src={avatarImg} alt="Avatar" width={85} height={85} />
                </div>
                <div className="mb-4 mt-5">
                    <Input id="email" label="Email" type="text" placeholder="email@email.com" value={email} callBackValue={setEmail} />
                </div>
                <div className="mb-6">
                    <Input id="password" label="Senha" type="password" placeholder="**********" value={password} callBackValue={setPassword} />
                    <p className="italic mt-1 text-red text-xs">Por gentileza, digite sua senha</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                        Esqueceu sua senha??
                    </a>
                </div>

                <Button textBtn={"Acessar"} callBackFunction={login} />
            </div>

            <p className="absolute bottom-2 right-3 text-gray-700 text-sm">Versão: 0.0.1</p>
            <Toast />
        </div>
    )
}

export default Home;