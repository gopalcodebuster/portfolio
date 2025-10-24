import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="text-center">
  {/* Profile Image */}
  <img
    src="/image.jpg"
    alt="Gopal Engineer"
    className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 shadow-lg transition-transform duration-300 hover:scale-105"
  />

  {/* Introduction */}
  <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-smooth">
    Hi, I'm <span className="gradient-text">Gopal Engineer</span>
  </h1>
</div>

          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack MERN Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating scalable web applications with modern technologies. 
            Specialized in MongoDB, Express.js, React, and Node.js with a focus on clean code and user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-smooth">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary transition-smooth">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-secondary/50 border border-border hover:bg-secondary hover:shadow-glow-primary transition-smooth group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:text-primary transition-smooth" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
