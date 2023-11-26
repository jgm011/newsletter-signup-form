import MainImage from "./components/images/MainImage";
import MainContent from "./components/MainContent";
import SuccessContent from "./components/SuccessContent";
import MainImageMobile from "./components/images/MainImageMobile";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    const handleResizeWindow = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.innerWidth]);

  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mobileWidth = 375;

  return (
    <div className="background">
      <div className={`container ${success && 'container--success'}`}>
        {!success ? (
          <>
            {screenWidth <= mobileWidth && <MainImageMobile />}
            <MainContent
              setSuccess={setSuccess}
              email={email}
              setEmail={setEmail}
            />
            {screenWidth > mobileWidth && <MainImage />}
          </>
        ) : (
          <SuccessContent
            email={email}
            setEmail={setEmail}
            setSuccess={setSuccess}
          />
        )}
      </div>
    </div>
  );
}

export default App;
