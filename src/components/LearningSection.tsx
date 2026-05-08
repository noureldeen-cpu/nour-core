import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Target, Rocket } from "lucide-react";

const currentLearning = [
    {
        title: "In-depth ASP.NET Core development",
        progress: 85,
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        title: "Advanced SQL Server techniques",
        progress: 75,
        icon: <Target className="w-5 h-5" />,
    },
    {
        title: "Designing robust RESTful APIs",
        progress: 80,
        icon: <Rocket className="w-5 h-5" />,
    },
    {
        title: "Implementing Clean Code Architecture principles",
        progress: 90,
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        title: "Mastering Git & GitHub for collaborative projects",
        progress: 85,
        icon: <Target className="w-5 h-5" />,
    },
];

const futureGoals = [
    "Building impactful real-world .NET applications",
    "Gaining extensive experience in complex backend system design",
    "Actively contributing to open-source initiatives",
];

export const LearningSection = () => {
    return (
        <section id="learning" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-tech-gradient">
                        My Learning Journey
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Continuous growth and skill development in backend
                        technologies, with a focus on practical application and
                        real-world problem solving.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Current Learning */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center mr-3">
                                <BookOpen className="w-4 h-4 text-white" />
                            </div>
                            Currently Expanding Expertise
                        </h3>

                        <div className="space-y-6">
                            {currentLearning.map((item, index) => (
                                <Card
                                    key={item.title}
                                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fadeInUp"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="text-primary">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-semibold text-foreground flex-1">
                                            {item.title}
                                        </h4>
                                        <span className="text-sm text-muted-foreground font-medium">
                                            {item.progress}%
                                        </span>
                                    </div>
                                    <Progress
                                        value={item.progress}
                                        className="h-2"
                                    />
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Future Goals */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center mr-3">
                                <Rocket className="w-4 h-4 text-white" />
                            </div>
                            Future Growth & Contributions
                        </h3>

                        <div className="space-y-6">
                            {futureGoals.map((goal, index) => (
                                <Card
                                    key={goal}
                                    className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group animate-fadeInUp"
                                    style={{
                                        animationDelay: `${index * 0.15}s`,
                                    }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-8 h-8 bg-tech-gradient rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white text-sm font-bold">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <p className="text-foreground font-medium leading-relaxed">
                                            {goal}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Motivation Quote */}
                        <Card className="mt-8 p-6 bg-tech-gradient text-white">
                            <blockquote className="text-center">
                                <p className="text-lg font-medium mb-2">
                                    "Commitment to continuous learning and
                                    professional development in key areas of
                                    software engineering and product
                                    management."
                                </p>
                                <footer className="text-sm opacity-90">
                                    — Personal Learning Philosophy
                                </footer>
                            </blockquote>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
