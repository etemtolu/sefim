import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Cozum from '@/models/Cozum';

export const GET = async ( request , {params}) =>{
    const {id} = params;

    try{
        await connect();

        const cozum = await Cozum.findById(id);
    return new NextResponse(JSON.stringify(cozum),{status:200});

    }
    catch(err){
        return new NextResponse("Database Error",{status:500});
    }

}
export const DELETE = async ( request , {params}) =>{
    const {id} = params;

    try{
        await connect();

        await Cozum.findByIdAndDelete(id);
    return new NextResponse("Çözüm Silindi.",{status:200});

    }
    catch(err){
        return new NextResponse("Database Error",{status:500});
    }

}