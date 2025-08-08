import Loading from "@/components/Loading";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Una nueva habilidad...",
  description: "Descubre cómo personas comunes...",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const isLocalHost = hdrs.get("x-domain-id") === "0";

  return (
    <html lang="es">
      {!isLocalHost && (
        <head>
          <Analytics />
        </head>
      )}
      <body className={`flex-col items-center ${poppins.variable} antialiased`} suppressHydrationWarning>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
} 