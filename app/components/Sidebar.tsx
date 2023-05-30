import PageSelector from "./PageSelector"
import SigninButton from "./SigninButton"

export default function Sidebar() {
  return(
    <div className="py-7 xl:py-10 w-64 xl:max-w-xs xl:w-full border-2 border-r-neutral-300 flex flex-col gap-5 xl:gap-10 mx-auto h-screen fixed">
      <div className="font-bold text-3xl xl:text-5xl text-sky-600 text-center">
        Stacher
      </div>
      <div className="flex flex-col gap-3">
        <PageSelector page="Home"/>
        <PageSelector page="New Data" />
      </div>
      <div className="fixed bottom-5">
        <SigninButton />
      </div>
    </div>
  )
}