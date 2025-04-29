
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BackButton from "@/components/navigation/BackButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="flex justify-center mb-4">
          <BackButton />
        </div>
        <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="btn-hover">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
