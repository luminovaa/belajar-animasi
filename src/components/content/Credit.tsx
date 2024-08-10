import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Card } from "@/components/Reusable/card";
import { creditData } from "@/utils/credit";

interface CreditViewProps {
  onClose: () => void;
}


export default function CreditView({ onClose }: CreditViewProps) {
  const controls = useAnimationControls();
  useEffect(() => {
    controls.start({
      y: "-100%",
      transition: {
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);


  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card onClose={onClose}>
        <div className="text-white text-center overflow-hidden h-[34rem] font-baloo">
          <motion.div
            initial={{ y: "30%" }}
            animate={controls}
            className="py-8"
          >
            <h1 className="text-4xl font-bold mb-8 text-pink-500">Credits</h1>
            {creditData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="mb-2">
                    <span className="font-medium">{item.label}</span> 
                  </p>
                ))}
              </div>
            ))}
            <div className="mt-10">
              <p className="text-xl">Thank you for Visit this website!</p>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}