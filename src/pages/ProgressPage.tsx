
import { Trophy, Check, Star, Calendar, BookOpen, FileText, BriefcaseIcon, GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mockProgress = {
  overall: 65,
  categories: [
    { 
      name: "Career Planning", 
      progress: 80, 
      tasks: [
        { id: "1", title: "Complete career assessment", completed: true },
        { id: "2", title: "Create career action plan", completed: true },
        { id: "3", title: "Set career goals", completed: true },
        { id: "4", title: "Explore career pathways", completed: false },
      ] 
    },
    { 
      name: "Resume & Portfolio", 
      progress: 50, 
      tasks: [
        { id: "5", title: "Upload resume", completed: true },
        { id: "6", title: "Get resume feedback", completed: true },
        { id: "7", title: "Create portfolio", completed: false },
        { id: "8", title: "Update LinkedIn profile", completed: false },
      ] 
    },
    { 
      name: "Interview Preparation", 
      progress: 40, 
      tasks: [
        { id: "9", title: "Attend interview workshop", completed: true },
        { id: "10", title: "Practice mock interview", completed: false },
        { id: "11", title: "Research interview questions", completed: false },
        { id: "12", title: "Record video interview", completed: false },
      ] 
    },
    { 
      name: "Networking", 
      progress: 70, 
      tasks: [
        { id: "13", title: "Attend career fair", completed: true },
        { id: "14", title: "Connect with alumni", completed: true },
        { id: "15", title: "Join professional group", completed: true },
        { id: "16", title: "Information interviews", completed: false },
      ] 
    },
    { 
      name: "Job/Internship Search", 
      progress: 25, 
      tasks: [
        { id: "17", title: "Set up job alerts", completed: true },
        { id: "18", title: "Apply for internships", completed: false },
        { id: "19", title: "Research target companies", completed: false },
        { id: "20", title: "Track applications", completed: false },
      ] 
    },
  ],
  achievements: [
    { id: "1", title: "Resume Ready", description: "Uploaded your first resume", icon: FileText, date: "Mar 15, 2025" },
    { id: "2", title: "Networking Novice", description: "Attended first career event", icon: Users, date: "Mar 10, 2025" },
    { id: "3", title: "Planning Pro", description: "Completed career assessment", icon: Check, date: "Feb 28, 2025" },
  ],
  nextLevel: {
    name: "Career Explorer",
    pointsNeeded: 10
  }
};

export default function ProgressPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-1">Career Progress Tracker</h1>
      <p className="text-muted-foreground mb-8">Track your journey to career readiness</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Overall Progress */}
          <Card className="mb-6 overflow-hidden card-animation fade-in-delay-1">
            <CardHeader className="bg-gradient-to-r from-csulb-blue to-blue-500 text-white">
              <div className="flex items-center justify-between">
                <CardTitle>Overall Progress</CardTitle>
                <Trophy className="h-5 w-5" />
              </div>
              <CardDescription className="text-blue-100">
                Your career readiness journey
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <div className="w-36 h-36 rounded-full border-8 border-muted flex items-center justify-center">
                    <span className="text-4xl font-bold">{mockProgress.overall}%</span>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-csulb-blue"
                    style={{ 
                      clipPath: `polygon(50% 50%, 50% 0%, ${mockProgress.overall >= 25 ? '100% 0%' : `${50 + (mockProgress.overall/25) * 50}% 0%`}, ${
                        mockProgress.overall >= 50 ? '100% 100%' : mockProgress.overall >= 25 ? `100% ${(mockProgress.overall - 25) * 4}%` : '50% 50%'
                      }, ${
                        mockProgress.overall >= 75 ? '0% 100%' : mockProgress.overall >= 50 ? `${100 - (mockProgress.overall - 50) * 4}% 100%` : '50% 50%'
                      }, ${
                        mockProgress.overall >= 100 ? '0% 0%' : mockProgress.overall >= 75 ? `0% ${100 - (mockProgress.overall - 75) * 4}%` : '50% 50%'
                      }, ${
                        mockProgress.overall >= 25 ? '50% 0%' : `${50 - (25 - mockProgress.overall) * 2}% 0%`
                      })` 
                    }}
                  />
                </div>
                <p className="mt-4 text-center">
                  <span className="font-medium">Career Explorer</span> - Next level: <span className="font-medium">Career Strategist</span> ({10 - mockProgress.nextLevel.pointsNeeded} / 10 points)
                </p>
              </div>
              
              <div className="mt-8 grid gap-4">
                {mockProgress.categories.map(category => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{category.name}</span>
                      <span>{category.progress}%</span>
                    </div>
                    <Progress value={category.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockProgress.categories.map((category, index) => (
              <Card key={category.name} className={`card-animation fade-in-delay-${index + 2} card-hover`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {category.name}
                    <Badge>{category.progress}%</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tasks.map(task => (
                      <li key={task.id} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          task.completed 
                            ? 'bg-csulb-blue text-white' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {task.completed ? <Check className="h-3 w-3" /> : ''}
                        </div>
                        <span className={task.completed ? 'line-through text-muted-foreground' : ''}>
                          {task.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          {/* Achievements */}
          <Card className="mb-6 card-animation fade-in-delay-3 card-hover">
            <CardHeader className="bg-gradient-to-r from-csulb-gold to-amber-400 text-black">
              <div className="flex items-center justify-between">
                <CardTitle>Achievements</CardTitle>
                <Star className="h-5 w-5" />
              </div>
              <CardDescription className="text-amber-900">
                Career milestones unlocked
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {mockProgress.achievements.map((achievement, index) => (
                  <div 
                    key={achievement.id} 
                    className={`p-4 flex items-center gap-4 animate-fade-in`}
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="h-10 w-10 rounded-full bg-csulb-gold/20 flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-csulb-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Next Actions */}
          <Card className="card-animation fade-in-delay-4 card-hover">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>
                Recommended actions to boost your progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full btn-hover">
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4" /> Book a mock interview
                </span>
              </Button>
              <Button asChild variant="outline" className="w-full btn-hover">
                <span className="flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" /> Update your resume
                </span>
              </Button>
              <Button asChild variant="outline" className="w-full btn-hover">
                <span className="flex items-center justify-center gap-2">
                  <BriefcaseIcon className="h-4 w-4" /> Apply for internships
                </span>
              </Button>
              <Button asChild variant="outline" className="w-full btn-hover">
                <span className="flex items-center justify-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Attend a workshop
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}