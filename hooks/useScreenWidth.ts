import { useState, useEffect } from 'react';

// Hook
const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0
	});

	useEffect(() => {
		// Handler to call on window resize
		const handleResize = () => {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};

		window.addEventListener('resize', handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return windowSize;
};

export default useWindowSize;
