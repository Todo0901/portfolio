import { Button } from "@/components/ui/button"; 
import Image from "next/image"; 

export default function Hero() {
  return (
    <section id="Hero" className="py-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-5xl mx-auto">
      
      <div className="text-center md:text-left flex-1 order-2 md:order-1"> 
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Сайн байна уу, Намайг <br/><span className="text-blue-600">Тод-Эрхэс</span> гэдэг.
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl md:max-w-none mx-auto md:mx-0">
            Би Front-End Web Developer сурч байга Next.js болон орчин үеийн технологиор 
            хэрэглэгчдэд ээлтэй вэб бүтээх дуртай.
        </p>
      </div>

      <div className="flex-none order-1 md:order-2"> 
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <Image
            src="/my-profile.png" 
            alt="Тод-Эрхэс"
            layout="fill" 
            objectFit="cover" 
            priority 
          />
        </div>
      </div>
    </section>
  );
}