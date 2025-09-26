import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "2022 - Present",
      description: "Lead development of scalable web applications using MERN stack. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Migrated legacy systems to modern architecture"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Mumbai, India",
      duration: "2021 - 2022",
      description: "Developed and maintained multiple client projects using React and Node.js. Collaborated with design team to implement pixel-perfect UIs.",
      achievements: [
        "Built 15+ responsive web applications",
        "Reduced API response time by 60%",
        "Implemented real-time features using Socket.io"
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Redux", "Tailwind CSS"]
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      location: "Bangalore, India",
      duration: "2020 - 2021",
      description: "Started career building websites and web applications. Gained expertise in frontend technologies and learned backend development.",
      achievements: [
        "Completed 20+ client projects",
        "Learned MERN stack fundamentals",
        "Contributed to open-source projects"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "HTML/CSS"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-border/50 hover:shadow-glow-primary transition-smooth group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold gradient-text">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="px-3 py-1 bg-secondary/80 hover:bg-primary/20 transition-smooth border border-border/30"
                        >
                          {tech}
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

export default Experience;