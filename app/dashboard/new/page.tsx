import {prisma} from "@/app/components/Prisma";
import { redirect } from "next/navigation";

export default async function NewData() {

  async function processNewData(formData : FormData) {
    "use server"
    await prisma.staff.create({data: {
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

      
      // ----- photo is currently not able to be customized by the user
      // photo: formData.get("photo")!.toString(),
      photo: "placeholder.png",

      pegawaiTetap: formData.get("pegawaitetap")!.toString() == "true" ? true : false,
      pendidikan: formData.get("pendidikan")!.toString()
    }})
    redirect("/dashboard")
  }

  return (
    <div className="p-10 mx-auto flex flex-col gap-5">
      <div className="text-3xl font-bold ">
        Insert New Data
      </div>
      <form className="flex flex-col gap-5 rounded-xl p-10 bg-neutral-200" action={processNewData}>
        
        <table className="border-separate border-spacing-3">
          <tbody>
            <tr>
              {/* <td><label className="font-semibold" htmlFor="nama">Nama</label></td> */}
              <td className="font-semibold text-lg">Nama</td>
              <td><input required className="w-full p-2 boder rounded-md" type="text" name="nama" id="nama" /></td>
            </tr>
            <tr>
              {/* <td><label className="font-semibold" htmlFor="nomor">Nomor Telpon</label></td> */}
              <td className="font-semibold text-lg">Nomor Telpon</td>
              <td><input required className="w-full p-2 border rounded-md" type="tel" name="nomor" id="nomor" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">NIP</td>
              <td><input required className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Jenis Kelamin</td>
              {/* <td><input className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" /></td> */}
              <td><select required className="w-full p-2 rounded-md" name="kelamin" id="kelamin"><option value="Laki laki">Laki Laki</option><option value="Perempuan">Perempuan</option></select></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Agama</td>
              <td>
                <select required className="w-full p-2 rounded-md" name="agama" id="agama" >
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
              <td className="font-semibold text-lg">Status Kawin</td>
              {/* <td><input className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" /></td> */}
              <td>
                <select required className="w-full p-2 rounded-md" name="kawin" id="kawin" >
                <option value="true">Sudah Kawin</option>
                <option value="false">Belum Kawin</option></select>
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Alamat</td>
              <td><input required className="w-full p-2 border rounded-md" type="text" name="alamat" id="alamat" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Tanggal Lahir</td>
              <td><input required className="w-full p-2 border rounded-md" type="date" name="lahir" id="lahir" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Tempat Lahir</td>
              <td><input required className="w-full p-2 border rounded-md" type="text" name="tempatlahir" id="tempatlahir" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Jabatan</td>
              <td><input required className="w-full p-2 border rounded-md" type="text" name="jabatan" id="jabatan" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Golongan</td>
              <td><input required className="w-full p-2 border rounded-md" type="text" name="golongan" id="golongan" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Pegawai Tetap</td>
              {/* <td><input className="w-full p-2 border rounded-md" type="number" name="nip" id="nip" /></td> */}
              <td>
                <select required className="w-full p-2 rounded-md" name="pegawaitetap" id="pegawaitetap" >
                <option value="true">Pegawai tetap</option>
                <option value="false">Pegawai tidak tetap</option></select>
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Pangkat</td>
              <td><input required className="w-full p-2 border rounded-md" type="text" name="pangkat" id="pangkat" /></td>
            </tr>
            <tr>
              <td className="font-semibold text-lg">Pendidikan</td>
              <td><input required className="w-full p-2 border rounded-md" type="text" name="pendidikan" id="pendidikan" /></td>
            </tr>
            {/* <tr>
              <td className="font-semibold text-lg">Photo</td>
              <td><input className="w-full p-2 border rounded-md" type="text" name="photo" id="photo" /></td>
            </tr> */}

          </tbody>
        </table>
        <input type="submit" value="Add" className="p-5 bg-white rounded-lg" />
      </form>
    </div>
  )
}