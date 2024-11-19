import MainButton from "../main-button"

const Cta = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-72 mx-auto px-4 text-center">
            <div className="flex flex-col items-start text-6xl font-bold mb-6">
                <div>
                    <span>Learn</span> 
                    <span className="text-secondary ml-4">Faster</span>
                </div>
                <div>
                    <span>with</span> 
                    <span className="text-primary ml-4">Flow</span>
                </div>
            </div>
            <MainButton 
                className="px-16 py-6 text-lg text-white font-semiboldbg-primary hover:bg-secondary rounded-full"
                bgClick="#3D08BF"
                bgHover="#018650"
            >
                Start Learning
            </MainButton>
        </div>
    )
}
export default Cta