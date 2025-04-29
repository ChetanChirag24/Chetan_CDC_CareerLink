
import { GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WelcomeCard() {
  return (
    <Card className="card-animation fade-in-delay-1 card-hover">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome back, Chetan</h2>
            <p className="text-muted-foreground mt-1">Let's continue your career journey today</p>
          </div>
          <div className="hidden sm:block">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-csulb-blue to-blue-400 flex items-center justify-center animate-pulse-soft">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-4">
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-csulb-blue">3</div>
            <div className="text-sm text-muted-foreground">Advising Sessions</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-csulb-blue">8</div>
            <div className="text-sm text-muted-foreground">Events Attended</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-csulb-blue">2</div>
            <div className="text-sm text-muted-foreground">Resume Reviews</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-csulb-blue">65%</div>
            <div className="text-sm text-muted-foreground">Profile Complete</div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button asChild className="w-full sm:w-auto btn-hover">
            <Link to="/booking" className="flex items-center justify-center gap-2">
              Book an Advising Session <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
