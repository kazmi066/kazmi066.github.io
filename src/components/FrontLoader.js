import { useEffect } from "react";

export default function FrontLoader({ children }) {
    useEffect(() => {
        const overlay = document.querySelector('.homeOverlay');
        
        let blurValue = 20;
        let bgOpacity = 0.05;
        const blurInterval = setInterval(() => {
            blurValue -= 1;
            bgOpacity -= 0.01;
            overlay.style.backdropFilter = `blur(${blurValue}px)`;
            overlay.style.background = `rgba(255, 255, 255, ${bgOpacity})`

            if (blurValue <= 0) {
                clearInterval(blurInterval);

                overlay.style.display = 'none';
            }
        }, 100);
    }, [])

    return (
        <div>
            {children}
            <div className="homeOverlay" />
        </div>
    )
}
