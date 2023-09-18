"use client";

import Image from "next/image";
import { useWindowSize } from "@/hooks";

const Background = ({ src, alt, height, width }) => {
  const windowSize = useWindowSize();

  return (
    <main className="min-w-full relative">
      <Image
        src={src}
        alt={alt}
        width={windowSize.width}
        height={(windowSize.width * height) / width}
      />
    </main>
  );
};

export default Background;
