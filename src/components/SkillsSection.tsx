import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["C#", "JavaScript"],
    color: "bg-tech-blue"
  },
  {
    title: "Frontend & Web",
    icon: "🎨",
    skills: ["HTML", "CSS"],
    color: "bg-tech-green"
  },
  {
    title: "Backend Expertise",
    icon: "⚙️",
    skills: ["ASP.NET Core", "REST APIs", "Clean Architecture"],
    color: "bg-tech-purple"
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["SQL Server"],
    color: "bg-primary"
  },
  {
    title: "DevOps & Tools",
    icon: "🔧",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions"],
    color: "bg-accent"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-tech-gradient">
            Technical Toolkit
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of modern technologies and frameworks that power 
            robust backend solutions and efficient development workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-tech group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="w-full justify-center py-2 px-4 bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-tech-gradient-subtle border-primary/20">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Beyond technical skills:</span> 
              Strong communication and product ownership capabilities, including backlog 
              management and user story creation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};