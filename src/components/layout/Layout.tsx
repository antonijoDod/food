import React from "react";
import { Header } from "@components";

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
