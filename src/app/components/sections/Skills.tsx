import { Badge } from "@/components/ui/badge";

const skills = ["React", "CSS", "HTML", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"];

export default function Skills() {
  return (
        <>
        <section className="py-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Миний чадварууд</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-lg py-2 px-4 hover:bg-primary hover:text-white transition-colors cursor-default">
                {skill}
            </Badge>
            ))}
        </div>
        </section>
    </>
  );
}