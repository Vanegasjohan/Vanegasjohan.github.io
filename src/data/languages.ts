interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "Lengua materna",
        show: true
    },
    {
        name: "English",
        level: "B1",
        description: "Nivel intermedio - comprensión y comunicación básica",
        show: true
    }
];

export default languages;