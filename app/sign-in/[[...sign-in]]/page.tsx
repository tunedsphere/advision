import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-6 py-16">
      <SignIn />
    </main>
  );
}
