import { Card } from "../ui/card"

const Testimonials = () => {
    return (
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
    )
}
export default Testimonials