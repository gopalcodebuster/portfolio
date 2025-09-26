import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with admin dashboard, payment integration, and real-time inventory management.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      features: [
        "User authentication & authorization",
        "Shopping cart & checkout process",
        "Admin dashboard with analytics",
        "Payment gateway integration",
        "Responsive design"
      ],
      github: "https://github.com/gopal/ecommerce",
      live: "https://ecommerce-demo.com",
      category: "Full Stack"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization and automated reporting.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Express.js", "PostgreSQL", "Chart.js", "Socket.io"],
      features: [
        "Real-time data visualization",
        "Multi-platform integration",
        "Automated report generation",
        "User role management",
        "Dark/Light theme"
      ],
      github: "https://github.com/gopal/social-dashboard",
      live: "https://social-dashboard-demo.com",
      category: "Frontend"
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with authentication, team collaboration, and notification system.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
      features: [
        "JWT authentication",
        "Team collaboration features",
        "Email notifications",
        "File upload functionality",
        "API documentation"
      ],
      github: "https://github.com/gopal/task-api",
      live: "https://task-api-docs.com",
      category: "Backend"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with private messaging, group chats, file sharing, and typing indicators.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
      features: [
        "Real-time messaging",
        "Group chat functionality",
        "File & image sharing",
        "Typing indicators",
        "Message encryption"
      ],
      github: "https://github.com/gopal/chat-app",
      live: "https://chat-app-demo.com",
      category: "Full Stack"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with modern web technologies and optimized for performance.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Dark mode support",
        "Smooth animations",
        "SEO optimized",
        "Contact form integration"
      ],
      github: "https://github.com/gopal/portfolio",
      live: "https://gopal-engineer.com",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "Weather application with location-based forecasts, weather maps, and historical data analysis.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "OpenWeather API", "Chart.js"],
      features: [
        "Location-based weather",
        "7-day forecast",
        "Weather maps integration",
        "Historical data charts",
        "Weather alerts"
      ],
      github: "https://github.com/gopal/weather-app",
      live: "https://weather-dashboard-demo.com",
      category: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card border-border/50 hover:shadow-glow-primary transition-smooth group overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-secondary flex items-center justify-center">
                    <Eye className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-primary opacity-90">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-border/50 bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-border/50 hover:bg-secondary transition-smooth"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary transition-smooth">
              View More Projects on GitHub
              <Github className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;