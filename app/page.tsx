import Link from "next/link";
import {redirect} from "next/navigation"
export default function Home() {

  redirect('/dashboard')
  
  // return (
  //   <div className="bg-neutral-100 h-screen mx-auto flex flex-col justify-center items-center">
  //     <p className="font-bold text-3xl text-center">Welcome to stacher</p>
  //     <p className="font-semibold text-lg text-center">please <Link className="underline font-bold text-blue-700 hover:text-blue-500" href='/auth/login'>login</Link> or <Link className="underline font-bold text-blue-700 hover:text-blue-500" href='/auth/signup'>signup</Link> to access dashboard</p>
  //   </div>  
  // )
}