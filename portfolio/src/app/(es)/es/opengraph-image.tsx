import es from "@/content/es";
import { ogSize, renderOg } from "@/app/og/renderOg";

export const alt = es.meta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg(es);
}
