"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import Image from "next/image";
import Reveal from "./Reveal";

interface ImageCardProps {
  title: string;
  desc: string;
  image: string;
  imageAlt?: string;
  imageHeight?: number;
  className?: string;
}

const ImageCard = ({
  title,
  desc,
  image,
  imageAlt,
  imageHeight = 192,
  className,
}: ImageCardProps) => {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <Reveal className={`h-full ${className ?? ""}`}>
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={`bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 flex flex-col group transition-all duration-300 h-full ${
          touched
            ? "border-blue-300 shadow-xl -translate-y-1"
            : "border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
        }`}
      >
      <div className="relative w-full overflow-hidden" style={{ height: imageHeight }}>
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className={`object-cover transition-transform duration-700 ${
            touched ? "scale-105" : "group-hover:scale-105"
          }`}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-900 mb-3">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
    </Reveal>
  );
};

export default ImageCard;
