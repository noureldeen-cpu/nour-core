import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, MessageCircle, FileText, Code } from "lucide-react";

const contactMethods = [
  {
    title: "Email",
    description: "Get in touch for collaborations",
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:noureldeen242005@gmail.com",
    label: "noureldeen242005@gmail.com",
    color: "bg-red-500"
  },
  {
    title: "GitHub",
    description: "Check out my repositories",
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/noureldeen-cpu",
    label: "@noureldeen-cpu",
    color: "bg-gray-600"
  },
  {
    title: "LinkedIn",
    description: "Connect professionally",
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://linkedin.com/in/nour-el-deen-mahmoud/",
    label: "Nour El-Deen Mahmoud",
    color: "bg-blue-600"
  },
  {
    title: "WhatsApp",
    description: "Quick messaging",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "https://wa.me/+201143971233",
    label: "+20 114 397 1233",
    color: "bg-green-500"
  }
];

const quickActions = [
  {
    title: "Request My CV",
    description: "Download complete resume",
    icon: <FileText className="w-5 h-5" />,
    href: "https://drive.google.com/file/d/1FRK-f5tugkXdBuUcn1kb1lp2CjP4kkCo/view?usp=sharing",
    variant: "default" as const
  },
  {
    title: "Discuss a Backend Challenge",
    description: "Let's solve problems together",
    icon: <Code className="w-5 h-5" />,
    href: "mailto:noureldeen242005@gmail.com?subject=Backend Challenge Discussion",
    variant: "outline" as const
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-tech-gradient">
            Let's Connect!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss backend challenges? 
            I'm always open to new opportunities and meaningful conversations.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="group hover:shadow-tech transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 text-center"
              >
                <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {method.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.description}
                </p>
                <p className="text-xs text-primary font-medium">
                  {method.label}
                </p>
              </a>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {quickActions.map((action) => (
              <Button
                key={action.title}
                size="lg"
                variant={action.variant}
                className={
                  action.variant === "default" 
                    ? "bg-tech-gradient hover:opacity-90 text-white shadow-tech" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
                asChild
              >
                <a href={action.href} target="_blank" rel="noopener noreferrer">
                  {action.icon}
                  <span className="ml-2">{action.title}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="max-w-4xl mx-auto p-8 bg-tech-gradient text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-lg mb-6 opacity-90">
            Whether you have a challenging backend project, need technical consultation, 
            or want to discuss the latest in .NET development, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <a href="mailto:noureldeen242005@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="https://github.com/noureldeen-cpu" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};