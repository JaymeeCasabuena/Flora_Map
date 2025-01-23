import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Pollinate ",
  description:
    "The webapp that saves locations and data of your tree planting experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
