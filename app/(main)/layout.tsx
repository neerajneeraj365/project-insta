import Wrapper from "@/components/globals/Wrapper";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Wrapper>{children}</Wrapper>
  );
}

export default MainLayout;