import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Aircraft Parts Supplier India | OEM Spares & Logistics – SGTBS Aviation",
//   description:
//     "SGTBS Aviation delivers genuine OEM aircraft parts, maintenance spares, and logistics support for airlines, defence, and marine sectors across India. Trusted aviation sourcing from Delhi.",
//   keywords: [],
//   openGraph: {
//     type: "website",
//     siteName: "Aircraft Parts Supply | SGTBS",
//     locale: "en_US",
//     url: "https://sgtbsourcing.com",
//     title: "Aircraft Parts Supply | SGTBS",
//     description:
//       "SGTBS Aviation delivers genuine OEM aircraft parts, maintenance spares, and logistics support for airlines, defence, and marine sectors across India. Trusted aviation sourcing from Delhi.",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Aircraft Parts Supply | SGTBS ",
//       },
//     ],
//   },
//   authors: [
//     {
//       name: "Aircraft Parts Supply | SGTBS",
//       url: "https://sgtbsourcing.com",
//     },
//   ],
//   creator: "Aircraft Parts Supply | SGTBS",
//   icons: [
//     {
//       rel: "icon",
//       url: "/favicon.ico",
//     },
//     {
//       rel: "apple-touch-icon",
//       url: "/apple-touch-icon.png",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/favicon-32x32.png",
//       sizes: "32x32",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/favicon-16x16.png",
//       sizes: "16x16",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/android-chrome-192x192.png",
//       sizes: "192x192",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       url: "/android-chrome-512x512.png",
//       sizes: "512x512",
//     },
//   ],
//   robots: {
//     index: true,
//     follow: true,
//   },
//   manifest: "/site.webmanifest",
// };
export const metadata: Metadata = {
  metadataBase: new URL("https://sgtbsourcing.com"),

  title:
    "Aircraft Parts Supplier India | OEM Spares & Logistics – SGTBS Aviation",
  description:
    "SGTBS Aviation delivers genuine OEM aircraft parts, maintenance spares, and logistics support for airlines, defence, and marine sectors across India. Trusted aviation sourcing from Delhi.",

  openGraph: {
    type: "website",
    siteName: "Aircraft Parts Supply | SGTBS",
    locale: "en_US",
    url: "https://sgtbsourcing.com",
    title: "Aircraft Parts Supply | SGTBS",
    description:
      "SGTBS Aviation delivers genuine OEM aircraft parts, maintenance spares, and logistics support for airlines, defence, and marine sectors across India. Trusted aviation sourcing from Delhi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aircraft Parts Supply | SGTBS",
      },
    ],
  },

  authors: [
    {
      name: "Aircraft Parts Supply | SGTBS",
      url: "https://sgtbsourcing.com",
    },
  ],
  creator: "Aircraft Parts Supply | SGTBS",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <TooltipProvider>{children}</TooltipProvider>
        <Footer />
      </body>
    </html>
  );
}
