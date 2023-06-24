import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Category from "@/models/Category";

export const GET = async (request) => {
    const url = new URL(request.url);
    
    const username = url.searchParams.get("username");
    
    try {
        await connect();
    
        const categories = await Category.find(username && { username });
    
        return new NextResponse(JSON.stringify(categories), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();
    
    const newCategory = new Category(body);
    
    try {
        await connect();
    
        await newCategory.save();
    
        return new NextResponse("Kategori eklendi", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};