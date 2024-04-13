import NavBar from "./components/Navbar";
import "./styles/scss/main.scss";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import Footer from "./components/Footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Masa's Next.js Portfolio",
  description: "My second portfolio attempt using Next.js 13 app directory",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
