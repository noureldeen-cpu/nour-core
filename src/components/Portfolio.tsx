import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { LearningSection } from "./LearningSection";
import { CertificationsSection } from "./CertificationsSection";
import { ContactSection } from "./ContactSection";

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <LearningSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-tech-gradient-subtle border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Nour El-Deen Mahmoud. Built with precision and passion for clean code.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Software Engineer • Backend (.NET) • Product Owner Trainee
          </p>
        </div>
      </footer>
    </div>
  );
};