import en from "@/content/en";
import { ogSize, renderOg } from "@/app/og/renderOg";

export const alt = en.meta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg(en);
}
