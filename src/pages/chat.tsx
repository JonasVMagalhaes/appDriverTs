const Chat = (): any => {
    return (
        <>
            <div className="bg-gray-300 flex flex-col h-screen justify-between">
                <div className="w-full bg-green-400 h-40 pt-2 text-white flex justify-between shadow-md">
                    <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 my-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <div className="my-3 ml-5 text-green-100 font-bold text-lg tracking-wide">
                            <p>Carlos Rosset</p>
                            <span className="text-sm font-medium -mt-4">Condutor</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 my-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className="bg-white h-full w-full relative">
                    <div className="-top-9 absolute h-10 rounded-t-3xl bg-white w-full"></div>

                    <div className="flex justify-end w-full m-2">
                        <div className="buble1 w-60 mr-10 p-3">Boa tarde, tudo bem? Tenho algumas sacolas para carregar, o carro tem porta malas?</div>
                    </div>
                    <div className="flex justify-start w-full m-2">
                        <div className="buble2 w-60 ml-4 p-3">Tem sim, não se preocupe. Já estou chegando</div>
                    </div>
                    <div className="flex justify-end w-full m-2">
                        <div className="buble1 w-60 mr-10 p-3">Muito obrigado</div>
                    </div>
                </div>
                <div className="w-full h-16 flex justify-between bg-white">
                    <textarea
                        className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
                        placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                    <button className="m-2">
                        <svg className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* <div className=" h-full">
                <div
                    className="fixed w-full bg-green-400 h-16 pt-2 text-white flex justify-between shadow-md"
                >
                    <div className="my-3 text-green-100 font-bold text-lg tracking-wide">@rallipi</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="icon-dots-vertical w-8 h-8 mt-2 mr-2"
                    >
                        <path
                            className="text-green-100 fill-current"
                            fill-rule="evenodd"
                            d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        />
                    </svg>
                </div>

                <div className="mt-20 mb-16">
                    <div className="clearfix">
                        <div
                            className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"
                        >this is a basic mobile chat layout, build with tailwind css</div>
                    </div>

                    <div className="clearfix">
                        <div
                            className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
                        >It will be used for a full tutorial about building a chat app with vue, tailwind and firebase.</div>
                    </div>
                    <div className="clearfix">
                        <div
                            className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix"
                        >check my twitter to see when it will be released.</div>
                    </div>
                </div>
            </div>

            <div className="fixed w-full flex justify-between bg-green-100">
                <textarea
                    className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
                    placeholder="Message..."
                ></textarea>
                <button className="m-2">
                    <svg
                        className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="paper-plane"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                    </svg>
                </button>
            </div> */}
        </>
    )
}

export default Chat;