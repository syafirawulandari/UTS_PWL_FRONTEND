import React from "react";

const ContentPage = ({ children }) => {
  return (
    <div className="bg-[#ECE3CE] flex flex-col min-h-screen ml-[120px] items-center justify-center">
      {children}
    </div>
  );
};

export default ContentPage;
