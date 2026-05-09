import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, MessageCircle } from "lucide-react";
import Terminal from "./Terminal";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-16">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-tech-blue rounded-full blur-3xl animate-float" />
                <div
                    className="absolute top-3/4 right-1/4 w-24 h-24 bg-tech-purple rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-primary rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "4s" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 xl:gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="text-center lg:text-left animate-fadeInUp max-w-2xl mx-auto lg:mx-0">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 lg:mb-6 text-tech-gradient leading-tight">
                            Nour El-Deen Mahmoud
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-2">
                            Software Engineer
                        </p>
                        <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8">
                            Backend (.NET) • Product Owner Trainee
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-foreground/80 mb-8 lg:mb-12 max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
                            Precision & clarity in code. Committed to mastering
                            the .NET ecosystem with structured thinking and
                            clean architecture principles.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 lg:mb-12">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-tech-gradient hover:opacity-90 text-white shadow-tech animate-glow"
                                asChild
                            >
                                <a
                                    href="https://github.com/noureldeen-cpu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View GitHub
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                asChild
                            >
                                <a href="mailto:noureldeen242005@gmail.com">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Contact Me
                                </a>
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://linkedin.com/in/nour-el-deen-mahmoud/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a
                                    href="https://wa.me/+201143971233"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right side - Portrait + Terminal */}
                    <div
                        className="flex justify-center lg:justify-end animate-fadeInUp"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="relative w-full max-w-md sm:max-w-lg xl:max-w-xl flex flex-col items-center gap-3 sm:gap-4">
                            <div className="relative">
                                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-tech-gradient rounded-full opacity-60 animate-float z-20 pointer-events-none" />
                                <div
                                    className="absolute -bottom-1 -left-2 lg:-bottom-2 lg:-left-3 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-tech-purple rounded-full opacity-40 animate-float z-20 pointer-events-none"
                                    style={{ animationDelay: "1s" }}
                                />

                                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-tech z-10">
                                    <img
                                        src="/lovable-uploads/21647177-4a3a-4ea6-a651-f32a8022ce76.png"
                                        alt="Nour El-Deen Mahmoud - Software Engineer"
                                        className="w-full h-full object-cover object-[center_34%] scale-105"
                                    />
                                    <div className="absolute inset-0 bg-tech-gradient opacity-10" />
                                </div>
                            </div>

                            <div className="w-full">
                                <Terminal className="w-full shadow-tech text-xs sm:text-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
};
