
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Internship {
  id: string;
  company: string;
  position: string;
  location: string;
  type: string;
  deadline: string;
  isNew: boolean;
}

const internships: Internship[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Frontend Development Intern',
    location: 'Long Beach, CA',
    type: 'Part-time',
    deadline: '3 days left',
    isNew: true,
  },
  {
    id: '2',
    company: 'Creative Studios',
    position: 'UX/UI Design Intern',
    location: 'Remote',
    type: 'Full-time',
    deadline: '1 week left',
    isNew: true,
  },
  {
    id: '3',
    company: 'Global Finance',
    position: 'Business Analyst Intern',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    deadline: '2 weeks left',
    isNew: false,
  },
];

export default function InternshipsCard() {
  return (
    <Card className="overflow-hidden card-animation card-hover">
      <CardHeader className="bg-gradient-to-r from-csulb-gold to-amber-400 text-black">
        <div className="flex items-center justify-between">
          <CardTitle>Internship Opportunities</CardTitle>
          <Briefcase className="h-5 w-5" />
        </div>
        <CardDescription className="text-amber-900">
          Latest internships matching your profile
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {internships.map((internship, index) => (
            <div 
              key={internship.id} 
              className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors animate-fade-in`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{internship.position}</h3>
                    {internship.isNew && (
                      <Badge variant="default" className="bg-green-500 hover:bg-green-600">New</Badge>
                    )}
                  </div>
                  <p className="text-sm font-medium">{internship.company}</p>
                  <p className="text-sm text-muted-foreground">{internship.location} • {internship.type}</p>
                </div>
                <Badge variant="outline" className="text-red-500 border-red-200">
                  {internship.deadline}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
