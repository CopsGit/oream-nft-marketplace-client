import React, {useState} from 'react';
import {eth} from "../../assets";
import {useNavigate} from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';
import {MediaRenderer} from "@thirdweb-dev/react";

const CollectionCard = ({item, type}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${type}/${item?.nfts[0]?.contract.address}`)
        scroll(0, 0)
        window.location.reload()
    }

    console.log(item)
    return (
        <div className="
                            flex flex-col w-full aspect-square

                        "
                onClick={handleClick}
        >
            <div className="
                h-full w-full overflow-hidden
                rounded-2xl shadow-lg cursor-pointer
                transition duration-300 ease-in-out
                hover:scale-105 bg-[#fff]
            ">
                <div className="
                    flex flex-row justify-between items-center
                    relative overflow-hidden w-full h-3/5
                ">
                    <MediaRenderer
                        src={
                            item?.nfts[0]?.rawMetadata?.image || "ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
                        }
                        alt="itemMedia"
                        className="
                    w-full object-cover aspect-square
                    transition duration-300 ease-in-out
                    "
                    />
                </div>
                <div className={`
                    flex flex-row justify-between items-center
                    relative bottom-1/6 h-1/6 w-full px-3
                    `}>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 text-[#fff] w-1/4 aspect-square
                        text-sm font-bold relative bottom-1/4
                    ">
                        <MediaRenderer
                            src={
                                item?.nfts[0]?.rawMetadata?.image || "ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
                            }
                            alt="itemMedia"
                            className="
                    w-full aspect-square object-cover
                            rounded-xl cursor-pointer
                            transition duration-300 ease-in-out
                            hover:scale-105 shadow-md shadow-[#fe7700]
                            border-4 border-[#fff] bg-[#fff]
                    "
                        />
                    </div>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 text-[#fe7700] text-md font-bold
                    ">
                        {item?.nfts[0]?.contract?.name} &nbsp;
                        <VerifiedIcon className="text-[#fe7700]"/>
                    </div>
                </div>
                <div className="
                            flex flex-row justify-around items-center
                            h-1/6 w-11/12 bg-white mx-auto
                            border-2 border-[#fe7700] rounded-2xl
                            my-2 cursor-pointer
                        ">
                    <div className="
                                flex flex-row justify-center items-center
                                w-1/3
                            ">
                        <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                            {item?.floorPrice || "N/A"}
                        </div>
                    </div>
                    <div className="
                                flex flex-row justify-center items-center
                                    text-[#fe7700] font-bold text-xs
                                ">
                        |
                    </div>
                    <div className="
                                flex flex-row justify-center items-center
                                w-1/3
                            ">
                        <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                            {item?.Volume24h || "N/A"}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollectionCard;
