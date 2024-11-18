import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <SignIn path="/sign-in" />;
    </main>
  );
}
