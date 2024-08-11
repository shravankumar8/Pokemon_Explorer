// app/pokedex/layout.tsx
import React from "react";
import AppBar from "../../components/Appbar"; // Ensure this is a Client Component if using styled-jsx

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
