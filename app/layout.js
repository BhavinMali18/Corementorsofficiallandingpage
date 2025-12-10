export const metadata = {
  title: "CoreMentors — IT Services for Every Need",
  description: "CoreMentors provides comprehensive IT services: consulting, development, cloud, AI and support.",
  openGraph: {
    title: "CoreMentors — IT Services",
    description: "Full‑stack IT services: strategy, build, cloud, AI, support.",
    url: "https://corementors.example",
    siteName: "CoreMentors",
    images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreMentors — IT Services",
    description: "Strategy, build, cloud, AI, support.",
    images: ["/og.png"]
  },
  icons: { icon: "/favicon.ico" }
};

import "./globals.css";
import Header from "../components/Header";
import ConditionalFooter from "../components/ConditionalFooter";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="lazyOnload"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}


