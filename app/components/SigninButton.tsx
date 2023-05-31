'use client'
import React from "react";
import { signOut, signIn, useSession} from "next-auth/react"
import { redirect } from "next/navigation";
import Link from "next/link";

const SigninButton = () => {
  const {data:session} = useSession()
  if(session && session.user) {
    return (
      <div className="p-5 flex flex-col w-auto mx-5 rounded-lg bg-gray-200 font-semibold">
        <div>you&#39;re signed in as <div className="font-bold">{session.user.name}</div></div>
        <button className="p-3 bg-red-700 font-semibold text-white rounded-lg hover:bg-red-900" onClick={() => signOut()}  >Sign Out</button>
      </div>
    )
  }
  return <div className="flex w-auto mx-5 gap-3">
    <button className="p-3 xl:p-5 flex w-full rounded-lg bg-sky-900 font-semibold text-white" onClick={() => signIn()}>Sign In</button>
    <button className="p-3 xl:p-5 flex w-full rounded-lg bg-teal-800 font-semibold text-white" ><Link href='/auth/signup'>Sign Up</Link></button>
  </div>
}

export default SigninButton