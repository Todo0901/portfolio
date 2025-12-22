import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/constants";

export default function Contact() {
  return (
    <>
        <section id="contact" className="py-20 border-t border-dashed">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Холбоо барих</h2>
            <p className="text-muted-foreground mb-10">
            Надтай хамтран ажиллах эсвэл асуух зүйл байвал доорх сувгуудаар холбогдоно уу.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4">
            <a 
                href={`mailto:${CONTACT.email}`} 
                className="flex items-center justify-center gap-3 h-10 rounded-xl bg-muted hover:bg-primary/10 transition-colors border"
            >
                <Mail className="text-primary" />
                <span className="font-medium">{CONTACT.email}</span>
            </a>
            <a 
                href={`tel:${CONTACT.phone}`} 
                className="flex items-center justify-center gap-3 h-10 rounded-xl bg-muted hover:bg-primary/10 transition-colors border"
            >
                <Phone className="text-primary" />
                <span className="font-medium">+976 {CONTACT.phone}</span>
            </a>
            </div>
        </div>
        </section>
    </>
  );
}