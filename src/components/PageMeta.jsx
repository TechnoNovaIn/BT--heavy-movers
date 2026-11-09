import { useEffect } from "react";

/**
 * PageMeta — small drop-in replacement for what `next/head` did on each
 * page in the Next.js version: set the browser tab title and (optionally)
 * the meta description. Vite/React Router has no built-in equivalent, so
 * this just does it directly on mount/update via a couple of DOM calls.
 *
 * USAGE:
 *   <PageMeta title="Careers | BMSPL" description="..." />
 */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
