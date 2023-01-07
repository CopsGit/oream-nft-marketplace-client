import React, {useEffect, useState} from 'react';
import axios from "axios";

const CryptoPrice = () => {
    const [prices, setPrices] = useState([]);

    const coins = ["bitcoin", "ethereum", "polygon", "binance-coin", "solana", "decentraland", "the-sandbox", "axie-infinity", "flow"]

    let configCoins = {
        method: 'get',
        url: 'https://api.coincap.io/v2/assets',
        headers: {}
    };

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
        // }, 5000)
    }, [])

    return (
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
    );
};

export default CryptoPrice;
