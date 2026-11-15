"use client";

import Image from "next/image";
import Link from "next/link";
import { resumeData } from "@/data/content";

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
        Selected Projects
      </h1>

      {resumeData.projects.map((project, index) => {
        const prototypeUrl =
          "prototypeUrl" in project ? project.prototypeUrl : undefined;
        const image = "image" in project ? project.image : undefined;

        return (
          <div
            key={index}
            className="mb-8 border-b border-gray-200/50 p-4 pb-4"
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {project.name}
            </h3>
            <p className="text-gray-600">{project.type}</p>
            <p className="text-gray-700">{project.description}</p>

            {image && (
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${project.name} layout`}
                  className="h-auto w-full"
                />
              </div>
            )}

            {prototypeUrl && (
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                Open Figma Prototype →
              </a>
            )}

            {"achievements" in project && project.achievements && (
              <ul className="mt-3 list-inside list-disc space-y-2 text-gray-700">
                {project.achievements.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      <div className="py-12 text-center">
        <Link
          href="/"
          className="inline-block rounded-md bg-gray-800 px-6 py-3 text-white transition-colors hover:bg-gray-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
