import React from 'react';
import {eth} from "../../assets";

const DetailMainRight = ({curItem}) => {
    return (
        <div className="
                flex flex-col bg-[#e6e7e9] h-full w-1/2 p-5
                rounded-r-3xl
            ">
            <div className="
                flex flex-col justify-center items-center
                w-full h-1/2
            ">
                <p className="text-3xl font-bold text-[#fe7700]
                w-full h-10 mb-2
                    ">{curItem?.name}</p>
                <p className="text-xs font-bold text-[#808080]
                w-full my-2
                    ">Creator:
                    <a href={`https://etherscan.io/address/${curItem?.creator}`}
                       target={"_blank"}
                       className="text-xs mx-1 font-bold text-[#fe7700]">{
                        curItem?.creator?.slice(0, 6) + "..." + curItem?.creator?.slice(38, 42)
                    }</a>
                </p>
                <p className="text-xs font-bold text-[#808080]">
                    {curItem?.description.length >
                    300 ? curItem?.description.substring(0, 300) + "..." : curItem?.description}
                </p>
                <a href={`https://etherscan.io/address/${curItem?.contractAddress}`} target={"_blank"} className="
                text-xs font-bold text-[#fe7700] mt-1 cursor-pointer
                flex flex-col items-start w-full
                    ">
                    Contract Address:
                    <span className="text-xs text-[#808080] font-bold hover:text-[#fe7700] transition-all duration-300">
                        {curItem?.contractAddress}
                    </span>
                </a>
                <div className="
                flex flex-col justify-between items-center
                w-full bg-[#fff] mt-5 py-3 px-2 rounded-2xl shadow-lg
            ">
                    <div className="
                flex flex-col justify-start items-start w-full
                px-2
                    ">
                        <p className="
                    text-xs font-bold text-[#808080] mt-1
                    flex flex-row justify-center items-center
                ">
                            <span className="text-lg font-bold text-[#808080]">Current Price: </span>
                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                            <span className="text-lg font-bold text-[#fe7700]">{curItem?.floorPrice} ETH</span>
                        </p>
                        <p className="
                    text-xs font-bold text-[#808080] mt-1
                    flex flex-row justify-center items-center
                ">
                            <span className="text-lg font-bold text-[#808080]">Lowest Ask: </span>
                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                            <span className="text-lg font-bold text-[#fe7700]">{curItem?.floorPrice} ETH</span>
                        </p>
                    </div>
                    <div className="
                flex flex-row justify-between items-center
                w-full
            ">
                        <button className="
                    flex flex-row justify-center items-center
                    w-1/2 h-10 mt-5 mx-1 rounded-xl bg-[#fe7700] text-[#fff] font-bold
                    hover:bg-[#fff] hover:text-[#fe7700] hover:border-[#fe7700] border-2 border-[#fe7700]
                    transition-all duration-300 cursor-pointer
                ">
                            Purchase
                        </button>
                        <button className="
                    flex flex-row justify-center items-center hover:border-[#fe7700] border-2 border-[#fe7700]
                    w-1/2 h-10 mt-5 mx-1 rounded-xl bg-[#fe7700] text-[#fff] font-bold
                    hover:bg-[#fff] hover:text-[#fe7700] transition-all duration-300 cursor-pointer
                ">
                            Bid
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetailMainRight;
