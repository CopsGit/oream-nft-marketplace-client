import React from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import PricePanel from "./PricePanel";

const DetailRightTop = ({curItem}) => {
    return (
        <div className="
                flex flex-col justify-center items-start
                w-full h-1/2
            ">
            <p className="text-3xl font-bold text-[#fe7700]
                w-full h-10 mb-2 flex flex-row justify-between items-center
                    ">{curItem?.title}
                <span className="
                        flex flex-row justify-center items-center
                    ">
                        <FavoriteIcon fontSize={"large"} className="
                        text-[#808080] hover:text-[#fe7700] cursor-pointer transition-all duration-300
                        "/>
                    </span>
            </p>
            <p className="text-xs font-bold text-[#808080]
                w-full my-2
                    ">Collection:
                <span
                   className="text-xs mx-1 font-bold text-[#fe7700] hover:text-[#b15300] transition-all duration-300 cursor-pointer">
                    {
                        curItem?.contract.name || "Unknown"
                    }</span>
            </p>
            <p className="text-xs font-bold text-[#808080]">
                Description:&nbsp;
                {curItem?.description.length >
                300 ? curItem?.description.substring(0, 300) + "..." : curItem?.description}
            </p>
            <a href={`https://etherscan.io/address/${curItem?.contract.address}`} target={"_blank"} className="
                text-xs font-bold text-[#fe7700] mt-1 cursor-pointer
                flex flex-col items-start w-full
                    ">
                Contract Address:
                <span className="text-xs text-[#808080] font-bold hover:text-[#fe7700] transition-all duration-300">
                        {curItem?.contract.address}
                    </span>
            </a>
            <PricePanel curItem={curItem}/>
        </div>
    );
};

export default DetailRightTop;
