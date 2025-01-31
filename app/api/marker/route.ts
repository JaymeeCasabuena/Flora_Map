import { getMarkers } from "@/lib/services/marker";

export async function GET() {
  try {
    const markers = await getMarkers();
    return new Response(JSON.stringify(markers), { status: 200 });
  } catch (error) {
    console.error("Error fetching markers:", error);
    return new Response("Failed to fetch markers", { status: 500 });
  }
}
