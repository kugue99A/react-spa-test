import React from "react";

const Header: React.VFC = () => {
  return (
    <>
      <header className="fixed top-0 h-[6rem] w-full border-b border-gray-100 bg-white">
        <div className="flex h-full w-full items-center">
          <div className="flex h-full w-[28rem] items-center justify-center border-r border-gray-100">
            test
          </div>
          <div className="flex h-full grow items-center justify-end"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
