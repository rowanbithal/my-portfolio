import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold tracking-tight">
        Projects
      </h1>
      <p className="mt-3 max-w-prose text-(--color-muted)">
        A few things I&apos;ve built. Each one taught me something I couldn&apos;t
        have learned from a tutorial.
      </p>

      <ul className="mt-10 flex flex-col gap-8">
        {projects.map((project) => (
          <li
            key={project.title}
            className="border-b border-(--color-line) pb-8 last:border-0"
          >
            <h2 className="font-serif text-xl font-medium">{project.title}</h2>
            <p className="mt-2 max-w-prose text-(--color-muted)">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-(--color-accent-soft) px-3 py-1 font-mono text-xs text-(--color-accent)"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 font-mono text-sm">
              {project.live && (
                <a
                  href={project.live}
                  className="text-(--color-accent) hover:underline"
                >
                  Live site ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  className="text-(--color-accent) hover:underline"
                >
                  Source ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
