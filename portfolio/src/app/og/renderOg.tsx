// The link preview (og:image) for each language, built from the site copy so it
// never drifts from what the page says. Next renders it once at build time.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Content } from "@/content/types";
import { SITE_URL, projects } from "@/content/shared";

export const ogSize = { width: 1200, height: 630 };

const ORANGE = "#FFA216";
const dir = join(process.cwd(), "src/app");

export async function renderOg(c: Content) {
  const [condensedBold, regular, medium, portrait] = await Promise.all([
    readFile(join(dir, "og/fonts/RobotoCondensed-700.woff")),
    readFile(join(dir, "og/fonts/Roboto-400.woff")),
    readFile(join(dir, "og/fonts/Roboto-500.woff")),
    readFile(join(dir, "img/JorgeRondonFrontend.png")),
  ]);

  const [title, tagline] = c.hero.role.split(" · ");
  const ownProducts = projects.filter((p) => p.own).map((p) => p.name);
  const address = new URL(c.lang === "en" ? "/" : "/es", SITE_URL);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(92deg, #0b0b0b 20%, #1e1e1e 100%)",
          color: "#fff",
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 12, background: ORANGE }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 760,
            padding: "72px 0 64px 88px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Roboto Condensed",
                fontSize: 26,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: ORANGE,
              }}
            >
              {c.hero.strip.join(" · ")}
            </div>
            <div
              style={{
                fontFamily: "Roboto Condensed",
                fontSize: 108,
                lineHeight: 1,
                marginTop: 20,
              }}
            >
              {c.hero.name}
            </div>
            <div style={{ fontSize: 40, fontWeight: 500, marginTop: 32 }}>{title}</div>
            {tagline && (
              <div style={{ fontSize: 40, color: "#D3D3D3", marginTop: 6 }}>{tagline}</div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 500, color: ORANGE }}>
              {ownProducts.join(" · ")}
            </div>
            <div style={{ fontSize: 24, color: "#BEBEBE", marginTop: 12 }}>
              {address.host + (address.pathname === "/" ? "" : address.pathname)}
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${portrait.toString("base64")}`}
          width={465}
          height={600}
          style={{ position: "absolute", right: 16, bottom: 0 }}
          alt=""
        />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Roboto Condensed", data: condensedBold, weight: 700, style: "normal" },
        { name: "Roboto", data: regular, weight: 400, style: "normal" },
        { name: "Roboto", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
