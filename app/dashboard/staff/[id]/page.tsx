"use server"
import Image from "next/image";
import {prisma} from "@/app/components/Prisma";
import Link from "next/link";
import { useSession } from "next-auth/react"

const Staff = async ({
    params,
  }: {
    params: { id: string };
  }) => {   
    
    const staff = await prisma.staff.findUnique({where: {id: params.id}})

    return (
      <div className="p-10 w-auto">
        <div className="flex flex-col gap-5">
          <div className="font-bold text-3xl">
            Detail Profile
          </div>
          <div className="bg-neutral-200 rounded-xl pt-5 p-10 flex flex-col gap-7">
            <div className="mx-auto border-2">
              <Image src={`/${staff?.photo}`} alt={`${staff?.nama}`} width={120} height={120} ></Image>
            </div>
            <div>
              <table className="border-separate border-spacing-3">
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>{staff?.nama}</td>
                  </tr>
                  <tr>
                    <td>NIP</td>
                    <td>:</td>
                    <td>{staff?.nip}</td>
                  </tr>
                  <tr>
                    <td>Nomor Telpon</td>
                    <td>:</td>
                    <td>{staff?.nomor}</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td>{staff?.jenisKelamin}</td>
                  </tr>
                  <tr>
                    <td>Tempat, tanggal lahir</td>
                    <td>:</td>
                    <td>{staff?.tempatLahir}, {staff?.dob.toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <td>Agama</td>
                    <td>:</td>
                    <td>{staff?.agama}</td>
                  </tr>
                  <tr>
                    <td>Status Kawin</td>
                    <td>:</td>
                    {/* <td>{if(staff?.kawin) {}</td> */}
                    {staff?.kawin ? (<td>Sudah kawin</td>) : (<td>Belum Kawin</td>)}
                  </tr>
                  <tr>
                    <td>Pegawai Tetap</td>
                    <td>:</td>
                    {staff?.pegawaiTetap ? (<td>Tetap</td>) : (<td>Tidak Tetap</td>)}
                  </tr>
                  <tr>
                    <td>Jabatan</td>
                    <td>:</td>
                    <td>{staff?.jabatan}</td>
                  </tr>
                  <tr>
                    <td>Pangkat / Golongan</td>
                    <td>:</td>
                    <td>{staff?.pangkat} / {staff?.golongan}</td>
                  </tr>
                  <tr>
                    <td>Pendidikan</td>
                    <td>:</td>
                    {/* <td>{staff?.pendidikan}</td> */}
                    {staff?.pendidikan.map((pendidikan) => (<td key=''>{pendidikan}</td>))}
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>{staff?.alamat}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-right">
              <Link href={`/dashboard/staff/${params.id}/edit`}><button className="p-5 font-semibold bg-white rounded-lg hover:bg-neutral-300 transition-colors">Edit Profile</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
}
  
export default Staff