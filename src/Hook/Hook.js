import { useState, useEffect, useRef } from "react";

const useSpacing = (baseWidth = 1232) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize(); // Initialize with the current screen width

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dynamicPaddingLeft = Math.max(0, (screenWidth - baseWidth) / 2);

  return { screenWidth, dynamicPaddingLeft };
};

export default useSpacing;

export const useScrollVisibility = (setShowGenerateButton) => {
  const generateButtonRef = useRef(null);
  const checkVisibility = () => {
    if (generateButtonRef.current) {
      const rect = generateButtonRef.current.getBoundingClientRect();
      const navbarHeight = 70; // Adjust according to your navbar's actual height
      const offset = navbarHeight + 10; // Add extra margin for better control
      const isInView =
        rect.top >= offset && rect.bottom <= window.innerHeight - offset;
      setShowGenerateButton(!isInView); // Show button only when out of view
    }
  };

  useEffect(() => {
    // Check visibility on initial render (before scrolling)
    checkVisibility();

    // Handle scrolling event
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowGenerateButton]);

  return generateButtonRef;
};
