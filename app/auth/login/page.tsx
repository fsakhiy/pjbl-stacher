"use client"
import Link from "next/link";
import {redirect} from "next/navigation"
import {signIn} from "next-auth/react"
import React,{ useRef } from "react";
import toast, {Toaster} from "react-hot-toast";

export default async function Login() {

  const email = useRef("")
  const password = useRef("")
  
  const login = async () => {
    // const result = await signIn("credentials", {
    //   email: email.current,
    //   password: password.current,
    //   redirect: true,
    //   callbackUrl: "/dashboard",
    // }) 

    toast(`${email.current} - ${password.current}`)
  }

  return (
    <div className="w-screen bg-neutral-100">
      <div className="max-w-lg h-screen mx-auto p-10 items-center justify-center flex">
        {/* <form className="flex flex-col gap-16 w-full">
          <div className="font-bold text-center text-4xl">
            Login
          </div>
          <div className="flex flex-col gap-5">
            <input required type="email" name="email" id="email" onChange={(e) => (email.current == e.target.value)} placeholder="email" className="p-4 rounded-md border"/>
            <input required type="password" name="password" id="password" onChange={(e) => (password.current == e.target.value)} placeholder="password" className="p-4 rounded-md border"/>
            <p className="text-end text-blue-800 underline hover:text-blue-400 font-semibold"><Link href='#'>forgot password?</Link></p>
          </div>
          <div className="flex flex-col gap-5">
            <input type="submit" onClick={login} value="Login" className="p-5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg"/>
            {/* <button type="submit">Login</button> 
            <p>don&apos;t have any account? <Link href="/auth/signup" className="text-blue-800 underline hover:text-blue-400 font-semibold">Sign Up!</Link></p>
          </div>
        </form> */}

        <div className="flex flex-col gap-16 w-full">
          <div className="font-bold text-center text-4xl">
            Login
            <Toaster />
          </div>
          <div className="flex flex-col gap-5">
            <input required type="email" name="email" id="email" onChange={(e) => (email.current == e.target.value)} placeholder="email" className="p-4 rounded-md border"/>
            <input required type="password" name="password" id="password" onChange={(e) => (password.current == e.target.value)} placeholder="password" className="p-4 rounded-md border"/>
            <p className="text-end text-blue-800 underline hover:text-blue-400 font-semibold"><Link href='#'>forgot password?</Link></p>
          </div>
          <div className="flex flex-col gap-5">
            {/* <input type="submit" onClick={login} value="Login" className="p-5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg"/> */}
            <button className="p-5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg" onClick={login}>Login</button>
            {/* <button type="submit">Login</button> */}
            <p>don&apos;t have any account? <Link href="/auth/signup" className="text-blue-800 underline hover:text-blue-400 font-semibold">Sign Up!</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}