import { useEffect } from "react";
import { SignOutButton, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function DashboardPage() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the dashboard</h1>
      <SignOutButton>
        <Button>
          Sign out
        </Button>
      </SignOutButton>
    </div>
  );
}

export default DashboardPage;
