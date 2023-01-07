import React, {useEffect, useState} from 'react';
import axios from "axios";

const EthGas = () => {
    const [gasPrices, setGasPrices] = useState(null);

    let configGas = {
        method: 'get',
        url: `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.VITE_APP_ETHERSCAN_API_KEY}`,
        headers: {}
    }
    useEffect(() => {
        axios(configGas)
            .then(function (response) {
                let data = response.data.result;
                setGasPrices(data)
                console.log(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
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
                        ">Base</p>
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
    );
};

export default EthGas;
