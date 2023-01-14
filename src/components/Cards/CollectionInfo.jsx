import React from 'react';
import {eth} from "../../assets";
import {MediaRenderer} from "@thirdweb-dev/react";

const CollectionInfo = ({data, items}) => {
    return (
        <div className="
                flex flex-col justify-center items-center
                w-full h-full p-5
            ">
            <div className="
                    flex flex-col justify-center items-center
                    relative bottom-1/4
                ">
                <MediaRenderer
                    src={
                        data?.rawMetadata?.image || "ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
                    }
                    alt="itemMedia"
                    className="w-1/6 aspect-square object-cover
                            rounded-xl shadow-lg cursor-pointer
                            transition duration-300 ease-in-out
                            hover:shadow-none hover:scale-105
                            border-4 border-[#fff] bg-white
                    "
                />
            </div>
            <div className="
                    flex flex-col justify-center items-center
                    w-10/12
                ">
                <p className="
                    text-[#fe7700] text-2xl font-bold my-2
                ">
                    {data?.contract?.name || "Unnamed Collection"}
                </p>
                <p className="
                     text-sm font-bold my-1 text-[#808080]
                ">
                    Contract Address: &nbsp;
                    <a href={`
                    https://goerli.etherscan.io/address/${data?.contract?.address}
                `} className="
                    hover:text-[#b15300] transition duration-300 ease-in-out text-[#fe7700]
                ">
                        {data?.contract?.address}
                    </a>
                </p>
                <p className="
                    text-[#808080] text-md my-2
                ">
                    {
                        data?.description?.length > 300 ? data?.description?.slice(0, 300) + "..." : data?.description
                    }
                </p>
                <div className="
                    flex flex-row justify-start items-center
                    w-full h-1/6 mx-auto my-2
                ">
                    <p className="
                        text-[#808080] text-md mr-3
                    ">
                        Items:&nbsp;
                        <span className="
                            text-[#fe7700] text-md font-bold
                            ">
                                {items || 0}
                            </span>
                    </p>
                    <p className="
                        text-[#808080] text-md mr-3
                    ">
                        Creator Royalty:&nbsp;
                        <span className="
                            text-[#fe7700] text-md font-bold
                            ">
                                {data?.royalty || "N/A"}%
                            </span>
                    </p>
                    <p className="
                        text-[#808080] text-md mr-3
                    ">
                        Chain:&nbsp;
                        <span className="
                            text-[#fe7700] text-md font-bold
                            ">
                                Ethereum
                            </span>
                    </p>
                </div>
                <div className="
                    flex flex-row justify-between items-center
                    w-full h-1/6 mx-auto
                    ">
                    <div className="
                        flex flex-col justify-center items-start
                        ">
                        <p className="
                            text-[#fe7700] text-lg font-bold
                            flex flex-row justify-center items-center
                            ">
                            <img src={eth} className="h-4 w-4" alt=""/>
                            {data?.totalVolume || "100"}
                        </p>
                        <p className="
                            text-[#808080] text-sm
                            ">
                            total volume
                        </p>
                    </div>
                    <div className="
                        flex flex-col justify-center items-start
                        ">
                        <p className="
                            text-[#fe7700] text-lg font-bold
                            flex flex-row justify-center items-center
                            ">
                            <img src={eth} className="h-4 w-4" alt=""/>
                            {data?.floorPrice || "0.99"}
                        </p>
                        <p className="
                            text-[#808080] text-sm
                            ">
                            floor price
                        </p>
                    </div>
                    <div className="
                        flex flex-col justify-center items-start
                        ">
                        <p className="
                            text-[#fe7700] text-lg font-bold
                            ">
                            {items || "0"}
                        </p>
                        <p className="
                            text-[#808080] text-sm
                            ">
                            total holders
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CollectionInfo;
