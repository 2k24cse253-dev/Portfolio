"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { resumeData } from "@/data/content";
import Hero3D from "@/components/Hero3D";

const sectionNames = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const;

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [show3D, setShow3D] = useState(true);
  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let index = -1;
      const heightThreshold = window.innerHeight * 0.3;

      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect().top;
        if (rect < heightThreshold && rect > -heightThreshold) {
          index = i;
        }
      }

      if (index !== -1) {
        setCurrentSection(sectionNames[index] ?? "home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div className="min-h-screen">
      {isHome && (
        <div className="relative">
          <Hero3D />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 px-4 py-3 text-center text-xl font-bold text-white shadow-lg backdrop-blur-sm sm:text-2xl">
              {show3D
                ? "Varshinie A. R."
                : "Brand Stylist | Brand Strategist | Fashion Stylist"}
            </div>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-300 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex flex-wrap justify-between gap-2 px-4 py-3">
          <Link
            href="/"
            className="text-gray-800 transition-colors hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 transition-colors hover:text-gray-600"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="text-gray-800 transition-colors hover:text-gray-600"
          >
            Experience
          </Link>
          <Link
            href="/work"
            className="text-gray-800 transition-colors hover:text-gray-600"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="text-gray-800 transition-colors hover:text-gray-600"
          >
            Skills
          </Link>
          <Link
            href="/education"
            className="text-gray-800 transition-colors hover:text-gray-600"
          >
            Education
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 transition-colors hover:text-gray-600"
          >
            Contact
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {isHome && (
          <section id={currentSection} className="mx-auto max-w-4xl">
            {currentSection === "home" && (
              <div className="py-12 text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-800">
                  Brand Stylist | Brand Strategist | Fashion Stylist
                </h1>
                <p className="mb-8 text-gray-600">{resumeData.summary}</p>
                <Link
                  href="/about"
                  className="inline-block rounded-md bg-gray-800 px-6 py-3 text-white transition-colors hover:bg-gray-700"
                >
                  View My Profile
                </Link>
              </div>
            )}

            {currentSection === "about" && (
              <div className="prose prose-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  About Me
                </h2>
                <p className="mb-4 text-gray-700">
                  I am a passionate brand stylist and fashion strategist with a
                  Master of Design from NIFT Kangra. My work focuses on creating
                  meaningful brand experiences through thoughtful styling, visual
                  storytelling, and user-centered research.
                </p>
                <p className="mb-4 text-gray-700">
                  My journey in fashion began with a deep appreciation for
                  cultural narratives and evolved into a strategic approach to
                  brand development. I combine traditional craftsmanship with
                  modern digital techniques to create compelling visual
                  identities.
                </p>
                <p className="mb-4 text-gray-700">
                  I specialize in fashion styling, brand storytelling, visual
                  direction, and campaign development. My approach combines
                  creative problem-solving with user-centered research to deliver
                  impactful results.
                </p>
                <p className="mb-4 text-gray-700">
                  I&apos;m currently seeking opportunities to further develop my
                  skills through internships and collaborative projects in the
                  fashion and brand strategy space.
                </p>
              </div>
            )}

            {currentSection === "experience" && (
              <div className="prose prose-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  Professional Experience
                </h2>
                {resumeData.internships.map((internship, index) => (
                  <div
                    key={index}
                    className="mb-8 border-b border-gray-200/50 p-4 pb-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {internship.company} - {internship.title}
                    </h3>
                    <p className="mb-2 text-sm text-gray-600">
                      {internship.dates}
                    </p>
                    <ul className="list-inside list-disc space-y-2 text-gray-700">
                      {internship.achievements.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {currentSection === "projects" && (
              <div className="prose prose-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  Selected Projects
                </h2>
                {resumeData.projects.map((project, index) => (
                  <div
                    key={index}
                    className="mb-8 border-b border-gray-200/50 p-4 pb-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-600">{project.type}</p>
                    <p className="text-gray-700">{project.description}</p>
                    {"prototypeUrl" in project && project.prototypeUrl && (
                      <a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-medium text-blue-600 hover:underline"
                      >
                        Open Figma prototype →
                      </a>
                    )}
                    {project.achievements && (
                      <ul className="list-inside list-disc space-y-2 text-gray-700">
                        {project.achievements.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {currentSection === "skills" && (
              <div className="prose prose-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Skills</h2>
                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {Object.entries(resumeData.skills).map(
                    ([category, skills]) => (
                      <div
                        key={category}
                        className="rounded-lg border bg-gray-50 p-4"
                      >
                        <h3 className="mb-2 text-lg font-semibold text-gray-800">
                          {category}
                        </h3>
                        <ul className="list-inside list-disc space-y-1 text-gray-700">
                          {skills.map((skill) => (
                            <li key={skill} className="mb-1">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {currentSection === "education" && (
              <div className="prose prose-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  Education
                </h2>
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="mb-6 border-b border-gray-200/50 p-4 pb-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{edu.dates}</p>
                  </div>
                ))}
              </div>
            )}

            {currentSection === "contact" && (
              <div className="prose prose-lg">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  Contact
                </h2>
                <p className="mb-4 text-gray-700">
                  Location: {resumeData.contact.location}
                  <br />
                  Phone: {resumeData.contact.phone}
                  <br />
                  Email: {resumeData.contact.email}
                  <br />
                  LinkedIn: {resumeData.contact.linkedin}
                  <br />
                  Behance: {resumeData.contact.behance}
                </p>
              </div>
            )}
          </section>
        )}
        {children}
      </main>
    </div>
  );
}
