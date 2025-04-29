
import { Search, UserRound, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdvisorCard from "@/components/booking/AdvisorCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "@/components/navigation/BackButton";

const mockAdvisors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Career Advisor - Business & Economics",
    photo: "",
    rating: 4.9,
    specialties: ["Business", "Finance", "Marketing"],
    availability: "Available Mon-Thu",
    experience: "Dr. Johnson has 10+ years of experience advising students on business career paths, internships, and job placements. She previously worked as a Marketing Director for Fortune 500 companies."
  },
  {
    id: "2",
    name: "Prof. Michael Chen",
    title: "Career Advisor - Engineering & CS",
    photo: "",
    rating: 4.7,
    specialties: ["Engineering", "Computer Science", "Tech"],
    availability: "Available Tue-Fri",
    experience: "Prof. Chen brings industry experience from Silicon Valley and specializes in helping students navigate the tech job market. He maintains connections with top tech companies for internship opportunities."
  },
  {
    id: "3",
    name: "Dr. Aisha Williams",
    title: "Career Advisor - Health & Sciences",
    photo: "",
    rating: 4.8,
    specialties: ["Healthcare", "Biology", "Research"],
    availability: "Available Mon-Wed",
    experience: "With a background in healthcare administration, Dr. Williams specializes in guiding students through medical school applications, research opportunities, and healthcare career planning."
  },
  {
    id: "4",
    name: "Prof. James Rodríguez",
    title: "Career Advisor - Arts & Communication",
    photo: "",
    rating: 4.6,
    specialties: ["Design", "Media", "Communication"],
    availability: "Available Wed-Fri",
    experience: "Prof. Rodríguez has worked in creative industries for 15+ years and helps students build portfolios, navigate creative careers, and connect with industry professionals in design, media, and communications."
  },
  {
    id: "5",
    name: "Dr. Lisa Thompson",
    title: "Career Advisor - Social Sciences",
    photo: "",
    rating: 4.9,
    specialties: ["Psychology", "Sociology", "Education"],
    availability: "Available Mon-Wed",
    experience: "Dr. Thompson specializes in guiding students to careers in psychology, counseling, education, and nonprofit sectors. She has extensive experience in both academic and clinical settings."
  }
];

export default function AdvisorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAdvisor, setSelectedAdvisor] = useState<string | undefined>(undefined);
  
  const handleAdvisorSelect = (id: string) => {
    setSelectedAdvisor(id === selectedAdvisor ? undefined : id);
  };
  
  const filteredAdvisors = mockAdvisors.filter(advisor => 
    advisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advisor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advisor.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="flex items-center">
          <BackButton />
          <div>
            <h1 className="text-3xl font-bold mb-1 ml-2">Career Advisors</h1>
            <p className="text-muted-foreground ml-2">Find an advisor that matches your career needs</p>
          </div>
        </div>
        <Button asChild className="btn-hover">
          <Link to="/booking" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
        </Button>
      </div>
      
      <div className="mb-8">
        <div className="relative max-w-lg">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, specialty, or area..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {filteredAdvisors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAdvisors.map((advisor, index) => (
            <AdvisorCard 
              key={advisor.id}
              advisor={advisor}
              onSelect={handleAdvisorSelect}
              selected={selectedAdvisor === advisor.id}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <UserRound className="h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No advisors found</h2>
          <p className="text-muted-foreground max-w-md">
            We couldn't find any advisors matching "{searchTerm}". Try a different search term or browse all advisors.
          </p>
          <Button className="mt-4" onClick={() => setSearchTerm("")}>
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}
