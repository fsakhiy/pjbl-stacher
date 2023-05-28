import { prisma } from "@/app/components/Prisma"

export default async function Search() {

  let data: any[] = await prisma.staff.findMany()

  const searchData = async (formData: FormData) => {
    "use server"
    
    let namaParam: string = formData.get("nama")!.toString()

    data = await prisma.staff.findMany({where: {nama: namaParam}})
  }
  
  return (
    <div>
      Welcome to the search page
      <form action={searchData}>
        <input type="text" name="nama" id="nama" />
        <input type="submit" value="search" />
      </form>
      {
        data.map((staff) => (
          <div key={staff.id}>{staff.nama}</div>
        ))
      }
    </div>
  )
} 