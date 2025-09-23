import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker System",
      description: "A comprehensive full-stack web application for tracking personal expenses with user authentication, categorization, and detailed reporting features. Built with modern Java technologies and responsive web design.",
      techStack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "User authentication and authorization",
        "Expense categorization and filtering",
        "Monthly and yearly expense reports",
        "Responsive dashboard with charts",
        "CRUD operations for expense management"
      ],
      githubLink: "https://github.com/hariharan/expense-tracker",
      liveDemo: "#"
    },
    {
      title: "Movie Ticket Booking System",
      description: "An interactive movie ticket booking platform featuring real-time seat selection, payment integration, and user-friendly interface. Complete end-to-end booking experience with admin panel for movie management.",
      techStack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Real-time seat availability",
        "Movie scheduling and management",
        "User booking history",
        "Payment gateway integration",
        "Admin dashboard for theaters"
      ],
      githubLink: "https://github.com/hariharan/movie-booking",
      liveDemo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of my development skills through practical, real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border hover:shadow-glow transition-all duration-500 
                         hover:scale-[1.02] animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button 
                          variant="default"
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github size={16} />
                            View Code
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a 
                            href={project.liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Features List */}
                  <div className="bg-muted/30 p-8 flex flex-col justify-center">
                    <h4 className="font-semibold mb-4 text-primary">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a 
                href="https://github.com/hariharan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;