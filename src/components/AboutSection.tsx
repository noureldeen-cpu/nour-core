import { Card } from "@/components/ui/card";
import techAbstract from "@/assets/tech-abstract.jpg";
import f1Precision from "@/assets/f1-precision.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-tech-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-tech-gradient">
            About Me: Precision & Clarity in Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As a dedicated backend developer, I am committed to mastering the .NET ecosystem 
            with structured thinking and clean architecture principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Clean Code Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My approach is rooted in structured thinking, ensuring clean code and logical 
                    problem-solving. I excel at simplifying complex technical concepts, making 
                    them accessible to diverse audiences.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Formula 1 Precision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My passion for Formula 1 mirrors my professional ethos: precision, control, 
                    and unwavering focus. This drives my pursuit of robust and maintainable 
                    backend architectures.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Communication & Leadership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond technical skills, I bring strong communication and product ownership 
                    capabilities, including backlog management and user story creation.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right side - Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-tech group">
              <img 
                src={techAbstract} 
                alt="Abstract tech illustration"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-tech-gradient opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-tech group">
              <img 
                src={f1Precision} 
                alt="Formula 1 precision and speed"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-tech-gradient opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  Precision, control, and unwavering focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};