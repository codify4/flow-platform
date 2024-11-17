import { BookOpen, Brain, MessageSquare } from "lucide-react"
import { Card } from "../ui/card"

const Features = () => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                    <BookOpen className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Beautiful Notes</h3>
                    <p className="text-muted-foreground">
                        Upload lectures and instantly generate neatly formatted, concise notes.
                    </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                    <MessageSquare className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Chat with PDFs</h3>
                    <p className="text-muted-foreground">
                        Interact with uploaded PDFs to ask questions and clarify concepts.
                    </p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                    <Brain className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Smart Flashcards</h3>
                    <p className="text-muted-foreground">
                        Create effective, AI-powered flashcards from your lecture content.
                    </p>
                </Card>
            </div>
        </div>
    )
}
export default Features