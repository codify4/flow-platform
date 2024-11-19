import DotPattern from "../ui/dot-pattern"
import { cn } from "@/lib/utils"
import Image from "next/image"
import MainButton from "../main-button"
import { ChevronRight } from "lucide-react"
import BlurFade from "../ui/blur-fade"

const Hero = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="flex">
        <div className="flex flex-row items-center justify-center gap-36">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <BlurFade delay={0.3} className="z-10">
              <div className="z-10 text-5xl md:text-7xl font-bold lg:mb-6 text-black lg:text-start">
                Study <span className="text-primary">Smarter</span>
              </div>
              <div className="z-10 text-5xl md:text-7xl font-bold mb-6 text-black lg:text-start">
                Not <span className="text-secondary">Harder</span>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} className="z-10">
              <p className="z-10 text-xl text-muted-foreground lg:text-start max-w-2xl mb-8">
                Create structured notes, master your materials, and achieve better results faster with <span className="text-primary font-semibold">Flow</span>, your AI-powered study companion. 
              </p>
            </BlurFade>
            <BlurFade delay={0.5} className="z-10">
              <div className="flex gap-4 justify-center">
                <MainButton 
                  className="px-12 py-4 text-white font-semiboldbg-primary"
                  bgClick="#3D08BF"
                  bgHover="#018650"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5 font-bold ml-1" />
                </MainButton>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={0.7} className="z-10 hidden lg:flex">
            <Image 
              src={"/hero-img.svg"}
              alt="hero"
              className="z-10 hidden lg:flex mx-auto ml-10 mb-16"
              width={500}
              height={500}
            />
          </BlurFade>
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
          "w-full h-full"
        )}
      />
    </div>
  )
}
export default Hero