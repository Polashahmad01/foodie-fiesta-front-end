import { poppins } from "./ui/fonts";
import "./ui/globals.css";
import RootHeader from "./ui/header/root-header";
import RootFooter from "./ui/footer/root-footer";

export const metadata = {
  title: "Fiesta Online Shop",
  description: "A reliable online shop",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-white`}>
        <main className="flex flex-col justify-between h-screen">
          <header>
            <RootHeader />
          </header>
          <div className="container mx-auto">
            {children}
          </div>
          <footer>
            <RootFooter />
          </footer>
        </main>
        </body>
    </html>
  )
}
