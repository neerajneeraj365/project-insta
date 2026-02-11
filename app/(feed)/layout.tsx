import { Sidebar } from "@/components/globals/Sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const FeedLayout = ({ children }: { children: React.ReactNode }) => {
  const userId = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 lg:ml-[240px]">{children}</main>
    </div>
  );
};

export default FeedLayout;
