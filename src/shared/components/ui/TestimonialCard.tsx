interface TestimonialCardProps {
  text: string;
  name: string;
  className?: string;
}

const TestimonialCard = ({ text, name, className }: TestimonialCardProps) => {
  return (
    <div
      className={`bg-dark-section text-gray-200 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 relative ${className ?? ""}`}
    >
      <span className="text-5xl text-blue-600 absolute top-6 left-6 font-serif">
        &quot;
      </span>
      <p className="mt-8 mb-6 text-sm leading-relaxed">{text}</p>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {name}
      </p>
    </div>
  );
};

export default TestimonialCard;
