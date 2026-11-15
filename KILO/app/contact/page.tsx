"use client";

import Link from "next/link";
import { resumeData } from "@/data/content";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Contact
      </h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">
          Location: Salem, Tamil Nadu, India (Open to Relocation)<br />
          Phone: +91 9342510028<br />
          Email: varshinie.anitha@nift.ac.in<br />
          LinkedIn: linkedin.com/in/varshinie-anitha-raja-7528b8390<br />
          Behance: behance.net/varshiniear2
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