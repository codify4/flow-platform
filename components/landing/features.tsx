import { BookOpen, Brain, MessageSquare } from "lucide-react"
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";

const features = [
    {
        Icon: BookOpen,
        name: "Beautiful Notes",
        description: "Upload lectures and instantly generate neatly formatted, concise notes.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1 flex items-center",
        background: (
            <Image src="notes-upload.svg" alt="notes" width={400} height={400} className="px-4 py-6" />
        ),
        delay: 0.5,
    },
    {
        Icon: Brain,
        name: "Smart Flashcards",
        description: "Generate flashcards instantly for any study topic you want.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Image src="notes.svg" alt="notes" width={500} height={400} className="p-4"/>
        ),
        delay: 0.7,
    },
    {
        Icon: MessageSquare,
        name: "Chat with PDFs",
        description: "Interact with uploaded PDFs to ask questions and clarify concepts.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1 flex items-center",
        background: (
            <Image src="chat-pdf.svg" alt="notes" width={300} height={400} className="p-4" />
        ),
        delay: 0.9,
    },
];

function Features() {
    return (
        <BlurFade delay={0.3} inView className="w-11/12 md:w-full flex flex-col justify-center items-center">
            <div className="text-4xl font-bold text-center mb-12">Features</div>
            <BentoGrid className="grid grid-cols-1 lg:grid-cols-3 grid-rows-4 sm:grid-rows-1 gap-4 my-10 w-full md:w-3/4 lg:w-11/12 xl:w-10/12 2xl:w-9/12">
                {features.map((feature, idx) => (
                    <BlurFade key={idx} delay={feature.delay} inView className="h-[400px] w-full gap-6">
                        <BentoCard {...feature} />
                    </BlurFade>
                ))}
            </BentoGrid>
        </BlurFade>
    );
}


export default Features