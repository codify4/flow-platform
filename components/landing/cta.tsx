import { Button } from "../ui/button"

const Cta = () => {
    return (
        <div className="container mx-auto px-4 text-center">
            <div className="text-3xl font-bold mb-6">Ready to Transform Your Learning?</div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already using Flow to enhance their study experience.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Start Your Free Trial
            </Button>
        </div>
    )
}
export default Cta