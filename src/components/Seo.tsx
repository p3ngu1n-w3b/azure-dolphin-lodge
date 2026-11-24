import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_NAME,
  absoluteUrl,
  getLodgingBusinessJsonLd,
  getPageSeo,
  getWebsiteJsonLd,
} from "../config/site";

function getBreadcrumbJsonLd(pathname: string, title: string) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  if (pathname !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: title.replace(/\s*\|\s*Azur Dolphin Lodge.*$/, "").trim() || title,
      item: absoluteUrl(pathname),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attribute}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Keeps document title, description, canonical, and social meta in sync
 * with the active route for SPA SEO.
 */
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPageSeo(pathname);
    const url = absoluteUrl(page.path);
    const image = page.image ?? absoluteUrl("/images/lodge-exterior.jpg");
    const robots = page.noindex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large";

    document.title = page.title;

    upsertMeta("name", "description", page.description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "googlebot", robots);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta(
      "name",
      "geo.region",
      "ZA-WC",
    );
    upsertMeta("name", "geo.placename", "Klein Brak River");

    upsertMeta("property", "og:type", page.path === "/" ? "website" : "article");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_ZA");
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", `${SITE_NAME} — Garden Route lodge`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", image);

    upsertLink("canonical", url);

    upsertJsonLd("ld-website", getWebsiteJsonLd());
    upsertJsonLd("ld-lodging", getLodgingBusinessJsonLd());
    upsertJsonLd("ld-breadcrumb", getBreadcrumbJsonLd(page.path, page.title));
  }, [pathname]);

  return null;
}
