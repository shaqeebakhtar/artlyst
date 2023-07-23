import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Providers } from "./providers";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artlyst",
  description: "A platform for artist to showcase and sell their art.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
