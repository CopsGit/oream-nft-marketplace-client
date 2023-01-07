import React, {useEffect, useState} from 'react';
import {logoQ, oream} from "../../assets";
import {Divider} from "@mui/material";
import axios from "axios";
import HomeInfo from "./HomeInfo";
import EthGas from "./EthGas";
import CryptoPrice from "./CryptoPrice";


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
                <div className="
                    h-[64px] w-[64px] bg-[#fff] rounded-full
                    shadow-inner shadow-[#952500]
                ">
                    <img height="64px" width="64px" src={oream} alt=""/>
                </div>
            </div>
            <p className="
                text-xs text-[#8d1300] my-3
            ">
                Oream is an NFT marketplace featuring a variety of digital collectibles including art, music, and
                virtual real estate.
            </p>
            <ul className="
                flex flex-row items-center justify-around w-full text-xs
                bg-[#fff] rounded-lg shadow-lg p-1 text-[#fe7700] font-bold
                cursor-pointer mb-3
            ">
                <li>
                    Trade
                </li>
                <li>
                    |
                </li>
                <li>
                    Offer
                </li>
                <li>
                    |
                </li>
                <li>
                    Alert
                </li>
                <li>
                    |
                </li>
                <li>
                    Chat
                </li>
            </ul>

            <Divider variant="middle" sx={{
                width: "100%",
                marginY: "0.5rem",
                backgroundColor: "#8d1300",
                borderBottomWidth: 2
            }}/>

            <CryptoPrice/>

            <Divider variant="middle" sx={{
                width: "100%",
                marginY: "0.5rem",
                backgroundColor: "#8d1300",
                borderBottomWidth: 2
            }}/>

            <EthGas/>

            <HomeInfo/>
        </div>
    );
};

export default HomeMainLeft;
