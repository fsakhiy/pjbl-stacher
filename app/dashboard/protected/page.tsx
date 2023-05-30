import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function ProtectedDash() {

  const session = await getServerSession(authOptions)
  // if (session) {
  //   return (
  //     <div>
  //       you see this because youre signed in
  //     </div>
  //   )
  // } else return <div>you are not signed in</div>
  return <pre>{JSON.stringify(session, null, 2)}</pre>

}