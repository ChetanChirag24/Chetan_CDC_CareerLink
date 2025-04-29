
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import AppSidebar from "./Sidebar";
import Navbar from "./Navbar";
import NotificationPanel from "./NotificationPanel";
import QuickActionsButton from "../widgets/QuickActionsButton";
import ChatAssistant from "../chat/ChatAssistant";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background transition-colors duration-300">
        <AppSidebar />
        <div className="flex flex-col flex-1 relative">
          <Navbar onNotificationsClick={() => setNotificationsOpen(true)} />
          <main className="flex-1 container py-6 px-4 md:px-6 relative">
            {children}
          </main>
          <NotificationPanel 
            isOpen={notificationsOpen} 
            onClose={() => setNotificationsOpen(false)} 
          />
          <QuickActionsButton />
          <ChatAssistant />
        </div>
      </div>
    </SidebarProvider>
  );
}
