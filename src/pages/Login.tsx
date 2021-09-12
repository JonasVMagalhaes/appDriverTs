import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';

import { setAuthenticate } from '../data/store/actions';

import Button from '@components/Button';
import Input from '@components/Input';

import avatarImg from '@images/avatar.png';

import IPropsLogin from '@types/IPropsLogin';

import { saveInLocalStorage } from 'src/data/services/localStorageService';

const Login = (props: IPropsLogin) => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(props.isAuthenticated);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async (): Promise<any> => {
        const baseUrl: any = process.env.BASE_URL;
        const response = await axios.post(`${baseUrl}/auth`, {
            email: "carlos@app.com",
            password: "123456789"
        })

        if(response.status === 200) {
            saveInLocalStorage({key: "authentication", value: response.data.response});
            props.dispatch(setAuthenticate(isAuthenticated));
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
        </div>
    )
}

const mapStateToProps = (store: any) => ({
    isAuthenticated: store.authState.isAuthenticated
});

export default connect(mapStateToProps)(Login);