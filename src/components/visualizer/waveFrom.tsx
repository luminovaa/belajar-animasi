import { useRef, useEffect } from "react";
import useSize from "@/hooks/useSize";

interface AnalyzerData {
  dataArray: Uint8Array;
  analyzer: AnalyserNode;
  bufferLength: number;
}

function animateBars(
  analyser: AnalyserNode,
  canvas: HTMLCanvasElement,
  canvasCtx: CanvasRenderingContext2D,
  dataArray: Uint8Array,
  bufferLength: number
) {
  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "#000";
  const HEIGHT = canvas.height / 1.5;

  const barWidth = Math.ceil(canvas.width / bufferLength) * 1.3;
  let barHeight;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = (dataArray[i] / 255) * HEIGHT;
    const blueShade = Math.floor((dataArray[i] / 255) * 5);
    const blueHex = [
      "#ff00d2",
      "#ff4cdf",
      "#ff99ed",
      "#cc00a8",
      "#660054",
    ][blueShade];
    canvasCtx.fillStyle = blueHex;
    canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

    x += barWidth + 1;
  }
}

const WaveForm = ({ analyzerData }: { analyzerData: AnalyzerData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { dataArray, analyzer, bufferLength } = analyzerData;
  const [width, height] = useSize();

  const draw = (dataArray: Uint8Array, analyzer: AnalyserNode, bufferLength: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !analyzer) return;
    const canvasCtx = canvas.getContext("2d");

    const animate = () => {
      requestAnimationFrame(animate);
      canvas.width = canvas.width;
      canvasCtx!.translate(0, canvas.offsetHeight / 1 - 90);
      animateBars(analyzer, canvas, canvasCtx!, dataArray, bufferLength);
    };

    animate();
  };

  useEffect(() => {
    draw(dataArray, analyzer, bufferLength);
  }, [dataArray, analyzer, bufferLength]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.3;
    }
  }, [width, height]);

  return (
    <canvas className="absolute w-full opacity-50 bottom-0 flex justify-end items-center h-full max-h-[200px] -z-10"
      ref={canvasRef}
      // width={width}
      // height={height}
    />
  );
};

export default WaveForm;