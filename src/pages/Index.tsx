
import { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import EventsCard from "../components/dashboard/EventsCard";
import InternshipsCard from "../components/dashboard/InternshipsCard";
import CareerProgressCard from "../components/dashboard/CareerProgressCard";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div className="h-full w-full flex items-center justify-center py-20">
          <div className="animate-pulse text-csulb-blue">
            <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <WelcomeCard />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EventsCard />
          <InternshipsCard />
        </div>
        
        <CareerProgressCard />
      </div>
    </MainLayout>
  );
};

export default Index;
