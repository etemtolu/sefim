import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Urun from "@/models/Urun";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const uruns = await Urun.find(username && { username });

    return new NextResponse(JSON.stringify(uruns), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newUrun = new Urun(body);

  try {
    await connect();

    await newUrun.save();

    return new NextResponse("Ürün eklendi", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
