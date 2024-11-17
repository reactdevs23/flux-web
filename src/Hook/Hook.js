import { useState, useEffect } from "react";

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
