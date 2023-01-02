import React, {useEffect, useState} from 'react';
import {logoQ, oream} from "../../assets";
import {Divider} from "@mui/material";
import axios from "axios";
import {Link} from "react-router-dom";


const HomeMainLeft = () => {
    const [prices, setPrices] = useState([]);
    const [gasPrices, setGasPrices] = useState(null);

    const coins = ["bitcoin", "ethereum", "polygon", "binance-coin", "solana", "decentraland", "the-sandbox", "axie-infinity", "flow"]

    let configCoins = {
        method: 'get',
        url: 'https://api.coincap.io/v2/assets',
        headers: {}
    };

    let configGas = {
        method: 'get',
        url: `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.VITE_APP_ETHERSCAN_API_KEY}`,
        headers: {}
    }

    useEffect(() => {
        // setInterval(() => {
            axios(configCoins)
                .then(function (response) {
                    let data = response.data.data;
                    let filteredData = data.filter(coin => coins.includes(coin.id))
                    setPrices(filteredData)
                    console.log(filteredData)
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios(configGas)
                .then(function (response) {
                    let data = response.data.result;
                    setGasPrices(data)
                    console.log(data)
                } )
                .catch(function (error) {
                    console.log(error);
                })
        // }, 5000)
    }, [])

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

            <div className="
                flex flex-col items-center justify-center w-full my-2
            ">
                <p className="
                    text-xs text-[#fff] font-bold mb-2
                ">
                    Crypto Price(USD)
                </p>
                {
                    prices.map((price, index) =>
                        <div key={index} className="
                    flex flex-row items-center justify-between w-full
                ">
                            <a href={price?.explorer} target={"_blank"} className="
                                text-xs text-[#8d1300] font-bold hover:text-[#fff]
                                transition duration-300 ease-in-out
                            ">
                                {price?.symbol}
                            </a>
                            <p className="
                        text-xs text-[#8d1300] font-bold
                    ">
                                {parseFloat(price?.priceUsd).toFixed(3)}
                            </p>
                        </div>
                    )
                }
            </div>

            <Divider variant="middle" sx={{
                width: "100%",
                marginY: "0.5rem",
                backgroundColor: "#8d1300",
                borderBottomWidth: 2
            }}/>

            <div className="
                flex flex-col items-center justify-center w-full my-2
            ">
                <p className="
                    text-xs text-[#fff] font-bold mb-2
                ">
                    Ethereum Gas Price(Gwei)
                </p>
                <a href={"https://etherscan.io/gastracker"} target={"_blank"} className="
                    flex flex-row items-center justify-around w-full text-xs
                    bg-[#fff] rounded-lg shadow-lg p-1 text-[#fe7700] font-bold
                    cursor-pointer mb-3
                ">
                    <div className="
                        flex flex-col items-center justify-center
                    ">
                        <p className="
                            text-[#8d1300] font-bold
                        ">Fast</p>
                        {gasPrices?.FastGasPrice}
                    </div>
                    <p>
                        |
                    </p>
                    <div className="
                        flex flex-col items-center justify-center
                    ">
                        <p className="
                            text-[#8d1300] font-bold
                        ">Average</p>
                        {gasPrices?.ProposeGasPrice}
                    </div>
                    <p>
                        |
                    </p>
                    <div className="
                        flex flex-col items-center justify-center
                    ">
                        <p className="
                            text-[#8d1300] font-bold
                        ">Slow</p>
                        {gasPrices?.SafeGasPrice}
                    </div>
                </a>
            </div>
        </div>
    );
};

export default HomeMainLeft;
