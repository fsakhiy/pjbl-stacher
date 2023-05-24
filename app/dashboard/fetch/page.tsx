import { Suspense } from "react";
// import Card from "../components/Card";
import prisma from "@/app/components/Prisma";
import Card from "@/app/components/Card";


export default async function DashboardAlt() {
  const data = await prisma.staff.findMany()
  const totalData = await prisma.staff.count()

  async function getData() {
    // return await prisma.staff.findMany()

    return (await fetch("http://localhost:3000/api/staff")).json()
  }

  return (
    <Suspense>
      <div className="h-min-screen w-auto flex bg-white">
        <div className="px-5 py-10 flex flex-col gap-3 mx-auto">
          {/* <p className="font-bold text-3xl">Dashboard<p className="font-normal text-base"> - {totalData} found</p></p> */}
          <div className="flex flex-row items-end gap-5">
            <div className="font-bold text-3xl">Dashboard</div>
            <div>{totalData} found</div>
          </div>
          <div className="rounded-t-xl bg-neutral-200 p-10 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 w-full">
            {/* {dummyData.map((staff) => (
            <Card key='' nip={staff.nip} name={staff.name} photos={staff.photos} jabatan="Guru" jenisKelamin="Perempuan" />
            ))} */}
            {
              (await getData()).map((staff: any) => (
                <Card key={staff.id} id={staff.id} nip={staff.nip} name={staff.nama} photos={staff.photo} jabatan={staff.jabatan} jenisKelamin={staff.jenisKelamin} />
              ))
            }

          </div>
        </div>
      </div>
    </Suspense>
    

  )
}