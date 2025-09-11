import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Code } from "lucide-react";

const experiences = [
  {
    title: "Trainee",
    company: "Sana Soft",
    type: "Backend Development",
    icon: <Code className="w-6 h-6" />,
    description: "Engaged in practical .NET backend development, applying theoretical knowledge to real-world scenarios. My role involved close collaboration with senior engineers, contributing to scalable and efficient solutions.",
    highlights: [
      "Real-world .NET development",
      "Collaboration with senior engineers", 
      "Scalable solution architecture",
      "Clean code practices"
    ]
  },
  {
    title: "Product Owner Tasks",
    company: "Project Development",
    type: "Product Management",
    icon: <Building2 className="w-6 h-6" />,
    description: "Actively participated in product development cycles by creating detailed backlogs, crafting user stories, and assisting with feature prioritization, ensuring alignment with project goals.",
    highlights: [
      "Backlog management",
      "User story creation",
      "Feature prioritization",
      "Stakeholder alignment"
    ]
  },
  {
    title: "Community & Volunteering",
    company: "Various Initiatives",
    type: "Teaching & Mentoring",
    icon: <Users className="w-6 h-6" />,
    description: "Involved in various initiatives focused on teaching, mentoring, and fostering team collaboration. This experience has honed my ability to explain complex technical concepts clearly and work effectively within diverse groups.",
    highlights: [
      "Technical mentoring",
      "Team collaboration",
      "Knowledge sharing",
      "Community building"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-tech-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-tech-gradient">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in backend development, product ownership, and 
            community engagement that shaped my technical and leadership skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.title}
                  className="relative animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="md:ml-20 p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-tech">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                        {experience.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-1">
                              {experience.title}
                            </h3>
                            <p className="text-lg text-primary font-semibold">
                              {experience.company}
                            </p>
                          </div>
                          <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                            {experience.type}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {experience.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};