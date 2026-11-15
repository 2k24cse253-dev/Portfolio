"use client";

import Link from "next/link";
import { resumeData } from "@/data/content";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        About Me
      </h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">
          I am a passionate brand stylist and fashion strategist with a Master of Design from NIFT Kangra. My work focuses on creating meaningful brand experiences through thoughtful styling, visual storytelling, and user-centered research.
        </p>
        
        <p className="mb-4">
          My journey in fashion began with a deep appreciation for cultural narratives and evolved into a strategic approach to brand development. I combine traditional craftsmanship with modern digital techniques to create compelling visual identities.
        </p>
        
        <p className="mb-4">
          I specialize in fashion styling, brand storytelling, visual direction, and campaign development. My approach combines creative problem-solving with user-centered research to deliver impactful results.
        </p>
        
        <p className="mb-4">
          I'm currently seeking opportunities to further develop my skills through internships and collaborative projects in the fashion and brand strategy space.
        </p>
      </div>
      
      <div className="text-center py-12">
        <Link href="/" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}