"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { Check, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

interface ListCardProps {
  title: string;
  items: string[];
  variant?: "check" | "chevron";
  className?: string;
}

const ListCard = ({
  title,
  items,
  variant = "check",
  className,
}: ListCardProps) => {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <Reveal className={`h-full ${className ?? ""}`}>
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={`relative border-2 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all h-full ${
          touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
        }`}
      >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      {items.map((item, j) => (
        <div key={j} className="flex items-start mb-3">
          {variant === "check" ? (
            <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-500 shrink-0" />
          ) : (
            <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-500 shrink-0" />
          )}
          <span className="text-slate-600 text-sm">{item}</span>
        </div>
      ))}
    </div>
    </Reveal>
  );
};

export default ListCard;
