import { NextRequest, NextResponse } from "next/server";
import customAxios from "../axios";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { data } = await customAxios.post('/cc/mobile/pipeline', body,
        {
            headers: {
                Authorization: request.headers.get("authorization") || "",
            },
        });
    return NextResponse.json(data);
}

