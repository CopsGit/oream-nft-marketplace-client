import React from 'react';
import {logoQ} from "../../assets";


const HomeMainLeft = () => {
    return (
        <div className="
                flex flex-col items-center bg-[#fe7700] h-full w-3/12  p-5
                rounded-l-3xl shadow-lg
            ">
            <div className="
                flex flex-row items-center justify-between w-full mb-9
            ">
                <p className="
                text-xl text-[#8d1300] font-bold
            ">
                    INFO
                </p>
                <img height="33px" width="33px" src={logoQ} alt=""/>
            </div>
            <p className="
                text-xs text-[#8d1300]
            ">
                Oream is an NFT marketplace featuring a variety of digital collectibles including art, music, and virtual real estate.
            </p>
            <div>

            </div>
        </div>
    );
};

export default HomeMainLeft;
