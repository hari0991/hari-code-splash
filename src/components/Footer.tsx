import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/hariharan",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/hariharan",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background/95 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold gradient-text hover:scale-105 transition-transform mb-4 cursor-pointer"
              >
                Hariharan
              </button>
              <p className="text-muted-foreground leading-relaxed">
                Java Full Stack Developer passionate about creating innovative 
                web solutions and contributing to meaningful projects.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">
                Ready to discuss opportunities and collaborate on exciting projects.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted/30 border border-border rounded-lg hover:shadow-glow 
                             transition-all duration-300 hover:scale-110 text-muted-foreground 
                             hover:text-primary hover:bg-primary/10"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <a 
                  href="mailto:pharikaran0111@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  pharikaran0111@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                © {currentYear} Hariharan. Made with <Heart className="text-red-500" size={16} /> and passion.
              </p>
              <p className="text-muted-foreground text-sm">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;