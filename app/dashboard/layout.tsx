import { Poppins } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import PageSelector from '../components/PageSelector'
import Providers from '../components/Providers'
import { getServerSession } from "next-auth/next"
import { authOptions } from '../api/auth/[...nextauth]/route'
import SigninButton from '../components/SigninButton'
import { redirect }from 'next/navigation'
import Link from 'next/link'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})
export const metadata = {
  title: 'Stacher',
  description: 'Staff and teacher data manager',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  if(session != null) {
    return (
      <html lang="en">
        <body className={poppins.className}>
          <Providers>
          <div>
            <div className='hidden md:block'>
              <Sidebar />
            </div>
            <div className='md:ml-64 xl:ml-80'>
              {/* <div className='flex mx-auto flex-col gap-5 md:hidden'>
                <div>Stacher</div>
                <PageSelector page='Home'/>
                <PageSelector page='New Data'/>
              </div> */}
  
              <div className='flex flex-col md:hidden'>
                <div className='p-5 text-4xl text-center font-bold text-sky-600'>Stacher</div>
                <div className='grid grid-cols-2 md:hidden'>
  
                  <PageSelector page='Home'/>
                  <PageSelector page='New Data'/>
                </div>
              </div>
  
  
              {children}
            </div>
          </div>
          </Providers>
        </body> 
      </html>
    )
  } 
  // else return <Providers><div>you need to sign in first <SigninButton/></div></Providers>
  else {
    // redirect('/')
    return (
      <html lang="en">
        <body className={poppins.className}>
          <Providers>
          <div>
            <div className='hidden md:block'>
              <Sidebar />
            </div>
            <div className='md:ml-64 xl:ml-80'>
              {/* <div className='flex mx-auto flex-col gap-5 md:hidden'>
                <div>Stacher</div>
                <PageSelector page='Home'/>
                <PageSelector page='New Data'/>
              </div> */}
  
              <div className='flex flex-col md:hidden'>
                <div className='p-5 text-4xl text-center font-bold text-sky-600'>Stacher</div>
                <div className='grid grid-cols-2 md:hidden'>
  
                  <PageSelector page='Home'/>
                  <PageSelector page='New Data'/>
                </div>
              </div>
  

              <div className='flex justify-center items-center mx-auto h-screen'>
                Please login before accessing this page or &#160;<Link href='/auth/signup' className='text-center font-semibold text-sky-700 hover:text-sky-400 underline'>Sign up</Link>
              </div>
              {/* {children} */}
            </div>
          </div>
          </Providers>
        </body>
      </html>
    )
  }
}


//   return (
//     <html lang="en">
//       <body className={poppins.className}>
//         <Providers>
//         <div>
//           <div className='hidden md:block'>
//             <Sidebar />
//           </div>
//           <div className='md:ml-64 xl:ml-80'>
//             {/* <div className='flex mx-auto flex-col gap-5 md:hidden'>
//               <div>Stacher</div>
//               <PageSelector page='Home'/>
//               <PageSelector page='New Data'/>
//             </div> */}

//             <div className='flex flex-col md:hidden'>
//               <div className='p-5 text-4xl text-center font-bold text-sky-600'>Stacher</div>
//               <div className='grid grid-cols-2 md:hidden'>

//                 <PageSelector page='Home'/>
//                 <PageSelector page='New Data'/>
//               </div>
//             </div>


//             {children}
//           </div>
//         </div>
//         </Providers>
//       </body>
//     </html>
//   )  
  
// }
