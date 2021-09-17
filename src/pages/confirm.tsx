import Image from 'next/image';
import { useState, useEffect } from 'react';

import Toast from '@components/Toast';
import Version from '@components/Version';
import InputSingleNumber from '@components/InputSingleNumber';

import emailImage from '@images/email-img.png';

const Confirm = (): any => {
    const [firstNumber, setFirstNumber]: any = useState("");
    const [secondNumber, setSecondNumber]: any = useState("");
    const [thirdNumber, setThirdNumber]: any = useState("");
    const [fourthNumber, setFourthNumber]: any = useState("");
    const [fifthNumber, setFifthNumber]: any = useState("");
    const [sixthNumber, setSixthNumber]: any = useState("");

    const changeInput = (nextInput: string) => {
        document.getElementById(nextInput)?.focus();
    }

    return (
        <>
            <div className="flex flex-col justify-between items-center py-12 h-screen max-w-xs m-auto">
                <Image src={emailImage} alt="Imagem email" width={150} height={150} />

                <div>
                    <p className="text-center mb-3">Por gentileza, digite o código enviado para o email jonas@2cl.com.br</p>
                    <div className="w-full flex justify-between">
                        <InputSingleNumber id="firstNumber" label="" icon="" type="text" value={firstNumber} callBackValue={setFirstNumber} setInputFocused={() => changeInput("secondNumber")} />
                        <InputSingleNumber id="secondNumber" label="" icon="" type="text" value={secondNumber} callBackValue={setSecondNumber} setInputFocused={() => changeInput("thirdNumber")} />
                        <InputSingleNumber id="thirdNumber" label="" icon="" type="text" value={thirdNumber} callBackValue={setThirdNumber} setInputFocused={() => changeInput("fourthNumber")} />
                        <InputSingleNumber id="fourthNumber" label="" icon="" type="text" value={fourthNumber} callBackValue={setFourthNumber} setInputFocused={() => changeInput("fifthNumber")} />
                        <InputSingleNumber id="fifthNumber" label="" icon="" type="text" value={fifthNumber} callBackValue={setFifthNumber} setInputFocused={() => changeInput("sixthNumber")} />
                        <InputSingleNumber id="sixthNumber" label="" icon="" type="text" value={sixthNumber} callBackValue={setSixthNumber} setInputFocused={() => changeInput("sixthNumber")} />
                    </div>
                </div>
                
                <span>Reenviar email</span>
            </div>
            <Version version="0.0.1" />
            <Toast />
        </>
    )
}

export default Confirm;