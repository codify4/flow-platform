'use client'

import { cn } from "@/lib/utils";
import { Button } from "./ui/button"
import { motion } from "framer-motion";

type ButtonProps = {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
    bgHover?: string;
    bgClick?: string;
}

const MainButton = ({ className, children, onClick, variant = "default", bgClick, bgHover }: ButtonProps) => {
    return (
        <Button 
            variant={variant}
            onClick={onClick}
            asChild
        >
            <motion.button
                className={cn("z-10 rounded-full shadow-lg", className)}
                whileHover={{ scale: 1.05, backgroundColor: bgHover }}
                whileTap={{ scale: 0.95, backgroundColor: bgClick }}
                transition={{ 
                    scale: { type: 'spring', stiffness: 400, damping: 10 },
                    backgroundColor: { duration: 0 }
                }}
            >
                {children}
            </motion.button>
        </Button>
    )
}
export default MainButton