import { FlaskConical } from "lucide-react"

const Footer = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FlaskConical className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl">Flow</span>
                        </div>
                        <p className="text-muted-foreground">
                            Empowering students with AI-powered learning tools.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Features</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Beautiful Notes</li>
                            <li>Chat with PDFs</li>
                            <li>Smart Flashcards</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
                    <p>&copy; 2024 Flow Education. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer