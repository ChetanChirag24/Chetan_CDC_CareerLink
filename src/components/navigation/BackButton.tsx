
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={handleBack}
      className={`hover:bg-muted ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
}
