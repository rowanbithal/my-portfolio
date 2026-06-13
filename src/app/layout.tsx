import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_NAME = "Rowan Bithal";
const SITE_TAGLINE = "CS student at Birmingham, building full-stack systems and cloud infrastructure.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mono.variable}>
        <div className="mx-auto flex min-h-dvh max-w-4xl flex-col px-6">
          <Nav siteName={SITE_NAME} />
          <main className="flex-1 py-12">{children}</main>
          <Footer siteName={SITE_NAME} />
        </div>
      </body>
    </html>
  );
}
