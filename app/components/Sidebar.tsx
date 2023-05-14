import PageSelector from "./PageSelector"

export default function Sidebar() {
  return(
    <div className="py-10 max-w-xs w-full border-2 border-r-neutral-300 flex flex-col gap-10 mx-auto h-screen fixed">
      <div className="font-bold text-5xl text-sky-600 text-center">
        Stacher
      </div>
      <div className="flex flex-col gap-3">
        <PageSelector page="Home"/>
        <PageSelector page="New Data" />
      </div>
    </div>
  )
}