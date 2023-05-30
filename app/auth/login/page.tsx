import Link from "next/link";
import {prisma} from "../../components/Prisma"
import bcrypt from "bcrypt"
import {redirect} from "next/navigation"

export default async function Login() {
  
  async function validateUser(formData: FormData) {
    "use server"
    let userData = await prisma.user.findFirst({where: {email: formData.get("email")!.toString()}})
    let checkPassword = await bcrypt.compare(formData.get("password")!.toString(), userData!.password)
    // if (formData.get("password")!.toString() == userData!.password) {
    //   console.log("password match")
    // }
    if(checkPassword) {
      redirect("/dashboard")
    } else {
      redirect("/auth/login")
    }
  }
  
  return (
    <div className="w-screen bg-neutral-100">
      <div className="max-w-lg h-screen mx-auto p-10 items-center justify-center flex">
        <form action={validateUser} className="flex flex-col gap-16 w-full">
          <div className="font-bold text-center text-4xl">
            Login
          </div>
          <div className="flex flex-col gap-5">
            <input required type="email" name="email" id="email" placeholder="email" className="p-4 rounded-md border"/>
            <input required type="password" name="password" id="password" placeholder="password" className="p-4 rounded-md border"/>
            <p className="text-end text-blue-800 underline hover:text-blue-400 font-semibold"><Link href='#'>forgot password?</Link></p>
          </div>
          <div className="flex flex-col gap-5">
            <input type="submit" value="Login" className="p-5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg"/>
            {/* <button type="submit">Login</button> */}
            <p>don&apos;t have any account? <Link href="/auth/signup" className="text-blue-800 underline hover:text-blue-400 font-semibold">Sign Up!</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}