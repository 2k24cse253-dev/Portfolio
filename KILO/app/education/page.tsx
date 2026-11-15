"use client";

import Link from "next/link";
import { resumeData } from "@/data/content";

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Education
      </h1>
      
      {resumeData.education.map((edu, index) => (
        <div key={index} className="mb-6 p-4 border-b pb-4 border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{edu.degree}</h3>
          <p className="text-gray-600">{edu.institution}</p>
          <p className="text-gray-600 text-sm">{edu.dates}</p>
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