import Image from "next/image";
import VideoBackground from "@/components/vidiobackground";
import Lagu from "@/components/lagu";
import Navbar from "@/components/navbar";
import Sakura from "@/components/sakura";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <VideoBackground />
      <Lagu/>
      <Sakura/>
    </main>
  );
}
