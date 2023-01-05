import React from 'react';
import {eth} from "../../assets";

const DetailMainLeft = ({curItem}) => {
    return (
        <div className="
                flex flex-col bg-[#e6e7e9] h-full w-1/2 p-5
rounded-l-3xl shadow-lg
            ">
            <div className="
                    flex flex-row justify-between
                    w-full lg:aspect-square xl:h-full 2xl:h-full
            ">
                <img src={curItem?.image} alt="" className="aspect-square rounded-2xl shadow-lg"/>
            </div>
            <div className="
                    flex flex-col justify-start items-start
                    w-full h-full bg-[#fff] p-3 rounded-2xl shadow-lg
                    mt-3
            ">
                <p className="
                        text-lg font-bold text-[#808080]
                        flex flex-row justify-center items-center
                ">
                    Collection: {curItem?.name}
                </p>
                <div className="
                        flex flex-row justify-between items-center
                        w-full md:flex-col md:justify-start md:items-start
                ">
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Total Supply: {curItem?.totalSupply}
                    </p>
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Total Holders: {curItem?.totalHolders}
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
                        Token Standard: ERC-721
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
                        Rank: {curItem?.rank}
                    </p>
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Royalty: {curItem?.royalty}%
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
                        24H Volume:
                        <img src={eth} className="h-4 w-4" alt=""/>
                        {curItem?.Volume24h}
                    </p>
                    <p className="
                        text-lg font-bold text-[#808080] w-1/2 md:w-full
                        flex flex-row justify-start items-center
                ">
                        Total Volume:
                        <img src={eth} className="h-4 w-4" alt=""/>
                        {curItem?.totalVolume}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailMainLeft;
