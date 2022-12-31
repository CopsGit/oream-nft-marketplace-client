import React from 'react';
import {navlinks} from "../../constants";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="
            flex flex-row justify-between bg-[#fff] items-center w-5/6 h-16 mx-auto my-7 p-5
            rounded-lg shadow-lg
        ">
            <Link to={"/"}>
                <h1 className="
                    text-2xl font-bold text-[#fe7700]
                ">
                    OREAM
                </h1>
            </Link>
            <div>
                <input type="text" className="
                    w-full h-10 rounded-lg opacity-80 p-2 text-lg text-[#fe7700] font-bold
                " placeholder={"Search"} />
            </div>
            <ul className="
                    flex flex-row space-x-9 text-lg font-medium text-[#fe7700] cursor-pointer

            ">
                {
                    navlinks.map((link, index) => (
                        <li key={index} className="
                            inline-block
                            text-[#fe7700] font-bold text-lg
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
                        bg-[#fe7700] text-[#fff] font-bold text-lg px-4 py-2 rounded-lg transition duration-300 ease-in-out
                        hover:bg-[#b15300] hover:text-[#fff] hover:font-bold hover:text-lg hover:px-4 hover:py-2 hover:rounded-lg
                    ">
                Connect Wallet
            </button>
        </div>
    );
};

export default Navbar;
