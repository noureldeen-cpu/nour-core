import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Learning", href: "#learning" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border shadow-soft"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("#home")}
                        className="text-xl font-bold text-tech-gradient hover:opacity-80 transition-opacity"
                    >
                        Nour El-Deen
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                size="sm"
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors px-3"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>

                    {/* Tablet Navigation */}
                    <div className="hidden md:flex lg:hidden items-center space-x-0.5">
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                size="sm"
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors px-2 text-xs"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => scrollToSection(item.href)}
                                    className="justify-start text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
