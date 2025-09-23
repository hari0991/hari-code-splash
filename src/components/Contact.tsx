import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: "Email",
      value: "pharikaran0111@gmail.com",
      link: "mailto:pharikaran0111@gmail.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      label: "Phone",
      value: "+91 85240 48993",
      link: "tel:+918524048993"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: "Location",
      value: "Thirumurgan Poondie, Tirupur District, Tamil Nadu, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/hariharan",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/hariharan",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and explore how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm actively seeking opportunities as a Java Full Stack Developer. 
                  Whether you have a job opportunity, want to collaborate on a project, 
                  or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card-gradient border-border hover:shadow-glow transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                            {info.label}
                          </h4>
                          {info.link !== "#" ? (
                            <a 
                              href={info.link}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-primary">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-card border border-border rounded-lg hover:shadow-glow 
                               transition-all duration-300 hover:scale-110 text-muted-foreground ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="animate-slide-in-right">
              <Card className="bg-card-gradient border-border p-8 text-center">
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Send className="text-primary" size={32} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Ready to Connect?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      I'm excited about the possibility of contributing to your team and bringing 
                      my passion for Java Full Stack development to your next project.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href="mailto:pharikaran0111@gmail.com" className="flex items-center justify-center gap-2">
                        <Mail size={20} />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="tel:+918524048993" className="flex items-center justify-center gap-2">
                        <Phone size={20} />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;