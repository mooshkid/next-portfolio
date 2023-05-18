import NavBar from "./components/Navbar";
// import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const poppins = Poppins({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Masa's Next.js Portfolio",
  description: "My second portfolio attempt using Next.js 13 app directory",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

// fix this part later
{
  /* <body className="max-w-3xl mx-auto py-10">
<header className="flex items-center justify-between">
  <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Kapehe</Link>
  <div className="flex items-center gap-5 text-sm text-gray-600">
    {pages.map((page) => (
      <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
    ))}

  </div>

</header>
<main className="py-20">{children}</main>
</body> */
}