import { NextResponse } from "next/server";

const users = [
    {
        email:"ali.moghtaderj99@gmail.com",
        password:"strongpass"
    },
    {
        email:"bennuai@gmail.com",
        password:"bennuaipass"
    }
]

export async function POST(req:Response){
    const body = await req.json()
    const {email,password} = body

    const user = users.find(u => u.email == email && u.password == password);

    if (!user){
        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
    }

    const token = Buffer.from(`${email}:${password}`).toString("base64")
    const res = NextResponse.json({success:true})
    res.cookies.set('auth-token',token,{httpOnly:true,path:'/'})
    return res;
}