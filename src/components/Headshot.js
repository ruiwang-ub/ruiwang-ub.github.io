import profile from "../content/profile";

export default function Headshot({ sizes }) {
  const { headshot } = profile;
  const base = process.env.PUBLIC_URL;
  const srcSet = headshot.sources.map((source) => `${base}${source.src} ${source.width}w`).join(", ");

  return (
    <img
      className="headshot"
      src={`${base}${headshot.src}`}
      srcSet={srcSet}
      sizes={sizes}
      width={headshot.width}
      height={headshot.height}
      alt={headshot.alt}
      decoding="async"
    />
  );
}
