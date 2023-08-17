import { useEffect, useRef } from "react";

export default function FrontLoader({ children }) {
	const overlayRef = useRef(null);

	useEffect(() => {
		let blurValue = 20;
		let bgOpacity = 0.05;

		const blurInterval = setInterval(() => {
			blurValue -= 1;
			bgOpacity -= 0.01;
			overlayRef.current.style.backdropFilter = `blur(${blurValue}px)`;
			overlayRef.current.style.background = `rgba(255, 255, 255, ${bgOpacity})`

			if (blurValue <= 0) {
				clearInterval(blurInterval);

				overlayRef.current.style.display = 'none';
			}
		}, 100);
	}, [])

	return (
		<div>
			{children}
			<div ref={overlayRef} className="homeOverlay" />
		</div>
	)
}
