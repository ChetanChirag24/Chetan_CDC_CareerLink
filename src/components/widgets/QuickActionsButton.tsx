
import { Plus, Calendar, Upload, Ticket, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface ActionItem {
  icon: React.ElementType;
  label: string;
  action: () => void;
}

export default function QuickActionsButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const actions: ActionItem[] = [
    {
      icon: Calendar,
      label: "Book Advising",
      action: () => window.location.href = "/booking",
    },
    {
      icon: Upload,
      label: "Upload Resume",
      action: () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".pdf,.doc,.docx";
        input.onchange = (e) => {
          const file = (e.target as HTMLInputElement).files?.[0];
          if (file) {
            toast({
              title: "Resume uploaded",
              description: `${file.name} has been uploaded successfully.`,
            });
            setIsOpen(false);
          }
        };
        input.click();
      },
    },
    {
      icon: Ticket,
      label: "Register for Event",
      action: () => window.location.href = "/events",
    },
  ];

  return (
    <div className="fixed bottom-4 right-28 md:right-24 z-30">
      {/* Action buttons */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-fade-in">
          {actions.map((action, index) => (
            <Button
              key={action.label}
              onClick={action.action}
              variant="default"
              className={`rounded-full shadow-md flex items-center gap-2 btn-hover font-medium`}
              style={{ animationDelay: `${(actions.length - index) * 50}ms` }}
            >
              <action.icon className="h-4 w-4" />
              <span>{action.label}</span>
            </Button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <Button
        onClick={toggleOpen}
        className={cn(
          "rounded-full w-12 h-12 shadow-lg transition-transform duration-300 ease-in-out btn-hover",
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-45" : "bg-green-500 hover:bg-green-600"
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </Button>
    </div>
  );
}
