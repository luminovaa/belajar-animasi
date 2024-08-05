"use client";
import Navbar from "@/components/navbar";
import VideoBackground from "@/components/vidiobackground";
import Footer from "@/components/footer";
import Visualizer from "@/components/visualizer/visualizer";
import Loading from "./loading";
import { useEffect, useState } from "react";
import PaperView from "@/components/content/lagu";
import Sakura from "@/components/sakura/sakura";

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
    <main className="relative h-screen">
      
      
      <header className="absolute w-full">
        <Visualizer />
      </header>
      
      <Footer />
      <VideoBackground />
    </main>
  );
};

export default Home;
