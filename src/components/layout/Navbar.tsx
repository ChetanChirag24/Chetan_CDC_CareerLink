
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  onNotificationsClick: () => void;
}

export default function Navbar({ onNotificationsClick }: NavbarProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <SidebarTrigger />
        </div>
        
        <div className="hidden md:flex md:flex-1 md:items-center md:gap-4 md:ml-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources, events..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative btn-hover"
            onClick={onNotificationsClick}
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-csulb-gold text-[10px] font-medium text-black">
              3
            </span>
          </Button>
          
          <Avatar className="h-9 w-9">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="bg-csulb-blue text-white">
              MB
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
