import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-100 h-screen mx-auto flex flex-col justify-center items-center">
      <p className="font-bold text-3xl">Welcome to stacher</p>
      <p className="font-semibold text-lg">please <Link className="underline font-bold text-blue-700 hover:text-blue-500" href='/auth/login'>login</Link> or <Link className="underline font-bold text-blue-700 hover:text-blue-500" href='/auth/signup'>signup</Link> to access dashboard</p>
    </div>  
  )
}