"use client";

import "./globals.css";
import Navbar from "@src/components/Navbars/navbar";
import Footer from "@src/components/layout/footer";
import ScrollButton from "@src/components/scrollButton";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Login page par navbar/footer hide karna hai
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body>
        {!isLoginPage && <Navbar />}

        {children}

        {!isLoginPage && <Footer />}
        {!isLoginPage && <ScrollButton />}
      </body>
    </html>
  );
}