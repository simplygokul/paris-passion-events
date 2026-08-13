import type { ImgHTMLAttributes } from "react";

type StaticImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function StaticImage({ src, alt, priority, ...props }: StaticImageProps) {
  const resolvedSrc = src.startsWith("/")
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src;

  // Static GitHub Pages compatibility layer; production app routes use next/image.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={resolvedSrc} alt={alt} loading={priority ? "eager" : props.loading} {...props} />;
}
