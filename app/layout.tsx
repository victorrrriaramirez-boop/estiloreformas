import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.category} en ${site.city}`, template: `%s | ${site.name}` },
  description: "Proyecto, obra y acabados coordinados en un único proceso. Reformas integrales de viviendas, cocinas y baños con planificación clara y atención al detalle.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_ES", siteName: site.name, title: `${site.name} | ${site.category} en ${site.city}`, description: "Proyecto, obra y acabados coordinados en un único proceso. Reformas integrales de viviendas, cocinas y baños con planificación clara y atención al detalle.", url: site.url },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
