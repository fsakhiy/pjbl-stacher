'use client'
import { useState } from "react"
import { Toaster, toast } from "react-hot-toast"

export default async function TestState() {

  const [ email, setEmail ] = useState('')
  
  const login = async () => {
    toast(email)
  }

  return (
    <div>
      <Toaster />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={login}>halo</button>
    </div>
  )
}