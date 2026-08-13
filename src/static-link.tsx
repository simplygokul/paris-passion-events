import type { AnchorHTMLAttributes, ReactNode } from "react";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

export default function StaticLink({ href, children, ...props }: StaticLinkProps) {
  const resolvedHref = href.startsWith("/")
    ? `${import.meta.env.BASE_URL}${href.slice(1)}`
    : href;
  return <a href={resolvedHref} {...props}>{children}</a>;
}
