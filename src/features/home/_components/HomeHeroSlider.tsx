import { slides } from "@/features/home/data/homeData";
import HeroSlider from "@/shared/components/ui/HeroSlider";

export default function HomeHeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 md:pt-16">
      <HeroSlider slides={slides} />
    </section>
  );
}

