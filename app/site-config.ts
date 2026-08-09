export const siteConfig = {
  template: {
    version: "1.0.0",
    citySlug: "alhaurin-el-grande",
    leadPath: "/woning-aanmelden/",
    thankYouPath: "/bedankt/",
    sourceWebsite: "verhuurbeheeralhaurinelgrande.nl",
  },
  brand: {
    name: "Verhuurbeheer Alhaurín el Grande",
    legalName: "Verhuurbeheer Spanje",
    parentUrl: "https://www.verhuurbeheerspanje.nl/",
  },
  location: {
    city: "Alhaurín el Grande",
    region: "Costa del Sol",
    language: "nl-NL",
    areas: [
      "Alhaurín el Grande Centrum",
      "Villafranco del Guadalhorce",
      "Coín",
      "Cártama",
      "Alhaurín de la Torre",
      "Valle del Guadalhorce",
    ],
  },
  assets: {
    logo: "/vbs-logo-alhaurin.webp",
    hero: "/alhaurin-el-grande-hero.webp",
    social: "/luxe-woning-alhaurin-el-grande-zeezicht.webp",
    signup: "/zonnig-terras-zeezicht-alhaurin-el-grande.webp",
    sophie: "/sophie-alhaurin-el-grande.webp",
  },
  domain: "https://verhuurbeheeralhaurinelgrande.nl",
  contact: {
    email: "contact@verhuurbeheerspanje.nl",
    whatsapp: "31852128105",
  },
  pricing: {
    holidayRental: "Vanaf 18%",
    midterm: "Eenmalig 1 maand huur",
    longterm: "Eenmalig 1 maand huur",
  },
  social: {
    instagram: "https://www.instagram.com/verhuurbeheer_spanje/",
    facebook: "https://www.facebook.com/verhuurbeheerspanje/",
  },
  seo: {
    title: "Verhuurbeheer Alhaurín el Grande | Voor Nederlandse eigenaren",
    description:
      "Fullservice verhuurbeheer in Alhaurín el Grande voor Nederlandse eigenaren. Vakantieverhuur vanaf 18%, midterm, langetermijn en lokaal vastgoedbeheer.",
    primaryKeywords: [
      "verhuurbeheer Alhaurín el Grande",
      "vakantieverhuurbeheer Alhaurín el Grande",
      "vastgoedbeheer Alhaurín el Grande",
      "woningbeheer Alhaurín el Grande",
      "vakantiewoning verhuren Alhaurín el Grande",
      "Airbnb beheer Alhaurín el Grande",
      "Nederlandse verhuurmakelaar Alhaurín el Grande",
      "sleutelbeheer Alhaurín el Grande",
      "verhuurlicentie Alhaurín el Grande",
      "finca verhuren Alhaurín el Grande",
      "villa verhuren Alhaurín el Grande",
    ],
    longTailKeywords: [
      "Nederlandstalig verhuurbeheer voor woningeigenaren in Alhaurín el Grande",
      "vakantiewoning professioneel laten verhuren in Alhaurín el Grande",
      "Airbnb en Booking beheer voor appartement in Alhaurín el Grande",
      "fullservice vakantieverhuurbeheer aan de Costa del Sol",
      "lokaal vastgoedbeheer voor tweede woning in Alhaurín el Grande",
      "villa verhuren met beheer in Alhaurín el Grande",
      "Nederlandstalig beheer finca Alhaurín el Grande",
      "woningbeheer Valle del Guadalhorce",
      "appartement laten verhuren in Alhaurín el Grande met beheer",
      "villa laten verhuren in Alhaurín el Grande met Nederlandstalige beheerder",
      "tweede woning beheren op afstand in Alhaurín el Grande",
      "sleutelbeheer voor tweede woning in Alhaurín el Grande",
      "Airbnb en Booking beheer in Alhaurín el Grande",
      "rendement vakantiewoning in Alhaurín el Grande",
      "property management in Alhaurín el Grande voor Nederlandse eigenaren",
      "wat kost verhuurbeheer in Alhaurín el Grande",
    ],
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "G-HT72TEC59L",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "f0W7Kk-b1xicaIRsq-sFCHrCqI_yEaUOCtRiyRYoVKk",
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const leadHref = siteConfig.template.leadPath;
export const leadSubject = (context = "woningaanmelding") =>
  `Nieuwe ${context} via ${siteConfig.brand.name}`;
export const whatsappHref = (
  message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`,
) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
