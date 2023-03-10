import React, {useState} from 'react';
import {navlinks} from "../../constants";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {useStateContext} from "../../context";
import {ConnectWallet, useUser} from "@thirdweb-dev/react";

const Navbar = () => {
    const [curPath, setCurPath] = useState(window.location.pathname);
    const { address } = useStateContext();
    const [input, setInput] = useState("");

    console.log(address)

    return (
        <div className="
            flex flex-row justify-between bg-[#fff] items-center w-0 h-16 mx-auto my-5 p-5
            rounded-3xl shadow-lg text-base  max-w-screen-2xl invisible lg:visible lg:w-11/12
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
                " value={input} placeholder={"Search Collections by Contract Address"}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        window.location.href = `/collection/${input}`;
                }
                }}
                />
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
            <ConnectWallet
                auth={{
                    loginOptional: false,
                }}
                colorMode={"light"}
                accentColor={"#fe7700"}
            />
        </div>
    );
};

export default Navbar;
