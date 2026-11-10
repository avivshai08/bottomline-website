import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl, getPageSeo, jsonLdScript } from "../seo";

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(ld: string) {
  let el = document.getElementById("page-jsonld") as HTMLScriptElement | null;
  if (!ld) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.id = "page-jsonld";
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.text = ld;
}

export default function Seo() {
  const { pathname } = useLocation();
  const page = getPageSeo(pathname);
  const canonical = canonicalUrl(page);
  const ld = jsonLdScript(page);

  useEffect(() => {
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "robots", page.robots);
    upsertLink("canonical", canonical);
    upsertLink("alternate", canonical, "he");
    upsertLink("alternate", canonical, "x-default");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "he_IL");
    upsertMeta("property", "og:site_name", "Bottom line");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", page.ogImage);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", page.ogImage);
    upsertJsonLd(ld);
  }, [canonical, ld, page]);

  return null;
}
