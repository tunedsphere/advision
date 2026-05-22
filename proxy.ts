import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// --- Proxy map: subdomain → rewrite prefix ---
const SUBDOMAIN_PROXY: Record<string, string> = {
  smile: "/smile",
  laugh: "/laugh",
};

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  const prefix = SUBDOMAIN_PROXY[subdomain];

  if (prefix && !request.nextUrl.pathname.startsWith(prefix)) {
    const url = request.nextUrl.clone();
    url.pathname = `${prefix}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)"],
};
