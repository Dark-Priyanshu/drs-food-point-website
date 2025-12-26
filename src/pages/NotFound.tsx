import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-warm">
      <div className="text-center px-6">
        <UtensilsCrossed className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="mb-2 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-2 text-2xl font-medium text-foreground">Page not found</p>
        <p className="mb-8 text-muted-foreground">
          Looks like this dish isn't on our menu!
        </p>
        <Button size="lg" className="gap-2" asChild>
          <a href="/">
            <Home className="w-5 h-5" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
