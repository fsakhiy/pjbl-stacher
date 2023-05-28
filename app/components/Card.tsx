import Image from "next/image"
import Link from "next/link"

type info = {
  name: string,
  nip: string,
  photos: string,
  jabatan: string,
  jenisKelamin: string,
  id: string
}

export default function Card({name, nip, photos, jabatan, jenisKelamin, id}: info) {
  return (
      <div className="flex flex-row gap-5 rounded-md p-5 bg-white w-auto">
      <div className="flex flex-col items-center justify-center gap-3 w-40">
        <div>
          <Image src={`/${photos}`} alt={name} width={80} height={80} ></Image>
        </div>
        <div>
          <div className="text-center font-bold">{name}</div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <div className="text-right">{jabatan}</div>
        </div>
        <div>
          {/* <div>nip: {nip}</div> */}

          <table className="text-left">
            <tbody>
              <tr>
                <td>NIP</td>
                <td>:</td>
                <td>{nip}</td>
              </tr>
              <tr>
                <td>Kelamin&nbsp;</td>
                <td>:</td>
                <td>{jenisKelamin}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-right">
          <Link href={`/dashboard/staff/${id}`} ><button className="p-2 hover:bg-white transition-colors bg-neutral-200 rounded-lg">More detail</button></Link>
        </div>
        
      </div>
    </div>
  )
}