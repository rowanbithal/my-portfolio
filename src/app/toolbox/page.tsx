import type { Metadata } from "next";

export const metadata: Metadata = { title: "Toolbox" };

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const SI = "https://cdn.simpleicons.org";

type Tool = { name: string; icon: string; invert?: boolean };
type Category = { name: string; tools: Tool[] };

const categories: Category[] = [
  {
    name: "Languages",
    tools: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "Python", icon: `${D}/python/python-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "C", icon: `${D}/c/c-original.svg` },
    ],
  },
  {
    name: "Frameworks & Libraries",
    tools: [
      { name: "Spring Boot", icon: `${D}/spring/spring-original.svg` },
      { name: "React", icon: `${D}/react/react-original.svg` },
      { name: "React Native", icon: `${D}/react/react-original.svg` },
    ],
  },
  {
    name: "Cloud & DevOps",
    tools: [
      { name: "Docker", icon: `${D}/docker/docker-original.svg` },
      { name: "Azure", icon: `${D}/azure/azure-original.svg` },
      { name: "GitHub Actions", icon: `${D}/github/github-original.svg`, invert: true },
    ],
  },
  {
    name: "Databases & Tools",
    tools: [
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "Git", icon: `${D}/git/git-original.svg` },
    ],
  },
  {
    name: "Apps",
    tools: [
      { name: "Claude", icon: `${SI}/anthropic` },
      { name: "Notion", icon: `${SI}/notion`, invert: true },
      { name: "Figma", icon: `${SI}/figma` },
      { name: "Arc", icon: `${SI}/arc` },
    ],
  },
];

export default function ToolboxPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="font-serif text-3xl font-semibold">Toolbox</h1>
        <p className="mt-3 leading-relaxed text-(--color-muted)">
          Languages, frameworks, and tools I reach for when building things.
        </p>
      </section>

      <div className="space-y-10">
        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-(--color-muted)">
              {category.name}
            </h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {category.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center gap-2 rounded-lg border border-line bg-surface p-4 transition-colors hover:border-(--color-accent)"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className={`h-10 w-10 transition-transform duration-200 group-hover:scale-110${tool.invert ? " dark:invert" : ""}`}
                  />
                  <span className="text-center font-mono text-xs text-(--color-muted)">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
