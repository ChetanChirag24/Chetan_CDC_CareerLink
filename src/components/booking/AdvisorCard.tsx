
import { Star, Clock, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AdvisorProps {
  advisor: {
    id: string;
    name: string;
    title: string;
    photo: string;
    rating: number;
    specialties: string[];
    availability: string;
    experience: string;
  };
  onSelect: (id: string) => void;
  selected: boolean;
}

export default function AdvisorCard({ advisor, onSelect, selected }: AdvisorProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleSelectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(advisor.id);
  };
  
  return (
    <div 
      className={cn(
        "relative h-[300px] perspective w-full cursor-pointer card-animation",
        selected ? "ring-2 ring-csulb-blue ring-offset-2" : ""
      )} 
      onClick={handleFlip}
    >
      <div 
        className={cn(
          "h-full w-full transition-all duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden card-hover">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-csulb-blue">
                <AvatarImage src={advisor.photo} alt={advisor.name} />
                <AvatarFallback className="bg-csulb-blue text-white text-lg">
                  {advisor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">{advisor.name}</h3>
                <p className="text-muted-foreground">{advisor.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-4 w-4 fill-csulb-gold text-csulb-gold" />
                  <span className="text-sm">{advisor.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-1">
              {advisor.specialties.map(specialty => (
                <Badge key={specialty} variant="secondary" className="bg-csulb-gold/10">
                  {specialty}
                </Badge>
              ))}
            </div>
            
            <div className="mt-4 text-sm flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{advisor.availability}</span>
            </div>
            
            <div className="mt-auto pt-4">
              <Button 
                onClick={handleSelectClick} 
                variant={selected ? "default" : "outline"} 
                className="w-full"
              >
                {selected ? "Selected" : "Select Advisor"}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 card-hover">
          <CardContent className="p-6 flex flex-col h-full">
            <h3 className="font-bold text-lg mb-2">About {advisor.name.split(' ')[0]}</h3>
            <p className="text-sm text-muted-foreground">
              {advisor.experience}
            </p>
            
            <h4 className="font-semibold mt-4 mb-2">Student Reviews</h4>
            <div className="space-y-2">
              <div className="bg-muted/50 p-2 rounded-md">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                </div>
                <p className="text-xs">"Very helpful with resume feedback and interview prep!"</p>
              </div>
              <div className="bg-muted/50 p-2 rounded-md">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3 fill-csulb-gold text-csulb-gold" />
                  <Star className="h-3 w-3" />
                </div>
                <p className="text-xs">"Great advice on internship applications and career planning."</p>
              </div>
            </div>
            
            <div className="mt-auto pt-4 flex justify-between">
              <Button variant="ghost" className="flex items-center gap-1 text-sm" size="sm">
                <Bookmark className="h-4 w-4" /> Save as favorite
              </Button>
              <Button 
                onClick={handleSelectClick} 
                variant={selected ? "default" : "outline"} 
                size="sm"
              >
                {selected ? "Selected" : "Select"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
