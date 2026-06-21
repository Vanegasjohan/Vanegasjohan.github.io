interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Tecnólogo en Análisis y Desarrollo de Software",
        startDate: "2023-01-01",
        endDate: "2025-01-01",
        school: "SENA",
        location: "Colombia",
        description: "Formación integral en análisis, diseño, desarrollo e implementación de soluciones de software.",
        currentUni: false,
    },
    {
        title: "Técnico en Sistemas",
        startDate: "2020-01-01",
        endDate: "2021-12-09",
        school: "SENA",
        location: "Colombia",
        description: "Formación técnica en mantenimiento de equipos, redes y soporte técnico.",
        currentUni: false,
    },
    {
        title: "Bases de Datos: Generalidades y Sistemas de Gestión",
        startDate: "2025-01-01",
        endDate: "2025-01-01",
        school: "SENA",
        location: "Colombia",
        description: "Curso complementario de 40 horas sobre fundamentos de bases de datos y sistemas de gestión.",
        currentUni: false,
    },
];

export default education;