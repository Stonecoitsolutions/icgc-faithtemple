// app/api/sermons/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const month = searchParams.get("month");
    const year = searchParams.get("year");

    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json({ error: "Cloudinary env vars missing" }, { status: 500 });
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    // Fetch resources from Cloudinary by folder and date
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          expression: `folder:sermons AND resource_type:video AND uploaded_at> ${year}-${month}-01 AND uploaded_at< ${year}-${month}-31`,
          max_results: 30
        })
      }
    );

    const cloudinaryData = await res.json();

    if (!cloudinaryData.resources || cloudinaryData.resources.length === 0) {
      return NextResponse.json({ sermons: [] });
    }

    const sermons = cloudinaryData.resources.map((item: any) => ({
      id: item.public_id,
      title: item.public_id.split("/").pop(),
      url: item.secure_url,
      date: item.created_at
    }));

    return NextResponse.json({ sermons });
  } catch (error) {
    console.error("Error fetching sermons:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
