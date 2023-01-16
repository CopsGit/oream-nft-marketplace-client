import React from 'react';
import CardsList from "../components/Cards/CardsList";
import DropCard from "../components/Cards/DropCard";
import {useSelector} from "react-redux";
import {useContract} from "@thirdweb-dev/react";
import {Link} from "react-router-dom";

const Drop = () => {
    const contractAddress = [
        "0x1ABae73907338E0b87aBF4B7a37C715e225a4B79",
        "0x458fFECd55C5A925ea47729A206afCc04256cA42",
        "0x744F3A1249a1ec0F1D747A5AAc70c2397BD2378d",
        "0x33B86e9e1157D1D02204E797C31042cbc397c82d",
        "0x56288E8eF6A486479dA4E9a83Ff8d5fac6d15167",
    ]

    return (
        <div className="
                        flex flex-col justify-start bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            p-5 min-h-screen max-w-screen-2xl
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
            <Link to={"/create"} className="
                w-full flex flex-row justify-center items-center
            ">
                <button className="
                        text-[#fff] font-bold text-2xl
                        my-5 bg-[#fe7700] rounded-2xl
                        transition duration-500 ease-in-out
                        transform hover:-translate-y-1 hover:scale-110
                        w-11/12 h-12
            ">
                    Mint Your Own NFTs
                </button>
            </Link>
        </div>
    );
};

export default Drop;
