import React from 'react';
import {Link} from "react-router-dom";

const Bottom = () => {
    const oream = () => {
        return (
            <Link className="
                text-[#fe7700] font-bold text-sm cursor-pointer ml-1
                hover:text-[#b15300] transition duration-300 ease-in-out
            " to={"/"}>
                Oream
            </Link>
        );
    }
    return (
        <div className="
            flex flex-row justify-between items-center w-11/12 h-16 mx-auto my-3 px-5 text-[#fff] text-sm
        ">
            <div className="
                flex flex-row space-x-5
            ">
                @2023 {oream()}. All rights reserved.
            </div>
            <div className="
                flex flex-row space-x-5
            ">
                Made with ❤️ by {oream()}
            </div>
            <div className="
                flex flex-row space-x-2
            ">
                <a href=" " className="text-[#fff] hover:text-[#fe7700] transition duration-300 ease-in-out">Privacy Policy</a>
                <span> / </span>
                <a href=" " className="text-[#fff] hover:text-[#fe7700] transition duration-300 ease-in-out">Terms of Service</a>
            </div>
        </div>
    );
};

export default Bottom;
