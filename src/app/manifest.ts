import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/shared/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "BCT",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#157cc1",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
