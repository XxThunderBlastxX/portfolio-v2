import "~/styles/globals.css";

import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"]
});

export const metadata = {
  title: "Koustav Mondal",
  description: "This is portfolio of Koustav Mondal",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${vt323.className}`}>{children}</body>
    </html>
  );
}

export async function getTitleData(): Promise<string> {
  const res: Response = await fetch("https://asciified.thelicato.io/api/v2/ascii?text=Koustav+Mondal&font=Big+Money-ne");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: string = await res.text();

  return data;
}
