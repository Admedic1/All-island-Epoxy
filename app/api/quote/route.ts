import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  // Append all fields as query params so Zapier displays them immediately
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(body)) {
    if (value !== null && value !== undefined && value !== "") {
      params.append(key, String(value));
    }
  }
  const urlWithParams = `${webhookUrl}?${params.toString()}`;

  try {
    const res = await fetch(urlWithParams, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Zapier error" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
