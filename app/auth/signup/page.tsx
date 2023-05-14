import Link from "next/link";

export default function Signup() {
  return (
    <div className="w-screen bg-neutral-100">
      <div className="max-w-lg h-screen mx-auto p-10 items-center justify-center flex">
        <form action="/api/auth/login" method="POST" className="flex flex-col gap-16 w-full">
          <div className="font-bold text-center text-4xl">
            Signup
          </div>
          <div className="flex flex-col gap-3">
            <input type="text" name="name" id="name" placeholder="name" className="p-3 rounded-md border"/>
            <input type="email" name="email" id="email" placeholder="email" className="p-3 rounded-md border"/>
            <input type="password" name="password" id="password" placeholder="password" className="p-3 rounded-md border"/>
            <input type="password" name="repeat-password" id="repeat-password" placeholder="confirm password" className="p-3 rounded-lg border"/>
            {/* <p className="text-end text-blue-800 underline hover:text-blue-400 font-semibold"><Link href='#'>forgot password?</Link></p> */}
          </div>
          <div className="flex flex-col gap-5">
            <input type="submit" value="Signup" className="p-5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg"/>
            {/* <button type="submit">Login</button> */}
            {/* <p>don&apos;t have any account? <Link href="/auth/signup" className="text-blue-800 underline hover:text-blue-400 font-semibold">Sign Up!</Link></p> */}
            <p>already have an account? <Link href="/auth/login" className="text-blue-800 underline hover:text-blue-400 font-semibold">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}