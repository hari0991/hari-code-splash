import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Languages",
      skills: [
        { name: "Java", level: 85, color: "bg-orange-500" },
        { name: "JavaScript", level: 75, color: "bg-yellow-500" },
        { name: "SQL", level: 70, color: "bg-blue-500" }
      ]
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90, color: "bg-red-500" },
        { name: "CSS", level: 85, color: "bg-blue-600" },
        { name: "Bootstrap", level: 80, color: "bg-purple-500" }
      ]
    },
    {
      icon: <Server className="text-primary" size={24} />,
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 80, color: "bg-green-500" },
        { name: "Spring MVC", level: 75, color: "bg-green-600" },
        { name: "RESTful APIs", level: 70, color: "bg-indigo-500" }
      ]
    },
    {
      icon: <Database className="text-primary" size={24} />,
      title: "Database",
      skills: [
        { name: "MySQL", level: 80, color: "bg-blue-400" },
        { name: "Database Design", level: 70, color: "bg-teal-500" },
        { name: "Query Optimization", level: 65, color: "bg-cyan-500" }
      ]
    }
  ];

  const tools = [
    "Git & GitHub", "VS Code", "IntelliJ IDEA", "Postman", 
    "Maven", "Responsive Design", "Agile Methodology", "Problem Solving"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and proficiency levels in various technologies and frameworks
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Tools & Technologies */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-muted/50 border border-border rounded-full text-sm font-medium 
                           hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 
                           hover:scale-105 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;