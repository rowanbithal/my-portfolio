import Link from "next/link";
import { projects } from "@/data/projects";
import { getAllPosts, formatDate } from "@/lib/posts";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const toolboxPreview = [
  { name: "Java", src: `${D}/java/java-original.svg` },
  { name: "Python", src: `${D}/python/python-original.svg` },
  { name: "TypeScript", src: `${D}/typescript/typescript-original.svg` },
  { name: "React", src: `${D}/react/react-original.svg` },
  { name: "Spring", src: `${D}/spring/spring-original.svg` },
  { name: "Docker", src: `${D}/docker/docker-original.svg` },
];

function GradientOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(ellipse at 100% 100%, rgba(14, 165, 233, 0.18) 0%, transparent 65%)",
      }}
    />
  );
}

function truncate(text: string, words: number) {
  const parts = text.split(" ");
  if (parts.length <= words) return text;
  return parts.slice(0, words).join(" ") + "…";
}

function SectionHeading({
  number,
  title,
  href,
}: {
  number: string;
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-line pb-2">
      <h2 className="flex items-baseline gap-3 font-serif text-2xl font-semibold">
        <span className="font-mono text-sm text-(--color-green)">{number}</span>
        {title}
      </h2>
      <Link
        href={href}
        className="font-mono text-xs text-(--color-muted) hover:text-(--color-accent)"
      >
        View all →
      </Link>
    </div>
  );
}

export default function Home() {
  const featured = projects.slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="pt-4">
        <p className="font-mono text-sm text-(--color-blue)">Hi, I am a</p>
        <h1 className="mt-2 font-serif text-2xl font-semibold tracking-tight sm:text-4xl">
          Graduate Computer Science student
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-(--color-muted)">
          from the{" "}
          <span className="text-(--color-ink)">University of Birmingham</span>,
          finishing with First-Class Honours. I build full-stack systems and
          cloud infrastructure. I will be joining{" "}
          <span className="text-(--color-ink)">Accenture</span> as a Software
          Engineer in October.
        </p>
      </section>

      {/* Bento navigation grid */}
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* About Me — 2 cols wide */}
          <Link
            href="/about"
            className="group relative col-span-1 flex min-h-44 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-6 sm:col-span-2"
          >
            <GradientOverlay />
            <div>
              <p className="font-mono text-xs text-(--color-muted)">
                Get to know me
              </p>
              <h2 className="mt-1 font-serif text-xl font-semibold">
                About me
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">
                CS student at Birmingham finishing with First-Class Honours.
                Joining Accenture as a Software Engineer in October. I'm most
                at home in backend systems, CI/CD, and cloud infrastructure.
              </p>
            </div>
            <span className="mt-4 font-mono text-xs text-(--color-accent)">
              Read more →
            </span>
          </Link>

          {/* Toolbox */}
          <Link
            href="/toolbox"
            className="group relative col-span-1 flex min-h-44 flex-col overflow-hidden rounded-xl border border-line bg-surface p-6"
          >
            <GradientOverlay />
            <div>
              <p className="font-mono text-xs text-(--color-muted)">
                What I use
              </p>
              <h2 className="mt-1 font-serif text-xl font-semibold">
                Toolbox
              </h2>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {toolboxPreview.map((tool, i) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-1"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="h-8 w-8 transition-transform duration-200 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  />
                  <span className="font-mono text-[10px] text-(--color-muted)">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </Link>

          {/* Projects */}
          <Link
            href="/projects"
            className="group relative col-span-1 flex min-h-44 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-6"
          >
            <GradientOverlay />
            <div>
              <p className="font-mono text-xs text-(--color-muted)">
                What I&apos;ve built
              </p>
              <h2 className="mt-1 font-serif text-xl font-semibold">
                Projects
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">
                Full-stack systems, ML models, and cloud infrastructure.
              </p>
            </div>
            <span className="mt-4 font-mono text-xs text-(--color-accent)">
              View projects →
            </span>
          </Link>

          {/* Writings — 2 cols wide */}
          <Link
            href="/blog"
            className="group relative col-span-1 flex min-h-44 flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-6 sm:col-span-2"
          >
            <GradientOverlay />
            <div>
              <p className="font-mono text-xs text-(--color-muted)">
                My thoughts
              </p>
              <h2 className="mt-1 font-serif text-xl font-semibold">
                Writings
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">
                Notes on engineering, tools, my personal life, and anything I&apos;m figuring out.
              </p>
            </div>
            <span className="mt-4 font-mono text-xs text-(--color-accent)">
              Read posts →
            </span>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <SectionHeading number="01" title="Selected work" href="/projects" />
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((project) => (
            <li
              key={project.title}
              className="flex flex-col rounded-lg border border-line bg-surface p-5"
            >
              <h3 className="font-serif text-xl font-medium">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {truncate(project.description, 15)}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs">
                <span className="text-muted">
                  {project.tech.join(" · ")}
                </span>
                <span className="flex gap-3">
                  {project.live && (
                    <a href={project.live} className="text-accent hover:underline">
                      Live ↗
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} className="text-accent hover:underline">
                      Code ↗
                    </a>
                  )}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent writing */}
      {recentPosts.length > 0 && (
        <section>
          <SectionHeading number="02" title="Recent writing" href="/blog" />
          <ul className="mt-6 flex flex-col divide-y divide-line">
            {recentPosts.map((post) => (
              <li key={post.slug} className="py-4">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <span className="font-mono text-xs text-muted">
                    {formatDate(post.date)}
                  </span>
                  <h3 className="font-serif text-lg font-medium group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
