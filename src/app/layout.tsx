import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Localiza Açaí",
  description: "Application prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
        <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="daltonism-filter">
              <feColorMatrix type="matrix" values="
                0.625 0.375 0     0 0
                0.7   0.3   0     0 0
                0     0.3   0.7   0 0
                0     0     0     1 0
              " />
            </filter>
          </defs>
        </svg>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
