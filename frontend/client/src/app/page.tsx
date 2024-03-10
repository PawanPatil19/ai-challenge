'use client';
import { useRouter } from 'next/navigation'

export default function Home() {
  let router= useRouter()

  function redirect() {   
    router.push('/home')
  }

  return (
    <main className="flex h-screen items-center justify-between p-24 ">
      <div className="flex flex-col mx-auto">
        <h1 className="text-6xl font-bold py-10">
          <span className="text-black">/Placeholder/</span>
        </h1>
        <button 
          className="bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-indigo-600 hover:bg-indigo-600 hover:text-white font-medium rounded-xl px-4 py-2 text-center"
          onClick={redirect}>
          Get Started -&gt;
        </button>
      </div>
    </main>
  );
}
