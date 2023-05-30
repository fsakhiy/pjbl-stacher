'use client'
import React from "react";
import { signOut, signIn, useSession} from "next-auth/react"

const SigninButton = () => {
  const {data:session} = useSession()
  if(session && session.user) {
    return (
      <div>
        <div>{session.user.name}</div>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }
  return <button onClick={() => signIn()}>Sign In</button>
}

export default SigninButton