import { useEffect } from "react";
import site from "../config/site.json";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (content === null || content === undefined) {
    if (element) {
      element.remove();
    }
    return;
  }
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (element) {
      element.remove();
    }
    return;
  }
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function setJsonLd(text) {
  let element = document.head.querySelector('script[type="application/ld+json"]');
  if (!text) {
    if (element) {
      element.remove();
    }
    return;
  }
  if (!element) {
    element = document.createElement("script");
    element.setAttribute("type", "application/ld+json");
    document.head.appendChild(element);
  }
  element.textContent = text;
}

export default function usePageMeta({ title, description, path, jsonLd = null, noindex = false }) {
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const url = noindex ? null : `${site.url}${path}`;
    const image = `${site.url}${site.image}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex" : null);
    setCanonical(url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", site.name);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", site.imageAlt);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", site.imageAlt);
    setJsonLd(jsonLdText);
  }, [title, description, path, jsonLdText, noindex]);
}
