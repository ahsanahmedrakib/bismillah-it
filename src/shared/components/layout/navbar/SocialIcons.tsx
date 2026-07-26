import { SOCIAL_ICONS } from "@/shared/data/navbar";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex items-center">
      {SOCIAL_ICONS.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.href}>
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center justify-center p-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: item.color }}
                target="_blank"
              >
                <Icon color={"#FFF"} size={16} />
              </Link>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

