import RootShell from "../components/RootShell";
import { buildMetadata } from "@/content/metadata";
import es from "@/content/es";

export const metadata = buildMetadata(es);

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
