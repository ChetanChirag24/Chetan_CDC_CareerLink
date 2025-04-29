
import { Home, Calendar, BookOpen, Award, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

interface SidebarItemType {
  title: string;
  icon: React.ElementType;
  path: string;
}

const menuItems: SidebarItemType[] = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    title: "Book Advising",
    icon: Calendar,
    path: "/booking",
  },
  {
    title: "Resources",
    icon: BookOpen,
    path: "/resources",
  },
  {
    title: "Progress",
    icon: Award,
    path: "/progress",
  },
  {
    title: "Advisors",
    icon: Users,
    path: "/advisors",
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-csulb-blue flex items-center justify-center">
            <span className="text-white font-semibold text-sm">TC</span>
          </div>
          <div className="font-bold text-lg">Thrive Connect</div>
        </div>
        <div className="ml-auto md:hidden">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            CSULB Career Center
          </div>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
