import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      service: "whatsapp-smart-todo",
      completedChunk: 1,
      databaseConnected: false,
      whatsappConnected: false,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
