'use client'
import { useRef } from "react";

const Lagu = () => {
    
  const audioRef = useRef(null);
    return (
        <div>
            <audio ref={audioRef} autoPlay loop>
                <source src="/Hikarunara.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default Lagu