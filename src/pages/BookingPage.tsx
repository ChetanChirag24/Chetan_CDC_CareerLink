
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";

export default function BookingPage() {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <BackButton />
        <h1 className="text-3xl font-bold ml-2">Book an Appointment</h1>
      </div>

      <div className="text-center text-muted-foreground py-20">
        Booking functionality coming soon...
      </div>
    </div>
  );
}
