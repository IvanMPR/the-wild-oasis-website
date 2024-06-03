import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 0 min-h-screen flex flex-col`}
      >
        <Header />
        <div className=' flex-1 px-8 py-12'>
          <main className=' max-w-7xl mx-auto'>{children}</main>
        </div>
      </body>
    </html>
  );
}
