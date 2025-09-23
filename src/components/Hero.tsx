import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const skills = ['Java', 'SpringBoot', 'MySQL', 'Spring MVC', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'];

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would place the actual PDF in the public folder
    link.download = 'Hariharan_Resume.pdf';
    link.click();
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-primary/30 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 animate-fade-in">Hello, I'm</p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Hariharan</span>
          </h1>
          
          {/* Title with typing animation */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 animate-fade-in h-16 flex items-center justify-center">
            <span className="text-muted-foreground mr-3">Java FullStack Developer |</span>
            <TypingAnimation 
              words={skills}
              className="text-primary font-mono"
            />
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
            Passionate about creating robust, scalable web applications with modern technologies. 
            Fresh graduate ready to contribute to innovative projects and grow in the IT industry.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 animate-pulse-glow"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Learn More About Me
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;