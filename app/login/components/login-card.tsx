import { Card } from "@/components/ui/card"
import { BookOpen, MessageSquare, Brain } from "lucide-react"
import Image from "next/image"
import LoginButton from "./login-buttons"

const LoginCard = () => {
    return (
        <Card className="w-11/12 md:w-3/4 xl:w-1/2 flex flex-col lg:flex-row justify-center items-center px-10 py-12 shadow-lg gap-10">
            <Image src='hero-img.svg' alt='login' width={400} height={400} />
            <div className="flex flex-col w-full justify-between gap-10 h-full">
                <h1 className="text-4xl font-bold">Start learning with <span className="text-primary">Flow</span></h1>
                <div className="flex flex-col justify-center items-start">
                    <div className="text-xl font-normal">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <BookOpen size={20}/>
                            <span className="ml-2">Create structured notes</span>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <MessageSquare size={20}/>
                            <span className="ml-2">Chat with PDFs</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Brain size={20}/>
                            <span className="ml-2">Generate flashcards</span>
                        </div>
                    </div>
                </div>
                <LoginButton />
            </div>
        </Card>
    )
}
export default LoginCard