import Image from "next/image";
import prisma from "@/app/components/Prisma";
import Link from "next/link";

const EditStaff = async ({
    params,
  }: {
    params: { id: string };
  }) => {   

    const staff = await prisma.staff.findUnique({where: {id: params.id}})

    return (
      <div>{staff?.id}</div>
    )
}
  
export default EditStaff