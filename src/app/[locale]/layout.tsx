import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const fuente = Roboto({
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DRT Group",
  description: "DRT Group - Cloud Technology",
  icons : {
    icon: "/DRTG_Logo.png",
    shortcut: "/DRTG_Logo.png",
    apple: "/DRTG_Logo.png",
  },
  
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params : any;
}>){

  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return(
    <html>

      <body className={fuente.className}>
        <NextIntlClientProvider messages={messages}>
          {<NavBar/>}
          
          {children}

          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
