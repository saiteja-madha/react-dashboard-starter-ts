import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function LandingPage() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to React Dashboard Starter</h1>
      <p className="text-lg mb-8">This is a starter template for React, TypeScript, Tailwind, Shadcn, and Clerk.</p>
      {user ? (
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      ) : (
        <Link to="/sign-in">
          <Button>Go to Login</Button>
        </Link>
      )}
    </div>
  );
}

export default LandingPage;
