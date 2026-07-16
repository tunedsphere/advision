import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isMoodDashboardHost,
  MOOD_DASHBOARD_URL,
  MOOD_PRODUCT_PATH,
} from "@/lib/mood/cloud";

const SUBDOMAIN_PROXY: Record<string, string> = {
  smile: "/smile",
  laugh: "/laugh",
};

const isPublicAuthRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

function applySubdomainRewrite(request: NextRequest): NextResponse | null {
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  if (subdomain === "cloud") {
    return null;
  }

  const prefix = SUBDOMAIN_PROXY[subdomain];
  if (prefix && !request.nextUrl.pathname.startsWith(prefix)) {
    const url = request.nextUrl.clone();
    url.pathname = `${prefix}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return null;
}

export default clerkMiddleware(async (auth, request) => {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;
  const { userId } = await auth();
  const onDashboardHost = isMoodDashboardHost(hostname);

  if (onDashboardHost) {
    if (pathname === "/" || pathname === "") {
      const target = userId ? "/mood-cloud/dashboard" : "/sign-in";
      return NextResponse.redirect(new URL(target, request.url));
    }

    if (
      !userId &&
      !isPublicAuthRoute(request) &&
      !pathname.startsWith("/__clerk")
    ) {
      const signIn = new URL("/sign-in", request.url);
      signIn.searchParams.set("redirect_url", MOOD_DASHBOARD_URL);
      return NextResponse.redirect(signIn);
    }

    return NextResponse.next();
  }

  if (pathname === MOOD_PRODUCT_PATH && userId) {
    const host = hostname.split(":")[0]?.toLowerCase() ?? "";
    if (host === "localhost" || host === "127.0.0.1") {
      return NextResponse.redirect(
        new URL("/mood-cloud/dashboard", request.url),
      );
    }
    return NextResponse.redirect(MOOD_DASHBOARD_URL);
  }

  const rewrite = applySubdomainRewrite(request);
  if (rewrite) {
    return rewrite;
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
