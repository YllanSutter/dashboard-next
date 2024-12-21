import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%]  lg:w-[16%] xl-[14%] p-2 lg:p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" width={32} height={32} alt="logo"/>
          <span className="hidden lg:block font-bold">SchooLama</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className='w-[86%] md:w-[92%] lg:w[84%] xl-[86%] bg[#F7F8FA] overflow-scroll  bg-[#F7F8FA] flex flex-col'>
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
