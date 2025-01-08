import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import Header from "@/components/layout/header";
import Provider from '@/providers';
import "./globals.css";
import "aos/dist/aos.css";
import "./index.css";
import 'swiper/css';
import 'swiper/css/effect-cards';


const inter = Inter({ subsets: ["latin"] });

const catFont = localFont({
  src: [
    {
      path: "../../public/fonts/Catfiles.woff",
    },
  ],
  variable: "--font-cat",
});
const dalekFont = localFont({
  src: [
    {
      path: "../../public/fonts/DalekPinpointBold.ttf",
    },
  ],
  variable: "--font-dalek",
});
const rushdaFont = localFont({
  src: [
    {
      path: "../../public/fonts/RushdaFunky-mGRv.otf",
    },
  ],
  variable: "--font-rushna",
});
const snowFont = localFont({
  src: [
    {
      path: "../../public/fonts/Snowflake.woff",
    },
  ],
  variable: "--font-snow",
});
const lapsusFont = localFont({
  src: [
    {
      path: "../../public/fonts/LapsusPro-Bold.otf",
    },
  ],
  variable: "--font-lapsus",
});
const qarmicFont = localFont({
  src: [
    {
      path: "../../public/fonts/Qarmic_sans_Abridged.ttf",
    },
  ],
  variable: "--font-qarmic",
});


export const metadata: Metadata = {
  title: "Meet Astro",
  description: "solana meme coin",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={`${catFont.variable} ${dalekFont.variable} ${rushdaFont.variable} ${snowFont.variable} ${qarmicFont.variable} ${lapsusFont.variable}`}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
