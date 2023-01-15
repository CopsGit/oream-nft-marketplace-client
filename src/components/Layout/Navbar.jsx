import React, {useState} from 'react';
import {navlinks} from "../../constants";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {useStateContext} from "../../context";
import {ConnectWallet, useUser} from "@thirdweb-dev/react";

const Navbar = () => {
    const [curPath, setCurPath] = useState(window.location.pathname);
    const { address } = useStateContext();

    console.log(address)

    return (
        <div className="
            flex flex-row justify-between bg-[#fff] items-center w-11/12 h-16 mx-auto my-5 p-5
            rounded-3xl shadow-lg text-base
        ">
            <Link to={"/"}>
                <h1 className="
                    text-2xl font-bold text-[#fe7700]
                ">
                    OREAM
                </h1>
            </Link>
            <div className="
                flex flex-row items-center justify-center md:w-1/4 lg:w-2/5 2xl:w-1/2
                w-4/5 h-10 rounded-lg bg-[#fe7700]/20 opacity-70 p-2 text-base text-[#fe7700] font-bold
                    focus:outline-none focus:ring-2 focus:ring-[#fe7700] focus:ring-opacity-50
                    hover:opacity-100 hover:bg-[#fe7700]/5 transition duration-600 ease-in-out
            ">
                <SearchIcon sx={{fontSize:'30px'}}/>
                <input type="text" className="
                    w-full h-full ml-2 bg-transparent text-[#fe7700] font-bold focus: border-none
                    focus:outline-none focus: text-[#fe7700] transition duration-600 ease-in-out
                " placeholder={"Search"} />
            </div>
            <ul className="
                    flex flex-row space-x-5 text-base font-medium text-[#fe7700] cursor-pointer h-10
            ">
                {
                    navlinks.map((link, index) => (
                        <li key={index} className={`
                            inline-block  flex flex-row justify-center items-center
                            text-[#fe7700] font-bold text-base p-3 rounded-xl
                            hover:text-[#b15300] transition duration-300 ease-in-out
                            cursor-pointer ${curPath === link.link ? "bg-[#fe7700] hover:text-[#ffffff] text-[#fff]" : ""}
                        `}>
                            <Link to={link.link} onClick={() => setCurPath(link.link)}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
            {/*<button className="*/}
            {/*            bg-[#fe7700] text-[#fff] font-bold text-base px-4 py-2 rounded-2xl transition duration-300 ease-in-out*/}
            {/*            hover:bg-[#b15300] hover:text-[#fff] hover:font-bold hover:px-4 hover:py-2*/}
            {/*        "*/}
            {/*        onClick={() => connect()}*/}
            {/*>*/}
            {/*    {address ? address.slice(0, 5) + "..." + address.slice(-3) : "Connect"}*/}
            {/*</button>*/}
            <ConnectWallet
                auth={{
                    loginOptional: false,
                }}
                colorMode={"light"}
                accentColor={"#fe7700"}
                className=""
            />
        </div>
    );
};

export default Navbar;
