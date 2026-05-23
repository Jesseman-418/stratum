import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stratum-three.vercel.app"),
  title: "STRATUM — The operating layer beneath your business.",
  description:
    "Stratum engineers personalized AI operating systems for solo operators. Custom Claude Code workspaces — skills, commands, hooks, MCP wiring — built for how you actually run your business.",
  openGraph: {
    title: "STRATUM — The operating layer beneath your business.",
    description:
      "Personalized AIOS for solo operators. Built on Claude Code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jbMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
