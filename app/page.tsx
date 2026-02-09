import ResumeForm from "@/components/ResumeForm";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">
        AI Resume Analyzer & Job Matcher
      </h1>
      <p className="text-gray-600">
        Upload your resume and paste a job description to get AI-powered feedback.
      </p>
      <ResumeForm />
    </section>
  );
}
