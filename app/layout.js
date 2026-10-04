import SideNavigation from "./components/SideNavigation";
import Logo from "./components/Logo";
import Header from "./components/Header";
// import "@/app/_styles/global.css";
import "./_styles/global.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col  `}
      >
        <Header />
        <div className="flex-1 px-8 py-12 relative ">
          <main className="max-w-7xl mx-auto w-full ">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
