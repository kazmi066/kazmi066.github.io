import { motion } from "framer-motion";
import { useEffect } from "react";
import { useApp } from "../context";

function SplitText({ children, ...rest }) {
    let words = children.split(' ')
    return words.map((word, i) => {
        return (
        <div
            key={children + i}
            style={{ display: 'inline-block', overflow: 'hidden' }}
        >
            <motion.div
                {...rest}
                style={{ display: 'inline-block', willChange: 'transform' }}
                custom={i}
            >
                {word + (i !== words.length - 1 ? '\u00A0' : '')}
            </motion.div>
        </div>
        )
    })
}

export default function FrontLoader({ children }) {
    const { loading, setLoading } = useApp();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [setLoading])

    return (
        <div className="relative z-40">
            {
                loading ?
                    <div className="flex items-center justify-center h-screen w-full">
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="font-bold text-4xl">
                            <SplitText
                                initial={{ y: '100%' }}
                                animate="visible"
                                variants={{
                                visible: i => ({
                                            y: 0,
                                            transition: {
                                            delay: i * 0.1
                                        }
                                    })
                                }}>Awais Abbas
                            </SplitText>    
                        </motion.div>
                    </div> :
                    children
            }
        </div>
    )
}
