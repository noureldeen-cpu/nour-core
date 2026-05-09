import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

interface CommandOutput {
    type:
        | "command"
        | "output"
        | "error"
        | "success"
        | "info"
        | "path"
        | "ascii";
    text: string;
    isTyping?: boolean;
}

interface TerminalProps {
    className?: string;
    username?: string;
    hostname?: string;
}

const ASCII_ART = `
███╗   ██╗ ██████╗ ██╗   ██╗██████╗      ██████╗ ██████╗ ██████╗ ███████╗
████╗  ██║██╔═══██╗██║   ██║██╔══██╗    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
██╔██╗ ██║██║   ██║██║   ██║██████╔╝    ██║     ██║   ██║██████╔╝█████╗  
██║╚██╗██║██║   ██║██║   ██║██╔══██╗    ██║     ██║   ██║██╔══██╗██╔══╝  
██║ ╚████║╚██████╔╝╚██████╔╝██║  ██║    ╚██████╗╚██████╔╝██║  ██║███████╗
╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
`.trim();

const commandMeta = [
    { name: "neofetch", description: "Show a quick portfolio overview" },
    { name: "whoami", description: "Show a short introduction" },
    { name: "about", description: "Read the about summary" },
    { name: "skills", description: "List the technical toolkit" },
    { name: "experience", description: "View current experience" },
    { name: "learning", description: "See current learning goals" },
    { name: "certifications", description: "View certifications and growth" },
    { name: "contact", description: "See contact details" },
    { name: "socials", description: "Open social links" },
    { name: "clear", description: "Clear the terminal output" },
] as const;

const buildHelpOutput = (): CommandOutput[] => [
    { type: "info", text: "Available commands:" },
    ...commandMeta.map((command) => ({
        type: "output" as const,
        text: `  ${command.name.padEnd(14)} - ${command.description}`,
    })),
    {
        type: "output",
        text: "Tip: use Tab to autocomplete and Up/Down for history.",
    },
];

const COMMANDS: Record<string, CommandOutput[]> = {
    help: buildHelpOutput(),
    neofetch: [
        { type: "ascii", text: ASCII_ART },
        { type: "success", text: "─────────────────────────────────" },
        { type: "info", text: "Name: Nour El-Deen Mahmoud" },
        { type: "info", text: "Role: Software Engineer" },
        { type: "info", text: "Focus: Backend (.NET) • Product Ownership" },
        { type: "info", text: "Location: Alexandria, Egypt" },
        { type: "info", text: "Current stack: C#, ASP.NET Core, SQL Server" },
        { type: "info", text: "Status: Building clean, structured software" },
        {
            type: "success",
            text: "Type 'help' to explore the portfolio terminal.",
        },
    ],
    whoami: [
        { type: "success", text: "Nour El-Deen Mahmoud" },
        {
            type: "output",
            text: "Software Engineer focused on backend development and clean architecture.",
        },
        {
            type: "output",
            text: "Product Owner trainee with a strong interest in structure, clarity, and communication.",
        },
    ],
    about: [
        { type: "success", text: "About Me: Precision & Clarity in Code" },
        {
            type: "output",
            text: "I am committed to mastering the .NET ecosystem with structured thinking and clean architecture principles.",
        },
        {
            type: "output",
            text: "My approach is rooted in clean code, logical problem-solving, and making complex technical ideas easy to understand.",
        },
        {
            type: "output",
            text: "I also bring product ownership skills such as backlog management and user story creation.",
        },
    ],
    skills: [
        { type: "success", text: "Technical Toolkit" },
        { type: "info", text: "Programming Languages" },
        { type: "output", text: "  C#, JavaScript" },
        { type: "info", text: "Frontend & Web" },
        { type: "output", text: "  HTML, CSS" },
        { type: "info", text: "Backend Expertise" },
        {
            type: "output",
            text: "  ASP.NET Core, REST APIs, Clean Architecture",
        },
        { type: "info", text: "Database" },
        { type: "output", text: "  SQL Server" },
        { type: "info", text: "DevOps & Tools" },
        { type: "output", text: "  Git, GitHub, Docker, GitHub Actions" },
    ],
    experience: [
        { type: "success", text: "Professional Experience" },
        { type: "info", text: "Product Owner Trainee - Sana Soft" },
        {
            type: "output",
            text: "  Backlog management, user story creation, feature prioritization, stakeholder alignment.",
        },
        {
            type: "info",
            text: "Backend Developer - Digital Egypt Pioneers Initiative",
        },
        {
            type: "output",
            text: "  .NET development, clean architecture, API development, and database design.",
        },
        { type: "info", text: "Community & Volunteering" },
        {
            type: "output",
            text: "  Technical mentoring, team collaboration, knowledge sharing, and community building.",
        },
    ],
    learning: [
        { type: "success", text: "My Learning Journey" },
        { type: "info", text: "Currently expanding expertise:" },
        { type: "output", text: "  - In-depth ASP.NET Core development" },
        { type: "output", text: "  - Advanced SQL Server techniques" },
        { type: "output", text: "  - Designing robust RESTful APIs" },
        {
            type: "output",
            text: "  - Implementing Clean Code Architecture principles",
        },
        {
            type: "output",
            text: "  - Mastering Git & GitHub for collaborative work",
        },
        { type: "info", text: "Future growth:" },
        {
            type: "output",
            text: "  - Build impactful real-world .NET applications",
        },
        {
            type: "output",
            text: "  - Deepen complex backend system design skills",
        },
        { type: "output", text: "  - Contribute to open-source initiatives" },
    ],
    certifications: [
        { type: "success", text: "Certifications & Growth" },
        { type: "info", text: "Clean Code - Mahra Tech" },
        { type: "output", text: "  Status: Completed" },
        { type: "info", text: "Data Science - Academic Program" },
        { type: "output", text: "  Status: In Progress" },
        { type: "info", text: "Product Ownership - Sana Soft Training" },
        { type: "output", text: "  Status: Completed" },
    ],
    contact: [
        { type: "success", text: "Get in touch" },
        { type: "info", text: "Email: noureldeen242005@gmail.com" },
        { type: "info", text: "GitHub: github.com/noureldeen-cpu" },
        {
            type: "info",
            text: "LinkedIn: linkedin.com/in/nour-el-deen-mahmoud",
        },
        { type: "info", text: "WhatsApp: +20 114 397 1233" },
        { type: "path", text: "Open the contact section for direct links." },
    ],
    socials: [
        { type: "success", text: "Social Links" },
        {
            type: "output",
            text: "GitHub   -> https://github.com/noureldeen-cpu",
        },
        {
            type: "output",
            text: "LinkedIn -> https://linkedin.com/in/nour-el-deen-mahmoud",
        },
        { type: "output", text: "WhatsApp -> https://wa.me/+201143971233" },
    ],
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Terminal = ({
    className = "",
    username = "noureldeen",
    hostname = "portfolio",
}: TerminalProps) => {
    const [history, setHistory] = useState<CommandOutput[]>([
        { type: "success", text: "Loading terminal ... Please wait." },
    ]);
    const [input, setInput] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [showCursor, setShowCursor] = useState(true);
    const [typingText, setTypingText] = useState<Record<number, string>>({});
    const [isTyping, setIsTyping] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const typingRef = useRef(false);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);

        return () => window.clearInterval(interval);
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history, typingText]);

    const typeOutput = useCallback(
        async (outputs: CommandOutput[], baseHistory: CommandOutput[]) => {
            typingRef.current = true;
            let currentHistory = [...baseHistory];

            for (const output of outputs) {
                if (!typingRef.current) {
                    break;
                }

                const lineIndex = currentHistory.length;
                currentHistory = [
                    ...currentHistory,
                    { ...output, text: "", isTyping: true },
                ];
                setHistory(currentHistory);

                const delay = output.type === "ascii" ? 1 : 14;

                for (let index = 0; index <= output.text.length; index += 1) {
                    if (!typingRef.current) {
                        break;
                    }

                    setTypingText((previous) => ({
                        ...previous,
                        [lineIndex]: output.text.slice(0, index),
                    }));
                    await sleep(delay);
                }

                currentHistory = currentHistory.map((item, index) =>
                    index === lineIndex ? { ...output, isTyping: false } : item,
                );
                setHistory(currentHistory);
                setTypingText((previous) => {
                    const next = { ...previous };
                    delete next[lineIndex];
                    return next;
                });

                await sleep(30);
            }

            typingRef.current = false;
        },
        [],
    );

    useEffect(() => {
        let cancelled = false;

        const runIntro = async () => {
            const command = "neofetch";

            for (let index = 1; index <= command.length; index += 1) {
                if (cancelled) {
                    return;
                }

                setInput(command.slice(0, index));
                await sleep(120);
            }

            await sleep(300);

            if (cancelled) {
                return;
            }

            const baseHistory: CommandOutput[] = [
                { type: "success", text: "Loading terminal ... Please wait." },
                { type: "command", text: command },
            ];

            setHistory(baseHistory);
            setInput("");
            await typeOutput(COMMANDS[command], baseHistory);

            if (!cancelled) {
                setIsTyping(false);
            }
        };

        runIntro();

        return () => {
            cancelled = true;
            typingRef.current = false;
        };
    }, [typeOutput]);

    const handleCommand = async (command: string) => {
        const trimmedCommand = command.trim().toLowerCase();

        if (trimmedCommand === "") {
            return;
        }

        const nextHistory: CommandOutput[] = [
            ...history,
            { type: "command", text: command },
        ];

        if (trimmedCommand === "clear") {
            setHistory([
                {
                    type: "success",
                    text: "Terminal cleared. Type 'help' for commands.",
                },
            ]);
            setCommandHistory((previous) => [...previous, trimmedCommand]);
            setHistoryIndex(-1);
            return;
        }

        const output = COMMANDS[trimmedCommand];

        if (output) {
            setHistory(nextHistory);
            setIsTyping(true);
            await typeOutput(output, nextHistory);
            setIsTyping(false);
        } else {
            const errorOutput: CommandOutput[] = [
                { type: "error", text: `Command not found: ${command}` },
                {
                    type: "output",
                    text: "Type 'help' to see available commands.",
                },
            ];

            setHistory(nextHistory);
            setIsTyping(true);
            await typeOutput(errorOutput, nextHistory);
            setIsTyping(false);
        }

        setCommandHistory((previous) => [...previous, trimmedCommand]);
        setHistoryIndex(-1);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleCommand(input);
            setInput("");
            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();

            if (commandHistory.length > 0) {
                const nextIndex =
                    historyIndex < commandHistory.length - 1
                        ? historyIndex + 1
                        : historyIndex;
                setHistoryIndex(nextIndex);
                setInput(
                    commandHistory[commandHistory.length - 1 - nextIndex] || "",
                );
            }

            return;
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();

            if (historyIndex > 0) {
                const nextIndex = historyIndex - 1;
                setHistoryIndex(nextIndex);
                setInput(
                    commandHistory[commandHistory.length - 1 - nextIndex] || "",
                );
            } else {
                setHistoryIndex(-1);
                setInput("");
            }

            return;
        }

        if (event.key === "Tab") {
            event.preventDefault();

            const matches = Object.keys(COMMANDS).filter((command) =>
                command.startsWith(input.toLowerCase()),
            );

            if (matches.length === 1) {
                setInput(matches[0]);
            }
        }
    };

    const getColorClass = (command: CommandOutput) => {
        switch (command.type) {
            case "command":
                return "text-[hsl(var(--terminal-text))]";
            case "output":
                return "text-muted-foreground";
            case "error":
                return "text-destructive";
            case "success":
                return "text-primary";
            case "info":
                return "text-[hsl(200_80%_60%)]";
            case "path":
                return "text-[hsl(280_80%_70%)]";
            case "ascii":
                return "text-primary text-xs leading-none";
            default:
                return "text-[hsl(var(--terminal-text))]";
        }
    };

    const renderPrompt = (isInput = false) => (
        <span className="flex-shrink-0">
            <span className="text-primary font-bold">{username}</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-[hsl(200_80%_60%)]">{hostname}</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-[hsl(280_80%_70%)]">~</span>
            <span className="text-foreground font-bold">$</span>
            {isInput ? null : <span className="ml-2" />}
        </span>
    );

    return (
        <div
            className={`bg-[hsl(var(--terminal-bg))] rounded-xl border border-border/50 overflow-hidden font-mono text-sm shadow-2xl ${className}`}
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border/50 backdrop-blur-sm">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[hsl(0_70%_55%)] shadow-[0_0_8px_hsl(0_70%_55%/0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(45_90%_55%)] shadow-[0_0_8px_hsl(45_90%_55%/0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <span className="text-muted-foreground text-xs font-medium tracking-wide">
                        {username}@{hostname}: ~ (interactive)
                    </span>
                </div>
                <div className="w-16" />
            </div>

            <div
                ref={terminalRef}
                className="p-4 space-y-1 min-h-[320px] max-h-[420px] overflow-y-auto bg-gradient-to-b from-transparent to-card/20 cursor-text"
            >
                {history.map((command, index) => (
                    <div
                        key={`${command.type}-${index}`}
                        className={`flex ${command.type === "ascii" ? "justify-center" : ""}`}
                    >
                        {command.type === "command" && renderPrompt()}
                        <span
                            className={`${getColorClass(command)} ${command.type === "ascii" ? "whitespace-pre font-bold" : ""}`}
                        >
                            {command.isTyping
                                ? typingText[index] || ""
                                : command.text}
                            {command.isTyping && (
                                <span
                                    className={`inline-block w-2 h-4 bg-primary ml-0.5 ${showCursor ? "opacity-100" : "opacity-0"}`}
                                />
                            )}
                        </span>
                    </div>
                ))}

                <div className="flex items-center">
                    {renderPrompt(true)}
                    <div className="flex-1 relative ml-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full bg-transparent outline-none text-[hsl(var(--terminal-text))] caret-transparent"
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                            disabled={isTyping}
                        />
                        <span
                            className="absolute top-0 left-0 pointer-events-none text-[hsl(var(--terminal-text))]"
                            style={{ left: `${input.length}ch` }}
                        >
                            <span
                                className={`inline-block w-2.5 h-5 bg-primary transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`}
                            />
                        </span>
                    </div>
                </div>
            </div>

            <div className="px-4 py-2 bg-card/30 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground">
                <span>zsh • tab to autocomplete • ↑↓ history</span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_6px_#FFA500] animate-pulse" />
                    interactive
                </span>
            </div>
        </div>
    );
};

export default Terminal;
