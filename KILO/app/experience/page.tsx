"use client";

import Link from "next/link";
import { resumeData } from "@/data/content";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Professional Experience
      </h1>
      
      {resumeData.internships.map((internship, index) => (
        <div key={index} className="mb-8 p-4 border-b pb-4 border-gray-200/50">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {internship.company} - {internship.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2">{internship.dates}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {internship.achievements.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <div className="text-center py-12">
        <Link href="/" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}