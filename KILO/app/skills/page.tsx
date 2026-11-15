"use client";

import Link from "next/link";
import { resumeData } from "@/data/content";

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Skills
      </h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">
          I possess a diverse skill set that spans brand strategy, visual communication, design tools, and research methodologies.
        </p>
        
        <p className="mb-4">
          My expertise includes creating cohesive brand identities, developing visual narratives, and leveraging digital tools to bring concepts to life.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {Object.entries(resumeData.skills).map(([category, skills]) => (
          <div key={category} className="border p-4 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {skills.map(skill => (
                <li key={skill} className="mb-1">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="text-center py-12">
        <Link href="/" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}