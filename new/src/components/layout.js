import * as React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import "@fontsource/quicksand";
import "@fontsource/quicksand/500.css";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="wrapper">{children}</div>
    </main>
  );
};

export default Layout;
