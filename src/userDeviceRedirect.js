import { useEffect } from "react";

const useDeviceRedirect = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /iphone|ipod|android|blackberry|opera mini|windows phone|mobile/i.test(
        userAgent
      );

    if (isMobile) {
      window.location.href = "https://m.advoai.in"; // Mobile site
    } else {
      window.location.href = "https://www.advoai.in"; // Desktop site
    }
  }, []);
};

export default useDeviceRedirect;
