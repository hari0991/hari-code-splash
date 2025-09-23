import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Target, Lightbulb } from 'lucide-react';
import profileImage from '@/assets/hariharan-profile.jpg';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: "2024 Graduate",
      description: "BCom (Computer Application) with strong academic foundation"
    },
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Full Stack Training",
      description: "3-month intensive Java Full Stack course from GUVI"
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Problem Solver",
      description: "Passionate about creating efficient, practical solutions"
    },
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: "Continuous Learner",
      description: "Always eager to learn and adapt to new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile Image */}
            <div className="flex justify-center animate-slide-in-left">
              <div className="relative">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent animate-pulse-glow opacity-75"></div>
                  <img 
                    src={profileImage} 
                    alt="Hariharan - Java Full Stack Developer"
                    className="relative w-full h-full rounded-2xl object-cover border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -inset-3 rounded-2xl border-2 border-primary/30 animate-pulse"></div>
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-accent/30 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Right side - Main description */}
            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a 2024 BCom (Computer Application) graduate with a strong interest in software development 
                and web technologies. I have successfully completed a 3-month Java Full Stack Development course 
                from GUVI, where I gained hands-on experience in building end-to-end applications using Java, 
                Spring Boot, MySQL, HTML, CSS, and JavaScript.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I enjoy solving problems, learning new technologies, and applying my skills to create practical 
                solutions. I am eager to start my career as a Java Full Stack Developer, contribute to real-world 
                projects, and grow as a professional in the IT industry.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solving', 'Team Collaboration', 'Quick Learning', 'Detail Oriented'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-fade-in">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;