import routes from "../config/routes.json";
import usePageMeta from "../lib/usePageMeta";

const routesByKey = routes.reduce((map, route) => ({ ...map, [route.key]: route }), {});

export default function Page({ routeKey, meta, heading, sectionNav, jsonLd, className, children }) {
  const pageMeta = routeKey ? routesByKey[routeKey] : meta;
  usePageMeta({ ...pageMeta, jsonLd });

  return (
    <main id="main" tabIndex={-1} className={["page", className].filter(Boolean).join(" ")}>
      <div className="page__inner">
        {sectionNav}
        {heading ? <h1 className="page__title">{heading}</h1> : null}
        {children}
      </div>
    </main>
  );
}
