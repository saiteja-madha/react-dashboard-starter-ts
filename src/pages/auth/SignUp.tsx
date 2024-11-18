import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <SignUp path="/sign-up" />
    </main>
  );
}
