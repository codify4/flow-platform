import Link from "next/link"
import MainButton from "../main-button"

const Cta = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-32 lg:gap-72 mx-auto px-4 text-center">
            <div className="flex flex-col items-center md:items-start text-5xl md:text-6xl font-bold mb-6">
                <div>
                    <span>Study</span> 
                    <span className="text-secondary ml-4">Faster</span>
                </div>
                <div>
                    <span>with</span> 
                    <span className="text-primary ml-4">Flow</span>
                </div>
            </div>
            <Link href="/login">
                <MainButton 
                    className="px-[70px] py-6 text-lg text-white font-semiboldbg-primary hover:bg-secondary rounded-full"
                    bgClick="#3D08BF"
                    bgHover="#018650"
                >
                    Start Learning
                </MainButton>
            </Link>
        </div>
    )
}
export default Cta