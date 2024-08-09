"use client";
import VideoBackground from "@/components/vidiobackground";
import Footer from "@/components/footer";
import Visualizer from "@/components/visualizer/visualizer";
import Loading from "./loading";
import { useEffect, useState } from "react";
import { TourProvider } from "@reactour/tour";
import { DesktopSteps, MobileSteps } from "@/utils/tour";

const loadAsset = (assetName: string, delay: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${assetName} loaded`);
      resolve();
    }, delay);
  });
};
const Home: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const loadAssets = async () => {
      const totalAssets = 6;
      let loadedAssets = 0;

      const updateProgress = () => {
        loadedAssets++;
        setLoadingProgress((loadedAssets / totalAssets) * 100);
      };
      await loadAsset("Video Background", 2000);
      updateProgress();

      await loadAsset("Visualizer", 1500);
      updateProgress();

      await loadAsset("Navbar", 1250);
      updateProgress();
      await loadAsset("Navbar", 1250);
      updateProgress();
      await loadAsset("Navbar", 1250);
      updateProgress();
      await loadAsset("Footer", 1000);
      updateProgress();
    };

    loadAssets();
  }, []);

  if (loadingProgress < 100) {
    return <Loading progress={loadingProgress} />;
  }

  return (
    <TourProvider
      steps={isMobile ? MobileSteps : DesktopSteps}
      styles={{
        popover: (base) => ({
          ...base,
          "--reactour-accent": "#ec4899",
          borderRadius: 10,
        }),
        maskArea: (base) => ({ ...base, rx: 10 }),
        maskWrapper: (base) => ({ ...base, color: "#ec4899" }),
        badge: (base) => ({ ...base, left: "auto", right: "-0.8125em" }),
        controls: (base) => ({ ...base, marginTop: 10 }),
        close: (base) => ({ ...base, right: "auto", left: 8, top: 8 }),
      }}
      disableDotsNavigation
      onClickClose={({ setCurrentStep, currentStep, steps, setIsOpen }) => {
        if (steps) {
          if (currentStep === steps.length - 1) {
            setIsOpen(false);
          }
          setCurrentStep((s) => (s === steps.length - 1 ? 0 : s + 1));
        }
      }}
      
    >
      <main className="relative h-screen">
        <header className="absolute w-full">
          <Visualizer isMobile={isMobile} startTour={loadingProgress === 100} />
        </header>
        <Footer />
        <VideoBackground />
      </main>
    </TourProvider>
  );
};

export default Home;
