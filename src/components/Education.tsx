import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "KPR College of Arts Science and Research",
      degree: "Bachelor of Commerce (Computer Application)",
      year: "2024",
      location: "Tamil Nadu, India",
      description: "Comprehensive program combining commerce principles with computer application fundamentals, providing a strong foundation in both business and technology.",
      highlights: [
        "Computer Application Specialization",
        "Business & Commerce Fundamentals",
        "Software Development Basics",
        "Database Management",
        "Web Technologies Introduction"
      ]
    }
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "GUVI",
      year: "2024",
      duration: "3 Months",
      description: "Intensive hands-on training program covering end-to-end web application development",
      skills: [
        "Java Programming",
        "Spring Boot Framework",
        "MySQL Database",
        "RESTful Web Services",
        "Frontend Technologies",
        "Project Development"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span> & Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional certifications that shaped my expertise
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Academic Education
            </h3>
            
            {educationData.map((edu, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <h4 className="text-lg text-primary font-semibold">{edu.institution}</h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">Key Learning Areas</h5>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div 
                          key={highlightIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Professional Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                      <h4 className="text-lg text-primary font-semibold">{cert.issuer}</h4>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {cert.year}
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        {cert.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">Skills Acquired</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;