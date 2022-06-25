import { motion } from "framer-motion";
import { useEffect } from "react";
import { useApp } from "../context";

export default function FrontLoader({ children }) {
    const { loading, setLoading } = useApp();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [setLoading])

    return (
        <>
            {
                loading ?
                    <div className="flex items-center justify-center h-screen w-full">
                        <motion.h1
                            animate={{ opacity: [.5, .7, .2, 1] }}
                            transition={{ duration: 3 }}
                            className="font-bold text-6xl">A.</motion.h1>
                    </div> :
                    children
            }
        </>
    )
}
