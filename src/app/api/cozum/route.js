import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Cozum from "@/models/Cozum";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const cozums = await Cozum.find(username && { username });

    return new NextResponse(JSON.stringify(cozums), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newCozum = new Cozum(body);

  try {
    await connect();

    await newCozum.save();

    return new NextResponse("Çözüm eklendi", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
