import React from 'react';
import Navbar from "../components/Layout/Navbar";
import Bottom from "../components/Layout/Bottom";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Bottom />
        </>
    );
};

export default Layout;
