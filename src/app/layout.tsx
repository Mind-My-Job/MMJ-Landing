import "~/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ClientWrapper from "~/components/ClientWrapper";

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

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind My Job",
  description: "Find your dream job faster with AI!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  applicationName: "Mind My Job",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mind My Job",
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Mind My Job",
    title: {
      default: "Mind My Job",
      template: "MMJ%s - PWA App",
    },
    description: "Find your dream job faster with AI!",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Mind My Job",
      template: "MMJ%s - PWA App",
    },
    description: "Find your dream job faster with AI!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MindMyJob" />
        <link rel="manifest" href="/site.webmanifest" />
        <body
          className={`${poppins.variable} ${outfit.variable} ${geistMono.variable} ${geistSans.variable} mt-[4rem] antialiased`}
        >
          <Toaster position="top-center" reverseOrder={false} />
          <ClientWrapper>{children}</ClientWrapper>
        </body>
      </html>
  );
}
