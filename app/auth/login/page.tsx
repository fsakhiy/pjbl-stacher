"use client"
import Link from "next/link";
import {signIn} from "next-auth/react"
import React,{ useState, ChangeEvent } from "react";
import toast, {Toaster} from "react-hot-toast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const router = useRouter()

  const login = async () => {
    // toast(`${email} - ${password}`)
    const loading = toast.loading('signin you in')
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    })

    if(res!.error) {
      toast.error(res!.error, {icon: '❌', id: loading})
    } else {
      toast.success('signed in!', {icon: '✅', id: loading})
      router.push('/dashboard')
    }
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  } 

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className="w-screen bg-neutral-100">
      <Toaster />
      <div className="max-w-lg h-screen mx-auto p-10 items-center justify-center flex">

        <div className="flex flex-col gap-16 w-full">
          <div className="font-bold text-center text-4xl">
            Login
          </div>
          <div className="flex flex-col gap-5">
            <input required value={email} onChange={handleEmailChange} type="email" name="email" id="email" placeholder="email" className="p-4 rounded-md border"/>
            <input required value={password} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="password" className="p-4 rounded-md border"/>
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

export default Login