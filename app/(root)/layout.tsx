import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { User } from "lucide-react";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn ={user: { firstName:'Suhas', lastName:'JSM'} as User};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn.user}/>
         <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
            <div> 
              <MobileNav user={loggedIn.user}/>
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
