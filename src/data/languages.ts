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
        level: "A2",
        description: "Nivel básico - comprensión y comunicación elemental",
        show: true
    }
];

export default languages;