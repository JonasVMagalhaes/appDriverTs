import Image from 'next/image';
import { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Input from '../../components/Input';

import IPropsLogin from '../../interfaces/IPropsLogin';
import IFunctionLogin from '../../interfaces/IFunctionLogin';

import avatarImg from '../../assets/img/avatar.png';

const LoginPage = ({ isAuthenticated }: IPropsLogin) => {

    const login = ({ email, password }: IFunctionLogin) => {
        console.log(isAuthenticated);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-blue-400 grid h-screen place-items-center">
            <h1 className="font-serif mb-16 text-3xl text-blue-900 text-center">Nome da aplicação</h1>

            <h2>{isAuthenticated}</h2>

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
        </div>
    )
}

const mapStateToProps = (store: any) => ({
    isAuthenticated: store.authState.isAuthenticated
});

export default connect(mapStateToProps)(LoginPage);