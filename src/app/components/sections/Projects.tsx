import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wider">Миний төслүүд</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all flex flex-col">
              <CardHeader className="p-0 relative h-52 w-full">
                <Image
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0} 
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="mb-2 text-2xl">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Вэб үзэх <ExternalLink size={18} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
