import {prisma} from "@/app/components/Prisma";
import { redirect } from "next/navigation";

// export default async function EditData() {
const EditStaff = async ({
    params,
  }: {
    params: { id: string };
  }) => {   

  
  let initialStaff = await prisma.staff.findUnique({where: {id: params.id}})

  let staffId: string = params.id.toString() 

  async function processEditData(formData : FormData) {
    "use server"

    await prisma.staff.update({ where:{
      id: staffId
    },
    data: {
      nama: formData.get("nama")!.toString(),
      nomor: formData.get("nomor")!.toString(),
      nip: formData.get("nip")!.toString(),
      alamat: formData.get("alamat")!.toString(),
      jenisKelamin: formData.get("kelamin")!.toString(),
      agama: formData.get("agama")!.toString(),
      dob: new Date(formData.get("lahir")!.toString()).toISOString(),
      jabatan: formData.get("jabatan")!.toString(),
      golongan: formData.get("golongan")!.toString(),
      tempatLahir: formData.get("tempatlahir")!.toString(),
      kawin: formData.get("kawin")!.toString() == "true" ? true : false,
      kota: formData.get("tempatlahir")!.toString(),
      pangkat: formData.get("pangkat")!.toString(),
      // photo: formData.get("photo")!.toString(),

      pegawaiTetap: formData.get("pegawaitetap")!.toString() == "true" ? true : false,
      pendidikan: formData.get("pendidikan")!.toString()
    }})
    redirect("/dashboard")
  }

  async function deleteData() {
    "use server"

    await prisma.staff.delete({where :{
      id: staffId
    }})

    redirect("/dashboard")
  }

  return (
    <div className="p-10 mx-auto flex flex-col gap-5">
      <div className="text-3xl font-bold ">
        Edit Existing Data
      </div>
      <form className="flex flex-col gap-5 rounded-xl p-10 bg-neutral-200" action={processEditData}>
        
        <table className="border-separate border-spacing-3">
          <tbody>
            <tr>
              {/* <td><label className="font-semibold" htmlFor="nama">Nama</label></td> */}
              <td className="font-semibold text-lg">Nama</td>
              <td><input className="w-full p-2 boder rounded-md" type="text" name="nama" id="nama" defaultValue={initialStaff?.nama} /></td>
            </tr>
            <tr>
              {/* <td><label className="font-semibold" htmlFor="nomor">Nomor Telpon</label></td> */}
              <td className="font-semibold text-lg">Nomor Telpon</td>
              <td><input className="w-full p-2 border rounded-md" type="tel" name="nomor" id="nomor" defaultValue={initialStaff?.nomor}/></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">NIP</td>
              <td><input className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" defaultValue={initialStaff?.nip} /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Jenis Kelamin</td>
              {/* <td><input className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" /></td> */}
              <td><select className="w-full p-2 rounded-md" name="kelamin" id="kelamin" defaultValue={initialStaff?.jenisKelamin} ><option value="Laki laki">Laki Laki</option><option value="Perempuan">Perempuan</option></select></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Agama</td>
              <td>
                <select className="w-full p-2 rounded-md" name="agama" id="agama" defaultValue={initialStaff?.agama} >
                <option value="Islam">Islam</option>
                <option value="Kristen">Kristen</option>
                <option value="Protestan">Protestan</option>
                <option value="Katolik">Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Konghucu">Konghucu</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-lg" >Status Kawin</td>
              {/* <td><input className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" /></td> */}
              <td>
                <select className="w-full p-2 rounded-md" name="kawin" id="kawin" defaultValue={initialStaff!.kawin ? "Sudah Kawin" : "Belum Kawin"} >
                <option value="true">Sudah Kawin</option>
                <option value="false">Belum Kawin</option></select>
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Alamat</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="alamat" id="alamat" defaultValue={initialStaff?.alamat} /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Tanggal Lahir</td>
              <td><input className="w-full p-2 border rounded-md" type="date" name="lahir" id="lahir" defaultValue={`${initialStaff?.dob.getFullYear()}-${("0" + (initialStaff!.dob.getMonth() + 1)).slice(-2)}-${("0" + initialStaff!.dob.getDate()).slice(-2)}`} /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Tempat Lahir</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="tempatlahir" id="tempatlahir" defaultValue={initialStaff?.tempatLahir} /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Jabatan</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="jabatan" id="jabatan" defaultValue={initialStaff?.jabatan} /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Golongan</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="golongan" id="golongan" defaultValue={initialStaff?.golongan} /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Pegawai Tetap</td>
              {/* <td><input className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" /></td> */}
              <td>
                <select className="w-full p-2 rounded-md" name="pegawaitetap" id="pegawaitetap" defaultValue={initialStaff?.pegawaiTetap ? "Pegawai tetap" : "Pegawai tidak tetap"} >
                <option value="true">Pegawai tetap</option>
                <option value="false">Pegawai tidak tetap</option></select>
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Pangkat</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="pangkat" id="pangkat" defaultValue={initialStaff?.pangkat} /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Pendidikan</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="pendidikan" id="pendidikan" defaultValue={initialStaff?.pendidikan} /></td>
            </tr>
            {/* <tr>
              <td className="font-semibold text-lg">Photo</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="photo" id="photo" defaultValue={initialStaff?.photo} /></td>
            </tr> */}

          </tbody>
        </table>
        <input type="submit" value="Edit" className="p-5 hover:bg-neutral-300 transition-colors bg-white rounded-lg" />
        
      </form>
      <form action={deleteData}>
        <input type="submit" value="DELETE" className="p-5 w-full text-xl font-bold hover:bg-red-800 transition-colors bg-red-600 text-white rounded-lg" />
      </form>
      
    </div>
  )
}

export default EditStaff