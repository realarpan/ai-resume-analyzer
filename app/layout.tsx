import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AI Resume Analyzer",
  description: "Analyze resumes and match jobs using AI"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
