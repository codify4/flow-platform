import { BookOpen, Brain, MessageSquare } from "lucide-react"
import { Card } from "../ui/card"

const Features = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="text-3xl font-bold text-center mb-12">Core Features</div>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                    <BookOpen className="h-12 w-12 text-primary mb-4" />
                    <p className="text-xl font-semibold mb-2">Beautiful Notes</p>
                    <p className="text-muted-foreground">
                        Upload lectures and instantly generate neatly formatted, concise notes.
                    </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                    <MessageSquare className="h-12 w-12 text-primary mb-4" />
                    <p className="text-xl font-semibold mb-2">Chat with PDFs</p>
                    <p className="text-muted-foreground">
                        Interact with uploaded PDFs to ask questions and clarify concepts.
                    </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                    <Brain className="h-12 w-12 text-primary mb-4" />
                    <p className="text-xl font-semibold mb-2">Smart Flashcards</p>
                    <p className="text-muted-foreground">
                        Create effective, AI-powered flashcards from your lecture content.
                    </p>
                </Card>
            </div>
        </div>
    )
}
export default Features