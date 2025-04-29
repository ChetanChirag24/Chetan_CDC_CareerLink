
import { Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProgressTask {
  id: string;
  title: string;
  completed: boolean;
}

const progressTasks: ProgressTask[] = [
  { id: '1', title: 'Complete your profile', completed: true },
  { id: '2', title: 'Upload your resume', completed: true },
  { id: '3', title: 'Book first advising session', completed: true },
  { id: '4', title: 'Attend a career workshop', completed: false },
  { id: '5', title: 'Apply for an internship', completed: false },
];

export default function CareerProgressCard() {
  const completedTasks = progressTasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / progressTasks.length) * 100;
  
  return (
    <Card className="overflow-hidden card-animation fade-in-delay-3 card-hover">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="flex items-center justify-between">
          <CardTitle>Career Progress</CardTitle>
          <Award className="h-5 w-5" />
        </div>
        <CardDescription className="text-green-100">
          Your journey to career success
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Your Progress</span>
            <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="space-y-3">
          {progressTasks.map(task => (
            <div key={task.id} className="flex items-center">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                task.completed 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {task.completed ? '✓' : ''}
              </div>
              <span className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                {task.title}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button asChild variant="outline" className="w-full">
            <Link to="/progress">View Full Progress</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
