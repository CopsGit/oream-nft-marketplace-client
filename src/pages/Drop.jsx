import React from 'react';
import CardsList from "../components/Cards/CardsList";
import DropCard from "../components/Cards/DropCard";
import {useSelector} from "react-redux";
import {useContract} from "@thirdweb-dev/react";

const Drop = () => {
    const contractAddress = [
        "0x1ABae73907338E0b87aBF4B7a37C715e225a4B79"
    ]

    return (
        <div className="
                        flex flex-col justify-start bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            {/*h-5/6 */} p-5 min-h-screen
        ">
            <p className="
                        text-[#fe7700] font-bold text-2xl
                        mb-5 mt-2
            ">
                Drops
            </p>
            {
                contractAddress.map((address, index) => (
                    <DropCard key={index} contractAddress={address} />
                ))
            }
        </div>
    );
};

export default Drop;
