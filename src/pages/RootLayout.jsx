import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "../components/Sidebar";
import ContentPage from "../components/ContentPage";

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <ContentPage>
        <Outlet />
      </ContentPage>
    </>
  );
};

export default RootLayout;
