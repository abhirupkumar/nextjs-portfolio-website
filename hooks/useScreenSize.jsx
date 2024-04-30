import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 1000,
        height: 1000,
    });

    useEffect(() => {
        if (window !== 'undefined') {
            const handleResize = () => {
                setScreenSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [window]);

    return screenSize;
};

export default useScreenSize;