import RootShell from "../components/RootShell";
import { buildMetadata } from "@/content/metadata";
import en from "@/content/en";

export const metadata = buildMetadata(en);

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
