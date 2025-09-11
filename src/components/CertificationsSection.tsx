import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users } from "lucide-react";

const certifications = [
  {
    title: "Clean Code",
    issuer: "Mahra Tech",
    status: "Completed",
    icon: <Award className="w-6 h-6" />,
    description: "Comprehensive certification covering clean code principles, best practices, and maintainable software architecture.",
    color: "bg-green-500"
  },
  {
    title: "Data Science",
    issuer: "Academic Program",
    status: "In Progress",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Currently pursuing advanced data science concepts including machine learning, statistical analysis, and data visualization.",
    color: "bg-blue-500"
  },
  {
    title: "Product Ownership",
    issuer: "Sana Soft Training",
    status: "Completed",
    icon: <Users className="w-6 h-6" />,
    description: "Specialized training in product ownership methodologies, agile practices, backlog management, and stakeholder communication.",
    color: "bg-purple-500"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-tech-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-tech-gradient">
            Certifications & Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These achievements reflect my commitment to continuous learning and 
            professional development in key areas of software engineering and product management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-tech group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white">{cert.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-primary font-semibold mb-3">
                  {cert.issuer}
                </p>
                
                <Badge 
                  variant={cert.status === "Completed" ? "default" : "secondary"}
                  className={
                    cert.status === "Completed" 
                      ? "bg-green-500/20 text-green-400 border-green-500/40" 
                      : "bg-blue-500/20 text-blue-400 border-blue-500/40"
                  }
                >
                  {cert.status}
                </Badge>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {cert.description}
              </p>

              {/* Progress indicator for in-progress items */}
              {cert.status === "In Progress" && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground font-medium">
                      Actively Learning
                    </span>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Growth Statement */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-tech-gradient text-white max-w-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">Continuous Learning Mindset</h4>
            <p className="leading-relaxed">
              These certifications represent milestones in my journey toward becoming 
              a well-rounded software professional, combining technical excellence 
              with strong product and leadership capabilities.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};