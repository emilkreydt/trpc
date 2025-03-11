import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    cookies().set("some-value", "value");
    return NextResponse.json({ message: "Cookie Set Successfully" });
}
