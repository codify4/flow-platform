import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import DotPattern from "../ui/dot-pattern"
import { cn } from "@/lib/utils"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="flex">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="z-10 text-5xl md:text-6xl font-bold mb-6 text-primary lg:text-start">
              Streamline Your Learning with AI
            </div>
            <p className="z-10 text-xl text-muted-foreground lg:text-start max-w-2xl mb-8">
              Transform your study experience with AI-powered notes, interactive PDF chats, and smart flashcards.
            </p>

            <div className="flex gap-4 justify-center">
              <Button size="lg" className="z-10 bg-secondary hover:bg-secondary/90 rounded-full">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <Image 
            src={"/hero-img.svg"}
            alt="hero"
            className="z-10 hidden lg:flex  mx-auto mb-16"
            width={500}
            height={500}
          />
        </div>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(1400px_circle_at_center,white,transparent)]",
          "w-full h-3/4"
        )}
      />
    </div>
  )
}
export default Hero