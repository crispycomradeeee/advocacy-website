import { Manrope } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata = {
  title: {
    default: "A Better Bay | Improving the Stay",
    template: "%s | A Better Bay",
  },
  description:
    "An advocacy website on how seasonal tourism connects to crime and public safety in Bay County, Florida, and what residents, visitors and officials can do.",
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0d2b52" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
