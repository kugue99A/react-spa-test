import React from "react";
import Header from "@components/Header";
import Menu from "@components/Menu";

type LayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: React.VFC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <Menu />
      <main className={"h-full w-full pt-[6rem] pl-[28rem]"}>
        {props.children}
      </main>
    </>
  );
};

export default MainLayout;
