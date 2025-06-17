import { ReactNode } from "react";

import "@/app/globals.css";

import { Open_Sans as OpenSans } from "next/font/google";

const openSans = OpenSans({ subsets: ["latin"] });

import Head from "@/app/Head";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Head />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
