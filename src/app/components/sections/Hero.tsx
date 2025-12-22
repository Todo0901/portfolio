import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
        <section className="py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Сайн байна уу, Намайг <br/><span className="text-blue-600">Тод-Эрхэс</span> гэдэг.
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Би Front-End Web Developer сурч байга Next.js болон орчин үеийн технологиор 
            хэрэглэгчдэд ээлтэй вэб бүтээх дуртай.
        </p>
        </section>
    </>
  );
}