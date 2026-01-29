"use client";
import { useState } from 'react';
import Link from 'next/link';
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="body bg-slate-50 text-black flex flex-col md:flex-row min-h-screen md:h-screen w-screen">
      
      {/* Left side: Form */}
      
      <div className="flex flex-col justify-center gap-8 p-6 md:p-8 w-full md:w-[60%] md:px-52">
        <Link href="/">
        <button data-component-name="Button" className="inline-flex justify-start gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent min-h-9 px-4 py-2" data-testid="button-back">← Back to role selection</button>
        </Link>
        <div className="flex items-center gap-4 mb-4 text-gray-950 text-3xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(244 58% 51%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" data-component-name="Sparkles">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path>
          </svg>
          <h1 className='text-black'>TalentAI</h1>
        </div>

        <h2 className='text-xl text-neutral-950 font-bold'>Create account</h2>

        <div className="form bg-white text-gray-400">
          <form className='flex flex-col gap-4 w-full max-w-sm'>
            <label htmlFor="name" className='text-gray-600'>Full Name</label>
            <input data-component-name="Input" type="text" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="name" placeholder="Enter your name" data-testid="input-name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email" className='text-gray-600'>Email</label>
            <input data-component-name="Input" type="email" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="email" placeholder="Enter your email" data-testid="input-email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password" className='text-gray-600'>Password</label>
            <input data-component-name="Input" type="password" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" id="password" placeholder="Enter your password" data-testid="input-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='btn-primary mt-4 w-full'>Register</button>
          </form>
          <Link href="/auth/login">
          <p className='text-center mt-4 text-gray-600'>Already have an account? Login</p>
          </Link>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="hidden md:block md:w-[40%] md:h-full">
        <img
          src="/bg-img.png"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
