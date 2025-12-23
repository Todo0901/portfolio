import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SKILLS } from "@/constants"; 
export default function Skills() {
  return (
    <section id="skill" className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Миний чадварууд</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {SKILLS.map((skill) => (
          <Badge 
            key={skill.name} 
            variant="outline" 
            className="flex items-center gap-2 text-lg py-2 px-4 hover:bg-primary hover:text-white transition-all duration-300 cursor-default group"
          >
            <div className="relative w-6 h-6">
              <Image 
                src={skill.icon} 
                alt={`${skill.name} logo`}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}