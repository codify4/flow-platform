import { Card } from "@/components/ui/card"
import { BookOpen, MessageSquare, Brain } from "lucide-react"
import Image from "next/image"
import LoginCard from "./components/login-card"

const LogInPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <LoginCard />
        </div>
    )
}
export default LogInPage