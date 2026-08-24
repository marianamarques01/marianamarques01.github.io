import type { Metadata } from "next";
import { Montserrat, Syne } from "next/font/google";
import SiteChrome from "@/components/chrome/SiteChrome";
import { LanguageProvider } from "@/lib/language";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mariana Marques — Product Engineer",
  description:
    "Product engineer with full-stack execution and a frontend focus. Builds intelligent products at the intersection of design and code — React, TypeScript, Next.js, REST APIs, and LLM-powered systems.",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.setAttribute("data-theme","dark");}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${montserrat.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <LanguageProvider>
            <SiteChrome />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
