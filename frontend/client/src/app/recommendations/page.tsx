'use client';
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react';

export default function Home() {
    let router= useRouter()

    function redirect() {   
        router.push('/home')
    }
    return (
        <main className="h-screen justify-between py-10 px-20">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col py-10'>
                    <h1 className="text-4xl font-bold pb-2">
                        <span className="text-black">/Placeholder/</span>
                    </h1>
                    <h1 className='text-xs font-light px-1'>
                        <span className="text-black">Your Technology Analyst</span>
                    </h1>
                </div>
                <div>
                    {/* back button */}
                    <button className="bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-indigo-600 hover:bg-indigo-600 hover:text-white font-medium rounded-xl px-4 py-2 text-center"
                        onClick={redirect}>
                        &lt;- Back
                    </button>
                </div>
            </div>

            {/* Recommedations section */}
            <div>
                <div className="grid grid-cols-2 gap-4">
                    {/* left one for best top result */}
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-2xl font-bold pb-2">Best Top Result</h2>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <img className="h-50 w-50 rounded-lg" src="https://via.placeholder.com/150" alt="Best Top Result" />
                                <div className="flex flex-col px-4">
                                    <h3 className="text-lg font-bold pb-2">Title</h3>
                                    <p className="text-sm font-light">Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right section for llm answer */}
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h2 className="text-2xl font-bold pb-2">LLM Answer</h2>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                               Description
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    );
}
