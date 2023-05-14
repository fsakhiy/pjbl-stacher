import { DocumentPlusIcon, HomeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type info = {
  page: string
}

export default function PageSelector({page}: info) {
  if (page == "Home") return (
    <Link href='/dashboard'>
      <div className="w-auto p-5 hover:bg-neutral-300 transition-colors bg-neutral-200 rounded-lg mx-5 font-semibold flex flex-row gap-3 items-center">
        <div>
          <HomeIcon width={40} />
        </div>
        <div>
          {page}  
        </div>
      </div>
    </Link>
    
  ) 
  else return (
    <Link href='/dashboard/new'>
      <div className="w-auto p-5 bg-neutral-200 rounded-lg mx-5 font-semibold flex flex-row gap-3 items-center">
        <div>
          <DocumentPlusIcon width={40} />
        </div>
        <div>
        {page}
        </div>
      </div>
    </Link>
    
  )
}