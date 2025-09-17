import { NextResponse } from "next/server";

export async function GET() {
  // Fake data for testing UI
  const mockVideos = [
    {
      id: "1",
      title: "Sunday Sermon 1",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      date: "2025-08-01"
    },
    {
      id: "2",
      title: "Sunday Sermon 2",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      date: "2025-08-08"
    },
    {
      id: "3",
      title: "Sunday Sermon 3",
      url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      date: "2025-08-15"
    }
  ];

  return NextResponse.json(mockVideos);
}
