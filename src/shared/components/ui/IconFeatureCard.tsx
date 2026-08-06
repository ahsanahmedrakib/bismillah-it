"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import Reveal from "./Reveal";

interface IconFeatureCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number }>;
  iconSize?: number;
  className?: string;
}

const IconFeatureCard = ({
  title,
  desc,
  icon: Icon,
  iconSize = 60,
  className,
}: IconFeatureCardProps) => {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <Reveal className={`h-full ${className ?? ""}`}>
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all h-full ${
          touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
        }`}
      >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex justify-center pb-6 text-blue-600">
        <Icon size={iconSize} />
      </div>
      <h3 className="text-xl font-bold text-blue-900 text-center mb-3">
        {title}
      </h3>
      <p className="text-slate-600 text-sm text-justify">{desc}</p>
    </div>
    </Reveal>
  );
};

export default IconFeatureCard;

