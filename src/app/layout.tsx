import type { Metadata } from "next";
import "./globals.css";
import SidebarNav from "./components/SidebarNav";
import AnimatedBackground from "./components/AnimatedBackground";
import { GitHubIcon, LinkedInIcon } from "@/assets/icons";

export const metadata: Metadata = {
  title: "Ian Arazny | Portfolio",
  description: "Software Developer Portfolio — Ian Arazny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="mt-24 antialiased">
        <AnimatedBackground />
        <div className="content-wrapper relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:flex lg:justify-center lg:gap-16 lg:px-24 lg:py-0">
          <Sidebar />
          <main className="pt-24 lg:w-1/2 lg:py-36">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-36 lg:px-6 lg:items-left">
      <div className="">
        <h1 className="text-4xl font-bold tracking-tight text-text-highlight sm:text-5xl">
          Ian Arazny
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-text-highlight sm:text-xl">
          Computer Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-text-muted">
          I build high-quality digital experiences for the web, integrating backend services, APIs.
        </p>

        <SidebarNav />
      </div>

      <ul className="mt-8 flex items-center gap-5 w-full max-w-md" aria-label="Social media">
        <li>
          <a href="https://github.com/ianarazny" className="block text-text-muted hover:text-text-highlight transition-colors" aria-label="GitHub" target="_blank" rel="noreferrer noopener">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ian-arazny-casanovas-334438221/" className="block text-text-muted hover:text-text-highlight transition-colors" aria-label="LinkedIn" target="_blank" rel="noreferrer noopener">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </header>
  );
}
