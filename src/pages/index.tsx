import type { NextPage } from 'next';
import axios from 'axios';
import { useState } from 'react';

import Button from '@components/Button';
import ButtonIcon from '@components/ButtonIcon';
import Input from '@components/Input';
import Toast from '@components/Toast';

import { saveInLocalStorage } from 'src/data/services/localStorageService';
import {
    emitToastSuccess,
    emitToastError
} from 'src/data/services/toastService';

import logoFacebook from '@images/facebook-logo-white.png'
import logoInstagram from '@images/instagram-logo-white.png'
import logoGoogle from '@images/google-logo-white.png'

const Home: NextPage = (props: any) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async (): Promise<any> => {
        const baseUrl: any = process.env.BASE_URL;
        const response = await axios.post(`${baseUrl}/auth`, { email, password })

        if (response.data.status === 200) {
            emitToastSuccess('Usuário logado com sucesso.');
            saveInLocalStorage({ key: "authentication", value: response.data.response });
        }

        if (response.data.status !== 200) {
            emitToastError(response.data.response);
        }
    }

    return (
        <>
            <div className="bg-purple-900 flex flex-col items-center h-screen justify-between py-6">
                <h1 className="text-white">Nome do App</h1>


                <div className="w-full flex flex-col px-5">
                    <Input id="email" label="Email" placeholder="Email" type="email" value={email} callBackValue={setEmail} />
                    <Input id="password" label="Password" placeholder="Senha" type="password" value={password} callBackValue={setPassword} />
                    <span className="pb-8 pt-4 text-center text-white">Recuperar senha</span>

                    <Button textBtn="Logar" callBackFunction={() => { }}></Button>

                    <span className="pb-4 pt-12 text-center text-white">Acesse com suas redes sociais</span>

                    <div className="flex justify-evenly">
                        <ButtonIcon urlLogo={logoFacebook} width={45} height={45} />
                        <ButtonIcon urlLogo={logoInstagram} width={45} height={45} />
                        <ButtonIcon urlLogo={logoGoogle} width={45} height={45} />
                    </div>

                    <span className="pb-4 pt-12 text-center text-white">Registrar</span>
                </div>
            </div>
            <Toast />
        </>
    )
}

export default Home;