import { NextResponse } from "next/server";


// Users list
const users = [
  { 
    email: "ali.moghtaderj99@gmail.com", 
    password: "strongpass", 
    role: "admin"
  },
  { 
    email: "bennuai@gmail.com", 
    password: "bennuaipass", 
    role: "superuser"
  }
];

export async function POST(req: Request) {
    
    const body = await req.json();
    const { email, password } = body;

//  Do Auth
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
        );
    }
//  Assign a token to user and return it as response
    const tokenData = { email: user.email, role: user.role };
    const token = Buffer.from(JSON.stringify(tokenData)).toString("base64");

    const res = NextResponse.json({ success: true });
    
    res.cookies.set("auth-token", token, { path: "/" });

    return res;
}
