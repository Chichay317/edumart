import Header from "./header/Header";
import React, { ReactElement } from "react";
import BottomHeader from "./header/BottomHeader";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
    </>
  );
};

export default RootLayout;
