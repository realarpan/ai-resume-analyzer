"use client";

import { useState } from "react";
import { analyzeResume } from "@/app/actions/analyzeResume";
import ResultCard from "./ResultCard";

export default function ResumeForm() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await analyzeResume(resume, job);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full border p-3 rounded"
        rows={6}
        placeholder="Paste your resume text here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <textarea
        className="w-full border p-3 rounded"
        rows={6}
        placeholder="Paste job description here..."
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && <ResultCard result={result} />}
    </div>
  );
}
