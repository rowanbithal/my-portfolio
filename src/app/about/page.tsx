import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Timeline } from "@/components/timeline";
import type { TimelineEntry } from "@/components/timeline";

export const metadata: Metadata = { title: "About" };

const timeline: TimelineEntry[] = [
    {
    period: "Oct 2026 – Present",
    title: "Software Engineer",
    org: "Accenture",
    body: "...",
  },
  {
    period: "Sep 2023 – Jul 2026",
    title: "University of Birmingham",
    org: "BSc. Computer Science",
    body: "First-Class Honours - 90% in AI 2, 87% in the Team Project module. Developed NoteSpace for the university's Music Department.",
  },
  {
    period: "Jul 2023",
    title: "DXC Technology",
    org: "Work Experience",
    body: "Mentored by a Cloud Architect and introduced to public and private cloud infrastructure. Supported the design and implementation of a multi-tier architecture on Azure, focusing on cost optimisation and security practices across VMs and storage.",
  },
  {
    period: "Sep 2021 – Jun 2023",
    title: "Radnor House Twickenham",
    org: "A-levels",
    body: "A* in Computer Science, A in Maths, A in Physics. This is where I began my passion for problem-solving and developed a broad range of skills through debating, acting as deputy head boy, and through numberous sports and clubs.",
  },
  {
    period: "Jul 2021",
    title: "Agilisys",
    org: "Internship",
    body: "Rotated across HR, Finance, Payables, FP&A, and Cloud IT departments. My first real look at how technology runs inside a large organisation, and where I picked up the basics of project management under pressure.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />

      <div className="space-y-16 pb-12">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="flex items-start justify-between gap-8">
          <div className="space-y-4">
            <h1 className="font-serif text-3xl font-semibold">About</h1>
            <p className="leading-relaxed text-(--color-muted)">
              I&apos;m a third-year Computer Science student at the University
              of Birmingham, on track for a First. I like building things
              end-to-end, from the backend API to the CI/CD pipeline that ships
              it. Most of my work has been in Java, Spring Boot, React, and
              Azure, though I&apos;ll pick up whatever the problem needs.
            </p>
            <p className="leading-relaxed text-(--color-muted)">
              Outside of code I follow F1, train Muay Thai, and occasionally
              lose at chess. If you want to talk about a project or opportunity,
              reach me at{" "}
              <a
                href="mailto:rxb545@student.bham.ac.uk"
                className="text-(--color-accent) underline underline-offset-2"
              >
                rowan@bithal.net
              </a>
              .
            </p>
          </div>

          {/* Profile photo — add /public/about/profile.jpg and swap the div for an img */}
          <div
            className="h-24 w-24 flex-none rounded-full border border-(--color-line) bg-(--color-surface)"
            aria-label="Profile photo placeholder"
          />
        </section>

        {/* ── Skills ───────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 font-serif text-xl font-semibold">
            What I work with
          </h2>
          <p className="leading-relaxed text-(--color-muted)">
            Java, Python, JavaScript and TypeScript on the language side. Spring
            Boot and React for most projects. Docker and GitHub Actions for
            deployment, Azure for cloud infrastructure. I&apos;m most
            comfortable at the intersection of backend systems and developer
            tooling, CI/CD, containerisation, and getting things into
            production reliably.
          </p>
        </section>

        {/* ── Timeline ─────────────────────────────────────── */}
        <section>
          <h2 className="mb-3 font-serif text-xl font-semibold">Timeline</h2>
          <Timeline entries={timeline} />
        </section>
      </div>
    </>
  );
}
