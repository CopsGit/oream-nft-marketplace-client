import React from 'react';
import {navlinks} from "../../constants";
import {Link} from "react-router-dom";
import searchIcon from "../../assets/search.svg";

const Navbar = () => {
    return (
        <div className="
            flex flex-row justify-between bg-[#fff] items-center w-11/12 h-16 mx-auto my-7 p-5
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
            ">
                <img src="../../assets/search.svg" alt="" className="
                    w-5 h-5
                "/>
                <input type="text" className="
                    w-4/5 h-10 rounded-lg bg-[#fe7700]/20 opacity-70 p-2 text-base text-[#fe7700] font-bold
                    focus:outline-none focus:ring-2 focus:ring-[#fe7700] focus:ring-opacity-50
                    hover:opacity-100 hover:bg-[#fe7700]/5 transition duration-600 ease-in-out
                " placeholder={"Search"} />
            </div>
            <ul className="
                    flex flex-row space-x-9 text-base font-medium text-[#fe7700] cursor-pointer

            ">
                {
                    navlinks.map((link, index) => (
                        <li key={index} className="
                            inline-block
                            text-[#fe7700] font-bold text-base
                            hover:text-[#b15300] transition duration-300 ease-in-out
                            cursor-pointer
                        ">
                            <Link to={link.link}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
            <button className="
                        bg-[#fe7700] text-[#fff] font-bold text-base px-4 py-2 rounded-2xl transition duration-300 ease-in-out
                        hover:bg-[#b15300] hover:text-[#fff] hover:font-bold hover:text-lg hover:px-4 hover:py-2
                    ">
                Connect Wallet
            </button>
        </div>
    );
};

export default Navbar;
