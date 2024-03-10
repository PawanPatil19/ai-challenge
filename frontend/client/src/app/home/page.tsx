'use client';
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
    let router= useRouter()

    function getResults() {   
        router.push('/recommendations')
    }

    const [messages, setMessages] = useState([
        {
          role: "system",
          content: "You are a chatbot that is helpful and replies concisely",
        },
      ]); // An array of the messages that make up the chat
    const [newMessageText, setNewMessageText] = useState("");
    const [loadingStatus, setLoadingStatus] = useState(false);

    const onChange = (event) => {
        setNewMessageText(event.target.value);
    };

    const onClick = () => {
        setMessages([
            {
            role: "system",
            content: "You are a chatbot that is helpful and replies concisely",
            },
        ]);
        setNewMessageText("");
    };

    // `onSubmit` event handler fired when the user submits a new message
    const onSubmit = async (event) => {
        event.preventDefault();
        setMessages([...messages, { role: "user", content: newMessageText }]);
        setLoadingStatus(true);
        setNewMessageText("");
    };

    // `onKeyDown` event handler to send a message when the return key is hit
    // The user can start a new line by pressing shift-enter
    const onKeyDown = (event) => {
        if (event.keyCode == 13 && event.shiftKey == false) {
        onSubmit(event);
        }
    };

    useEffect(() => {
        // Function that calls the `/api/chat` endpoint and updates `messages`
        const fetchReply = async () => {
          try {
            const response = await fetch("/api/chat", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ messages }),
            });
    
            const responseBody = await response.json();
            const reply =
              response.status === 200
                ? responseBody.reply
                : responseBody.error.reply;
    
            setMessages([...messages, reply]);
          } catch {
            // Catch and handle any unexpected errors
            const reply = {
              role: "assistant",
              content: "An error has occured.",
            };
    
            setMessages([...messages, reply]);
          }
          setLoadingStatus(false);
        };
        if (loadingStatus === true) {
          fetchReply();
        }
      }, [loadingStatus]);

      const textareaRef = useRef(null);
    const backgroundRef = useRef(null);
    const whitespaceRef = useRef(null);

    // Effect hook triggered when `newMessageText` changes
    useEffect(() => {
        if (!textareaRef.current || !backgroundRef.current || !whitespaceRef.current) {
            return;
        }
        
        textareaRef.current.style.height = "0px";

        const MAX_HEIGHT = 320;
        const HEIGHT_BUFFER = 4;
        const VERTICAL_SPACING = 20;

        const textareaContentHeight =
        textareaRef.current.scrollHeight + HEIGHT_BUFFER;

        const textareaHeight = Math.min(textareaContentHeight, MAX_HEIGHT);

        textareaRef.current.style.height = textareaHeight + "px";
        backgroundRef.current.style.height =
        textareaHeight + 2 * VERTICAL_SPACING + "px";
        whitespaceRef.current.style.height =
        textareaHeight + 2 * VERTICAL_SPACING + "px";
    }, [newMessageText]);

    
     
    
    return (
        <main className="h-screen justify-between py-10 px-20">
            <div className='flex flex-col py-10'>
                <h1 className="text-4xl font-bold pb-2">
                    <span className="text-black">/Placeholder/</span>
                </h1>
                <h1 className='text-xs font-light px-1'>
                    <span className="text-black">Your Technology Analyst</span>
                </h1>
            </div>
            <div className='mx-auto'>
                <div className='grid grid-cols-5 gap-4 items-start'>
                    {/* left dropdown selectors */}
                    <div className='col-span-2 border-2 border-gray-400 rounded-lg py-5'>
                        {/* Dropdown selector for product type */}
                        <form className="max-w-sm mx-auto py-2">
                            <label className="block mb-2 text-xs font-light text-gray-900 ">Select product type</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 ">
                                <option selected>Choose product</option>
                                <option value="laptops">Laptops</option>
                                <option value="mobiles">Mobile Phones</option>
                            </select>
                        </form>
                        {/* Dropdown selector for more selectors */}
                        <form className="max-w-sm mx-auto py-2">
                            <label className="block mb-2 text-xs font-light text-gray-900 ">Select product type</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 ">
                                <option selected>Choose product</option>
                                <option value="laptops">Laptops</option>
                                <option value="mobiles">Mobile Phones</option>
                            </select>
                        </form>

                        <form className="max-w-sm mx-auto py-2">
                            <label className="block mb-2 text-xs font-light text-gray-900 ">Select product type</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 ">
                                <option selected>Choose product</option>
                                <option value="laptops">Laptops</option>
                                <option value="mobiles">Mobile Phones</option>
                            </select>
                        </form>
                        <form className="max-w-sm mx-auto py-2">
                            <label className="block mb-2 text-xs font-light text-gray-900 ">Select product type</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 ">
                                <option selected>Choose product</option>
                                <option value="laptops">Laptops</option>
                                <option value="mobiles">Mobile Phones</option>
                            </select>
                        </form>
                        <form className="max-w-sm mx-auto py-2">
                            <label className="block mb-2 text-xs font-light text-gray-900 ">Select product type</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 ">
                                <option selected>Choose product</option>
                                <option value="laptops">Laptops</option>
                                <option value="mobiles">Mobile Phones</option>
                            </select>
                        </form>
                        <div className='w-full flex py-5'>
                            <button 
                                className="mx-auto bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-indigo-600 hover:bg-indigo-600 hover:text-white font-medium rounded-xl px-4 py-2 text-center"
                                onClick={getResults}>
                                Get Best Match -&gt;
                            </button>
                        </div>
                        
                    </div>
                    {/* chat window on the right */}
                    <div className='col-span-3 border-2 border-gray-400 rounded-lg px-2'>
                        <div className='h-[30rem] overflow-scroll'>
                            {messages.length === 1 && (
                                <div className="mx-10 mt-20 flex justify-center">
                                    <div>
                                        <p className="mb-2 font-bold">
                                            Welcome to /Placeholder/
                                        </p>
                                        <p className="mb-32">
                                            To start a conversation, type a message below and hit send
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div>
                            {messages.slice(1).map((message, index) => (
                                <div className="my-4 mx-2" key={index.toString()}>
                                    <p className="font-bold">
                                        {message.role === "assistant" ? "/Placeholder/" : "You"}
                                    </p>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {message.content}
                                    </ReactMarkdown>
                                </div>
                            ))}
                            </div>

                            {loadingStatus && (
                                <div className="mx-2 mt-4">
                                    <p className="font-bold">/Placeholder/ is replying...</p>
                                </div>
                            )}

                            {!loadingStatus && messages.length > 1 && (
                            <div className="mt-4 flex justify-center">
                                <button
                                className="rounded-md border-2 border-gray-400
                                            bg-white px-2 py-1
                                            hover:border-gray-600"
                                onClick={onClick}
                                >
                                <p className="font-light text-sm">New chat</p>
                                </button>
                            </div>
                            )}

                            <div ref={whitespaceRef} className="z-0"></div>

                            <div
                            className="fixed bottom-0 z-10 w-full max-w-full bg-white/75
                                        sm:max-w-3xl"
                            ></div>

                            <div
                            ref={backgroundRef}
                            className="fixed bottom-5 z-20 w-full max-w-full 
                                        sm:max-w-3xl"
                            >
                                <form className="flex items-end" onSubmit={onSubmit}>
                                    <textarea
                                    ref={textareaRef}
                                    className="mr-2 grow resize-none rounded-md border-2 
                                            border-gray-400 p-2 focus:border-indigo-600 
                                                focus:outline-none"
                                    value={newMessageText}
                                    onChange={onChange}
                                    onKeyDown={onKeyDown}
                                    placeholder="Ask me anything..."
                                    />

                                    {loadingStatus ? (
                                    <button
                                        className="h-11 rounded-full border-2 border-indigo-600
                                                bg-indigo-600 px-4 py-1"
                                        disabled
                                    >
                                        <p className="font-bold text-white">Send</p>
                                    </button>
                                    ) : (
                                    <button
                                        className="h-11 rounded-full border-2 border-indigo-800
                                                bg-indigo-600 px-4 py-1 hover:border-indigo-700 
                                                hover:bg-indigo-700"
                                        type="submit"
                                    >
                                        <p className="font-bold text-white">Send</p>
                                    </button>
                                    )}
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
        );
}