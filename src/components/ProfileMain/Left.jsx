import React from 'react';
import {Grid} from "@mui/material";
import Social from "./Social";
import InfoPanel from "./InfoPanel";
import {useStateContext} from "../../context";

const ProfileLeft = () => {
    const {address} = useStateContext();


    return (
        <div className="
            flex flex-col justify-start items-center h-full
            p-5
        ">
            <div className="

            ">
                <p className="
                    text-3xl font-bold text-[#808080] mb-2
                ">
                    WHATEVER USERNAME
                </p>
                <div className="
                    mb-2 text-2xl font-bold text-[#808080]
                    flex flex-col
                ">
                    Address:
                    <a href={`
                        https://etherscan.io/address/${address}
                        `} className="
                        text-[#808080] font-bold text-base
                        hover:text-[#fe7700] cursor-pointer
                        transition-all duration-300 ease-in-out
                    ">
                        {address}
                    </a>
                </div>
                <p className="
                    text-base text-[#808080]
                ">
                    A non-fungible token (NFT) collection is a group of digital assets that are unique and cannot be exchanged for other assets of equal value. Each NFT is stored on a blockchain, and they often represent ownership of a digital item, such as a piece of art, music, or video.
                </p>
                <InfoPanel/>
                <Social/>
            </div>
        </div>
    );
};

export default ProfileLeft;
