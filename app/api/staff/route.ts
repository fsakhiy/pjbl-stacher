import { NextResponse } from "next/server";
import prisma from "@/app/components/Prisma";

export async function GET(request: Request) {
  const res = await prisma.staff.findMany()
  
  return NextResponse.json(res)
}

