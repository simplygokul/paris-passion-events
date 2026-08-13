import type { ImgHTMLAttributes } from "react";

type StaticImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  priority?: boolean;
};

export default function StaticImage({ src, priority, ...props }: StaticImageProps) {
  const resolvedSrc = src.startsWith("/")
    ? `${import.meta.env.BASE_URL}${src.slice(1)}`
    : src;

  return <img src={resolvedSrc} loading={priority ? "eager" : props.loading} {...props} />;
}
