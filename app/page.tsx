import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { BookOpen, MessageSquare, Brain, ArrowRight, FlaskConical } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Streamline Your Learning with AI
          </h1>
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
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/50">
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
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Upload Your Content",
                  description: "Simply upload your lecture recordings, PDFs, or notes.",
                },
                {
                  step: 2,
                  title: "AI Processing",
                  description: "Our AI analyzes and transforms your content into structured learning materials.",
                },
                {
                  step: 3,
                  title: "Start Learning",
                  description: "Access your enhanced materials anytime, anywhere.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Flow has completely transformed how I study. The AI-generated notes are incredible!",
                author: "Sarah K.",
                role: "Medical Student",
              },
              {
                quote: "Being able to chat with my textbooks has made understanding complex topics so much easier.",
                author: "James M.",
                role: "Engineering Student",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using Flow to enhance their study experience.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}