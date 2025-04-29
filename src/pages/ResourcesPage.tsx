
import { Search, BookOpen, Download, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import BackButton from "@/components/navigation/BackButton";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'video' | 'article';
  categories: string[];
  downloadable: boolean;
  url: string;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Resume Writing Guide',
    description: 'Comprehensive guide to writing an effective resume that stands out to employers',
    type: 'guide',
    categories: ['resume', 'job search'],
    downloadable: true,
    url: '#'
  },
  {
    id: '2',
    title: 'Cover Letter Template',
    description: 'Customizable cover letter template with examples for different industries',
    type: 'template',
    categories: ['cover letter', 'job search'],
    downloadable: true,
    url: '#'
  },
  {
    id: '3',
    title: 'Interview Preparation Video',
    description: 'Expert tips for answering common interview questions and making a great impression',
    type: 'video',
    categories: ['interview', 'job search'],
    downloadable: false,
    url: '#'
  },
  {
    id: '4',
    title: 'LinkedIn Profile Optimization Guide',
    description: 'Learn how to create a standout LinkedIn profile that attracts recruiters',
    type: 'guide',
    categories: ['networking', 'job search'],
    downloadable: true,
    url: '#'
  },
  {
    id: '5',
    title: 'Industry Research Methods',
    description: 'Strategies for researching industries and companies before applying or interviewing',
    type: 'article',
    categories: ['research', 'career planning'],
    downloadable: false,
    url: '#'
  },
  {
    id: '6',
    title: 'Negotiating Job Offers',
    description: 'Tips and scripts for negotiating salary and benefits for entry-level positions',
    type: 'guide',
    categories: ['negotiation', 'job search'],
    downloadable: true,
    url: '#'
  },
  {
    id: '7',
    title: 'Mock Interview Practice Questions',
    description: 'Comprehensive list of practice questions sorted by industry and role',
    type: 'template',
    categories: ['interview', 'preparation'],
    downloadable: true,
    url: '#'
  },
  {
    id: '8',
    title: 'Networking Strategies Video',
    description: 'Learn how to build and maintain a professional network as a student',
    type: 'video',
    categories: ['networking', 'career planning'],
    downloadable: false,
    url: '#'
  },
  {
    id: '9',
    title: 'Internship Application Timeline',
    description: 'Guide to internship application seasons and deadlines by industry',
    type: 'article',
    categories: ['internship', 'planning'],
    downloadable: false,
    url: '#'
  }
];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const getFilteredResources = () => {
    let filtered = mockResources;
    
    if (searchTerm) {
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.categories.some(category => 
          category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    if (activeTab !== "all") {
      filtered = filtered.filter(resource => resource.type === activeTab);
    }
    
    return filtered;
  };
  
  const filteredResources = getFilteredResources();
  
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <BackButton />
          <div>
            <h1 className="text-3xl font-bold mb-1 ml-2">Career Resources</h1>
            <p className="text-muted-foreground ml-2">Tools and guides to help you succeed</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="guide">Guides</TabsTrigger>
            <TabsTrigger value="template">Templates</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
            <TabsTrigger value="article">Articles</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card key={resource.id} className={`card-hover card-animation`} style={{ animationDelay: `${index * 50}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{resource.title}</h3>
                  <Badge variant={
                    resource.type === 'guide' ? 'default' : 
                    resource.type === 'template' ? 'secondary' : 
                    resource.type === 'video' ? 'destructive' : 'outline'
                  }>
                    {resource.type === 'guide' && 'Guide'}
                    {resource.type === 'template' && 'Template'}
                    {resource.type === 'video' && 'Video'}
                    {resource.type === 'article' && 'Article'}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">{resource.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {resource.categories.map(category => (
                    <Badge key={category} variant="outline" className="bg-muted/50">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-3 border-t flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <BookOpen className="h-3 w-3 mr-1" /> Resource
                </div>
                
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  {resource.downloadable ? (
                    <>
                      <Download className="h-4 w-4" /> Download
                    </>
                  ) : (
                    <>
                      <ArrowUpRight className="h-4 w-4" /> View
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No resources found</h2>
          <p className="text-muted-foreground max-w-md">
            We couldn't find any resources matching your search. Try different keywords or browse all resources.
          </p>
          <Button className="mt-4" onClick={() => {
            setSearchTerm("");
            setActiveTab("all");
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
