import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/footer";
import { getSession } from "./api/auth/[...nextauth]/auth";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Pollinate ",
  description:
    "The webapp that saves locations and data of your tree planting experiences",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <main>
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
