import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "20+ Projects Completed",
  "2+ Years of Experience",
  "Board member of Google Student Developers Society",
  "META professional front-end developer certficate received",
  "Contributed as a Technical Course Reviewer 📝",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
