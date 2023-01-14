import React from 'react';
import {eth} from "../../assets";
import {Link} from "react-router-dom";
import {MediaRenderer} from "@thirdweb-dev/react";

const DetailMainLeft = ({curItem}) => {
    return (
        <div className="
                flex flex-col bg-[#e6e7e9] h-full w-1/2 p-5
rounded-l-3xl
            ">
            <div className="
                    flex flex-row justify-between
                    w-full lg:aspect-square xl:h-full 2xl:h-full
            ">
                <MediaRenderer
                    src={
                        curItem?.rawMetadata?.image || "ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
                    }
                    alt="itemMedia"
                    className="w-full aspect-square rounded-2xl shadow-lg"
                />
            </div>
            <div className="
                    flex flex-col justify-start items-start
                    w-full h-full bg-[#fff] py-3 rounded-2xl shadow-lg
                    mt-3 px-6
            ">
                <p className="
                        text-lg font-bold text-[#808080]
                        flex flex-row justify-center items-center
                ">
                    Collection:
                    <Link to={`/collection/${curItem?.contract.address}`} className="
                        text-lg font-bold text-[#fe7700] ml-1
                        flex flex-row justify-center items-center
                        hover:text-[#b15300]
                        transition duration-300 ease-in-out
                    ">
                        {curItem?.contract.name || "Unknown"}
                    </Link>
                </p>
                <div className="
                        flex flex-row justify-between items-center
                        w-full md:flex-col md:justify-start md:items-start
                ">
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Total Supply: {curItem?.contract.totalSupply || "Unknown"}
                    </p>
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Total Holders: {curItem?.contract.totalSupply || "Unknown"}
                    </p>
                </div>
                <div className="
                        flex flex-row justify-between items-center
                        w-full md:flex-col md:justify-start md:items-start
                ">
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Token Standard: {curItem?.contract.tokenType}
                    </p>
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Chain: Ethereum
                    </p>
                </div>
                <div className="
                        flex flex-row justify-between items-center
                        w-full md:flex-col md:justify-start md:items-start
                ">
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Rank: {curItem?.tokenId}
                    </p>
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Royalty:&nbsp;
                        {curItem?.royalty}
                        10%
                    </p>
                </div>
                <div className="
                        flex flex-row justify-between items-center
                        w-full md:flex-col md:justify-start md:items-start
                ">
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        24H Volume:&nbsp;
                        <img src={eth} className="h-4 w-4" alt=""/>
                        {/*{curItem?.Volume24h}*/}
                        100
                    </p>
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Total Volume:&nbsp;
                        <img src={eth} className="h-4 w-4" alt=""/>
                        {/*{curItem?.totalVolume}*/}
                        200
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailMainLeft;
