const HowItWorks = () => {
    return (
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
    )
}
export default HowItWorks