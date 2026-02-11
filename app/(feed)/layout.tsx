import { Sidebar } from "@/components/globals/Sidebar";

const FeedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
        <Sidebar />
      <main className="flex-1 lg:ml-[240px]">{children}</main>
    </div>
  );
};

export default FeedLayout;