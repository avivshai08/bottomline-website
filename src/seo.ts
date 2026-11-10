import { ALLOC_TOOL_URL, BOOK_URL, IMAGES } from "./content";
import type { FaqItem } from "./components/Faq";
import { FAQ as businessGameFaq } from "./pages/BusinessGame";
import { FAQ as cfoFaq } from "./pages/Cfo";
import { FAQ as profitFirstFaq } from "./pages/ProfitFirst";

export const SITE_ORIGIN = "https://bottomline.finance";

export const PRERENDER_ROUTES = [
  "/",
  "/cfo",
  "/profit-first",
  "/business-game",
  "/contact",
  "/hugim",
] as const;

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  robots: string;
  jsonLd: unknown[];
};

function abs(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

function pageUrl(path: string): string {
  return path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/index.html") return "/";
  const clean = pathname.replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

const ORG_ID = `${SITE_ORIGIN}/#org`;
const PERSON_ID = `${SITE_ORIGIN}/#person`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

function organizationLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Bottom line",
    url: `${SITE_ORIGIN}/`,
    email: "aviv@bottomline.finance",
    logo: abs(IMAGES.logo),
    founder: { "@id": PERSON_ID },
  };
}

function personLd() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "אביב שי",
    alternateName: "Aviv Shai",
    jobTitle: "השותף הפיננסי שלך",
    url: `${SITE_ORIGIN}/`,
    email: "aviv@bottomline.finance",
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "CFO במיקור חוץ",
      "שותף פיננסי",
      "Profit First",
      "רווח לפני הכל",
      "משחקים עסקים",
    ],
  };
}

function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_ORIGIN}/`,
    name: "Bottom line",
    inLanguage: "he",
    publisher: { "@id": ORG_ID },
  };
}

function webPageLd(path: string, name: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${pageUrl(path)}#webpage`,
    url: pageUrl(path),
    name,
    description,
    inLanguage: "he",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
  };
}

function faqLd(path: string, items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl(path)}#faq`,
    url: pageUrl(path),
    inLanguage: "he",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function graph(path: string, title: string, description: string, extra: unknown[] = []) {
  return [
    organizationLd(),
    personLd(),
    websiteLd(),
    webPageLd(path, title, description),
    ...extra,
  ];
}

const PAGES: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "אביב שי | Bottom line — השותף הפיננסי שלך",
    description:
      "אביב שי, Bottom line — שותף פיננסי לבעלי עסקים ומנכ״לים. CFO במיקור חוץ, רווח לפני הכל (Profit First) ומשחקים עסקים. בהירות. החלטות. תוצאות.",
    ogImage: abs(IMAGES.portrait),
    robots: "index, follow",
    jsonLd: graph(
      "/",
      "אביב שי | Bottom line — השותף הפיננסי שלך",
      "אביב שי, Bottom line — שותף פיננסי לבעלי עסקים ומנכ״לים. CFO במיקור חוץ, רווח לפני הכל (Profit First) ומשחקים עסקים.",
    ),
  },
  "/cfo": {
    path: "/cfo",
    title: "שותף פיננסי ו-CFO במיקור חוץ | Bottom line",
    description:
      "ליווי CFO במיקור חוץ עם אביב שי: בהירות פיננסית, תכנון אסטרטגי, תזרים, תמחור וקבלת החלטות לבעלי עסקים — בלי משרה מלאה.",
    ogImage: abs(IMAGES.cfoHero),
    robots: "index, follow",
    jsonLd: graph(
      "/cfo",
      "שותף פיננסי ו-CFO במיקור חוץ | Bottom line",
      "ליווי CFO במיקור חוץ עם אביב שי: בהירות פיננסית, תכנון אסטרטגי, תזרים, תמחור וקבלת החלטות.",
      [
        {
          "@type": "ProfessionalService",
          "@id": `${SITE_ORIGIN}/cfo#service`,
          name: "שותף פיננסי ו-CFO במיקור חוץ",
          url: pageUrl("/cfo"),
          provider: { "@id": PERSON_ID },
          areaServed: "IL",
          availableLanguage: ["he", "en"],
        },
        faqLd("/cfo", cfoFaq),
      ],
    ),
  },
  "/profit-first": {
    path: "/profit-first",
    title: "רווח לפני הכל (Profit First) | אביב שי — Bottom line",
    description:
      "הטמעת שיטת Profit First בעברית עם אביב שי: רווח לפני הכל, הספר, כלי החלוקות, וליווי שמציב את הרווח כיעד ולא כשארית.",
    ogImage: abs(IMAGES.pfJars),
    robots: "index, follow",
    jsonLd: graph(
      "/profit-first",
      "רווח לפני הכל (Profit First) | אביב שי — Bottom line",
      "הטמעת שיטת Profit First בעברית עם אביב שי: רווח לפני הכל, הספר, כלי החלוקות, וליווי לבעלי עסקים.",
      [
        {
          "@type": "Book",
          "@id": `${SITE_ORIGIN}/profit-first#book`,
          name: "רווח לפני הכל",
          alternateName: "Profit First",
          author: { "@type": "Person", "name": "Mike Michalowicz" },
          inLanguage: "he",
          url: BOOK_URL,
        },
        {
          "@type": "WebApplication",
          "@id": `${SITE_ORIGIN}/profit-first#alloc-tool`,
          name: "כלי החלוקות של Profit First",
          url: ALLOC_TOOL_URL,
          applicationCategory: "BusinessApplication",
          inLanguage: "he",
        },
        faqLd("/profit-first", profitFirstFaq),
      ],
    ),
  },
  "/business-game": {
    path: "/business-game",
    title: "משחקים עסקים — סימולציה עסקית | Bottom line",
    description:
      "תוכנית משחקים עסקים של אביב שי: סימולציית Mike's Bikes לחברות, סטודנטים, בתי ספר ותוכניות העשרה — למידה דרך ניהול חברה.",
    ogImage: abs(IMAGES.gameHero),
    robots: "index, follow",
    jsonLd: graph(
      "/business-game",
      "משחקים עסקים — סימולציה עסקית | Bottom line",
      "תוכנית משחקים עסקים: סימולציית Mike's Bikes לחברות, סטודנטים, בתי ספר ותוכניות העשרה.",
      [faqLd("/business-game", businessGameFaq)],
    ),
  },
  "/contact": {
    path: "/contact",
    title: "צור קשר | Bottom line — אביב שי",
    description:
      "שיחה קצרה יכולה לעשות הבדל גדול. צרו קשר עם אביב שי ב-Bottom line: שותף פיננסי, רווח לפני הכל, או משחקים עסקים. aviv@bottomline.finance",
    ogImage: abs(IMAGES.portrait),
    robots: "index, follow",
    jsonLd: graph(
      "/contact",
      "צור קשר | Bottom line — אביב שי",
      "צרו קשר עם אביב שי ב-Bottom line: שותף פיננסי, רווח לפני הכל, או משחקים עסקים.",
    ),
  },
  "/hugim": {
    path: "/hugim",
    title: "משחקים עסקים — הרשמה לתוכנית | Bottom line",
    description:
      "תכנית משחקים עסקים עם אביב שי: סימולציה עסקית בימי ראשון פעם בשבועיים, מגיל 17, 4 חודשים. לפרטים והרשמה.",
    ogImage: abs(IMAGES.gameHeroPhoto),
    robots: "index, follow",
    jsonLd: graph(
      "/hugim",
      "משחקים עסקים — הרשמה לתוכנית | Bottom line",
      "תכנית משחקים עסקים: סימולציה עסקית בימי ראשון פעם בשבועיים, מגיל 17, 4 חודשים.",
    ),
  },
};

const NOT_FOUND: PageSeo = {
  path: "/404",
  title: "העמוד לא נמצא | Bottom line",
  description: "העמוד שחיפשתם לא קיים. חזרו לדף הבית של Bottom line.",
  ogImage: abs(IMAGES.portrait),
  robots: "noindex, follow",
  jsonLd: [],
};

export function getPageSeo(pathname: string): PageSeo {
  const path = normalizePath(pathname);
  return PAGES[path] ?? NOT_FOUND;
}

export function canonicalUrl(page: PageSeo): string {
  if (page.path === "/404" || page.path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${page.path}`;
}

export function jsonLdScript(page: PageSeo): string {
  if (!page.jsonLd.length) return "";
  const payload = {
    "@context": "https://schema.org",
    "@graph": page.jsonLd,
  };
  return JSON.stringify(payload).replace(/</g, "\\u003c");
}

export function injectHead(template: string, pathname: string): string {
  const page = getPageSeo(pathname);
  const canonical = canonicalUrl(page);
  const tags = [
    `<title>${escapeAttr(page.title)}</title>`,
    `<meta name="description" content="${escapeAttr(page.description)}" />`,
    `<meta name="robots" content="${escapeAttr(page.robots)}" />`,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `<link rel="alternate" hreflang="he" href="${escapeAttr(canonical)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeAttr(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="he_IL" />`,
    `<meta property="og:site_name" content="Bottom line" />`,
    `<meta property="og:title" content="${escapeAttr(page.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(page.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(page.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(page.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(page.ogImage)}" />`,
  ];
  const ld = jsonLdScript(page);
  if (ld) {
    tags.push(
      `<script id="page-jsonld" type="application/ld+json">${ld}</script>`,
    );
  }

  let html = template.replace(/<meta\s+name="description"[\s\S]*?\/>/, "");
  html = html.replace(/<title>[\s\S]*?<\/title>/, tags.join("\n    "));
  if (!html.includes(`<title>${escapeAttr(page.title)}</title>`)) {
    throw new Error(`Failed to inject SEO head for ${pathname}`);
  }
  return html;
}
