import Wrapper from "@/components/globals/Wrapper";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userId = auth();
  if(!userId) {
    redirect("/sign-in");
  }
  return (
  
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
    </div>
  );
}

export default MainLayout;