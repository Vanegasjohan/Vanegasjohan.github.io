interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Python",
    description: "Desarrollo de scripts, automatización y aplicaciones backend con Python",
    icon: "python"
  },
  {
    name: "JavaScript",
    description: "Programación web interactiva con JavaScript moderno (ES6+)",
    icon: "javascript"
  },
  {
    name: "C# .NET",
    description: "Desarrollo de aplicaciones empresariales con C# y .NET",
    icon: "csharp"
  },
  {
    name: "SQL",
    description: "Diseño, optimización y administración de bases de datos SQL",
    icon: "sql"
  },
  {
    name: "React",
    description: "Creación de interfaces de usuario dinámicas con React",
    icon: "react"
  },
  {
    name: "Node.js",
    description: "Desarrollo backend y APIs con Node.js y Express",
    icon: "nodejs"
  },
  {
    name: "Astro",
    description: "Generación de sitios web modernos y rápidos con Astro",
    icon: "astro_dark"
  },
  {
    name: "Git",
    description: "Control de versiones y trabajo colaborativo con Git y GitHub",
    icon: "git"
  }
];

export default hardSkills;