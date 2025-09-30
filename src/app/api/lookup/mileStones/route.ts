import { NextRequest, NextResponse } from "next/server";
import customAxios from "../../axios";

export async function GET(request: NextRequest) {
    const { data } = await customAxios.get('/cc/lookup/76/MilestoneStatus',
        {
            headers: {
                Authorization: request.headers.get("authorization") || "",
            },
        });
    return NextResponse.json(data);
}

