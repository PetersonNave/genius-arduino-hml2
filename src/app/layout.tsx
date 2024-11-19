import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./widgets/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Genius Game",
  description: "Genius Game - Teste Sua Memória!!!",
  keywords: ["arduíno", "programação", "jogo", "Genius", "memorização"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 


{
  
  return (
    <html style={{background:  "#1f1f1f"}} lang="en">
      <head>
          <link  href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css" rel="stylesheet" />
      </head>
      <div id="scroll-top-btn" style={{outline: "none", position: "sticky", bottom: "54px", left: "90vw", width: "fit-content"}}>

      <a  href="#header-top" title="Ir para o topo do site" >
              <svg style={{filter: "brightness(0) saturate(100%) invert(3%) sepia(56%) saturate(18%) hue-rotate(314deg) brightness(92%) contrast(81%)"}} xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
        </svg>
        </a>
      </div>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
     
        {children}
      </body>
    </html>
  );
}
