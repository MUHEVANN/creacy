import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: "./fonts/Helvetica.woff",
  variable: "--font-helvetica",
  weight: "100 200 300 400 500 600 700 800 900",
});
const helveticaBold = localFont({
  src: "./fonts/HelveticaBold.woff",
  variable: "--font-helveticaBold",
  weight: "600 700 800 900",
});
const helveticaLight = localFont({
  src: "./fonts/helveticaLight.woff",
  variable: "--font-helveticaLight",
  weight: "100 200 300 400",
});

export const metadata = {
  title: "Creacy",
  description: "Creacy Wen Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/logo.png" />
      </head>
      <body
        className={`${helvetica.variable} ${helveticaBold.variable} ${helveticaLight.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
