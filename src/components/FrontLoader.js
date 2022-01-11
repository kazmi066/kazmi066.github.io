import { useEffect } from "react";
import { useApp } from "../context";

export default function FrontLoader({ children }) {
    const { loading, setLoading } = useApp();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    return (
        <>
            {
                loading ?
                    <div className="flex items-center justify-center h-screen w-full">
                        <h1 className="font-bold text-6xl animate-pulse">A.</h1>
                    </div> :
                    children
            }
        </>
    )
}
