import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Urun from '@/models/Urun';

export const GET = async ( request , {params}) =>{
    const {id} = params;

    try{
        await connect();

        const urun = await Urun.findById(id);
    return new NextResponse(JSON.stringify(urun),{status:200});

    }
    catch(err){
        return new NextResponse("Database Error",{status:500});
    }

}
export const DELETE = async ( request , {params}) =>{
    const {id} = params;

    try{
        await connect();

        await Urun.findByIdAndDelete(id);
    return new NextResponse("Ürün Silindi.",{status:200});

    }
    catch(err){
        return new NextResponse("Database Error",{status:500});
    }

}