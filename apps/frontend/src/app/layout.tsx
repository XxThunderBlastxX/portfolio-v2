import "~/styles/globals.css";

import localFont from "next/font/local";
import { Metadata } from "next";
import React from "react";

const calsans = localFont({
  src: "./fonts/CalSans-SemiBold.woff",
  weight: "400",
  preload: true,
});

export const metadata: Metadata = {
  title: "Koustav Mondal | Flutter Developer | Go Developer",
  description:
    "Koustav Mondal's portfolio website. A Flutter and Go developer.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "Koustav Mondal",
    "Flutter Developer",
    "Go Developer",
    "Linux",
    "Dart",
    "Go",
    "Flutter",
    "Developer",
    "Portfolio",
    "api",
    "rest",
    "ThunderBlast",
    "thunder",
  ],
  authors: [
    {
      name: "Koustav Mondal",
      url: "https://koustav.dev",
    },
  ],
  creator: "Koustav Mondal",
  metadataBase: new URL("https://koustav.dev"),
  openGraph: {
    title: "Koustav Mondal | Flutter Developer | Go Developer",
    description:
      "Koustav Mondal's portfolio website. A Flutter and Go developer.",
    type: "website",
    url: "https://koustav.dev",
    locale: "en",
    images: ["/images/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://koustav.dev",
    title: "Koustav Mondal | Flutter Developer | Go Developer",
    description:
      "Koustav Mondal's portfolio website. A Flutter and Go developer.",
    images: ["/images/banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${calsans.className} w-full bg-black/[0.96] `}>
        {children}
      </body>
    </html>
  );
}
