import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "MongoDB", "Express.js", "React", "Node.js", "JavaScript", "TypeScript",
    "Next.js", "Redux", "Tailwind CSS", "GraphQL", "PostgreSQL", "AWS",
    "Docker", "Git", "RESTful APIs", "Socket.io"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold gradient-text">
                Full Stack Developer & Problem Solver
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                With over 3 years of experience in web development, I specialize in building 
                robust and scalable applications using the MERN stack. My passion lies in 
                creating seamless user experiences while maintaining clean, efficient code.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I love tackling complex challenges and turning ideas into reality through code. 
                Whether it's architecting a new application from scratch or optimizing existing 
                systems, I bring dedication and technical expertise to every project.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  What I bring to the table:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Full-stack development expertise",
                    "API design and integration",
                    "Database optimization",
                    "Performance optimization",
                    "Agile development practices"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div>
              <Card className="glass-card border-border/50">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6 gradient-text">
                    Technical Skills
                  </h4>
                  
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1 bg-secondary/80 hover:bg-primary/20 transition-smooth border border-border/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold gradient-text">50+</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold gradient-text">3+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;