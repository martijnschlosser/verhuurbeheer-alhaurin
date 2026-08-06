import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer Alhaurín el Grande",
    short_name: "VBE Alhaurín el Grande",
    description: "Fullservice verhuurbeheer en vastgoedbeheer in Alhaurín el Grande, Casares en Manilva.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/vbs-logo-alhaurin.webp", sizes: "640x640", type: "image/webp" }],
  };
}
