import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Footer } from "~/app/_components/footer"
import { Intro } from "./_components/intro";
import { Nav } from "./_components/nav";




export const metadata = {
  title: "EstoqueFlex",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/imagens/imagelogo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       
      <body id="Início"className={GeistSans.className}>
        <Nav/>
        <Intro/>


        {children}
        <Footer/>

      </body>
      
    </html>
  );
}
