"use client";
import useAwardsStore from "@/store/awardsStore";
import { motion } from "framer-motion";
import { awardsHover } from "@/public/data";
import { useEffect, useState } from "react";
import Image from "next/image";
function TriggerImage() {
  const { isHover, idHover } = useAwardsStore();
  const [content, setContent] = useState({});
  useEffect(() => {
    const content = awardsHover.find((item, i) => i === idHover).content;
    setContent(content);
  }, [idHover]);

  return (
    <>
      {content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHover || idHover !== null ? 1 : 0 }}
          className="w-full h-full flex flex-col"
        >
          <div className="w-full min-h-[300px] relative">
            <Image
              src={content.image ? content.image : "/category/lanscape/1.jpg"}
              alt="content"
              fill
              className="object-cover"
            />
          </div>
          <p>{content.desc}</p>
        </motion.div>
      )}
    </>
  );
}

export default TriggerImage;
