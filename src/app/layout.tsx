import "~/styles/globals.css";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

const calsans = localFont({
  src: "./fonts/CalSans-SemiBold.woff",
  weight: "400",
  preload: true,
});

const inter = Inter({
  preload: true,
  subsets: ["latin"],
});

export const metadata = {
  title: "Koustav Mondal",
  description: "This is portfolio of Koustav Mondal",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${calsans.className}`}>{children}</body>
    </html>
  );
}
