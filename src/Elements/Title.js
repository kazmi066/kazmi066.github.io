import { useEffect } from "react"
import aos from 'aos';

export default function Title({ title = "" }) {

    useEffect(() => {
        aos.init({
            duration: 1000,
        });
    }, [])

    return (
        <h2 className="relative text-2xl font-bold capitalize">
            <div data-aos="fade-right" className="absolute -bottom-2 left-0 w-8 bg-red-200 border-[3.5px] border-purple-500 dark:border-green-500">
            </div>
            {title}
        </h2>
    )
}