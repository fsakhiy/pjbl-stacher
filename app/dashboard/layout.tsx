import { Poppins } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import PageSelector from '../components/PageSelector'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})
export const metadata = {
  title: 'Stacher',
  description: 'Staff and teacher data manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
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
      </body>
    </html>
  )
}
