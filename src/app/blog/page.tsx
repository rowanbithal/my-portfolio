import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold tracking-tight">
        Writing
      </h1>
      <p className="mt-3 max-w-prose text-(--color-muted)">
        Notes on things I&apos;m building, learning, and thinking about.
      </p>

      {posts.length === 0 ? (
        <p className="mt-10 text-(--color-muted)">
          No posts yet. Add an <code className="font-mono">.mdx</code> file to{" "}
          <code className="font-mono">content/posts</code> to get started.
        </p>
      ) : (
        <ul className="mt-10 flex flex-col divide-y divide-(--color-line)">
          {posts.map((post) => (
            <li key={post.slug} className="py-5">
              <Link href={`/blog/${post.slug}`} className="group block">
                <span className="font-mono text-xs text-(--color-muted)">
                  {formatDate(post.date)}
                </span>
                <h2 className="mt-1 font-serif text-xl font-medium group-hover:text-(--color-accent)">
                  {post.title}
                </h2>
                <p className="mt-1 text-(--color-muted)">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
