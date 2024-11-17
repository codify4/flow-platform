import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="container mx-auto text-center">
        <div className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          Streamline Your Learning with AI
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transform your study experience with AI-powered notes, interactive PDF chats, and smart flashcards.
        </p>
        <div className="flex gap-4 justify-center">
        <Button size="lg" className="bg-secondary hover:bg-secondary/90 rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
            Learn More
        </Button>
        </div>
    </div>
  )
}
export default Hero