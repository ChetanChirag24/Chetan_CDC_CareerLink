
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface DatePickerProps {
  onSelectDateTime: (date: Date | undefined, time: string | undefined) => void;
  className?: string;
}

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export default function DatePicker({ onSelectDateTime, className }: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date);
    onSelectDateTime(date, selectedTime);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onSelectDateTime(date, time);
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="animate-fade-in">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="pointer-events-auto rounded-md border"
          disabled={(date) => {
            const day = date.getDay();
            // Disable weekends
            return day === 0 || day === 6 || date < new Date();
          }}
        />
      </div>
      
      {date && (
        <div className="space-y-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Available times for {format(date, "EEEE, MMMM d")}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time, index) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={cn(
                  "btn-hover animate-fade-in",
                  selectedTime === time && "bg-csulb-blue"
                )}
                onClick={() => handleTimeSelect(time)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
