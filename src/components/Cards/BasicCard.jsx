import React from 'react';
import VerifiedIcon from "@mui/icons-material/Verified";
import {eth} from "../../assets";
import {useNavigate} from "react-router-dom";
import {MediaRenderer} from "@thirdweb-dev/react";

const BasicCard = ({item, type}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${type}/${item.contract.address}&${item.tokenId}`)
        scroll(0, 0)
        window.location.reload()
    }
    return (
        <div className="
                            flex flex-col w-full

                        "
             onClick={handleClick}
        >
            <div className="
                h-full w-full overflow-hidden
                rounded-2xl shadow-lg cursor-pointer
                transition duration-300 ease-in-out
                hover:scale-105 bg-[#fff]
            ">
                <MediaRenderer
                    src={
                        item?.rawMetadata?.image || "ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
                    }
                    alt="itemMedia"
                    className="h-full w-full object-cover
                        aspect-square
                    "
                />
                <div className={`
                    flex flex-row justify-between items-center
                    relative bottom-1/6 h-1/6 w-full px-3
                    `}>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 text-[#fe7700] text-md font-bold
                    ">
                        {item?.title} &nbsp;
                        #{
                        item?.tokenId < 1000 ? item?.tokenId < 100 ? item?.tokenId < 10 ?
                            "000" + `${parseInt(item?.tokenId)+1}` : "00" + `${parseInt(item?.tokenId)+1}` : "0" + `${parseInt(item?.tokenId)+1}` : `${parseInt(item?.tokenId)+1}`
                    }
                    </div>
                </div>
                <div className="
                            flex flex-row justify-around items-center
                            h-1/5 w-11/12 bg-white mx-auto
                            border-2 border-[#fe7700] rounded-2xl
                            my-3 cursor-pointer
                        ">
                    <div className="
                                flex flex-row justify-center items-center
                                w-1/4
                            ">
                        <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                            {item?.floorPrice ? item?.floorPrice : "Unlisted"}
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
                                w-2/4
                            ">
                        <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                            Rank: &nbsp;
                            <span className="
                                        text-[#fe7700] font-bold text-xs
                                    ">
                                        {
                                            item?.tokenId < 10000 ? item?.contract?.totalSupply ? `${parseInt(item?.tokenId) + 1}/${item?.contract?.totalSupply}` : `${parseInt(item?.tokenId) + 1}` : `${parseInt(item?.tokenId) + 1}`
                                        }
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BasicCard;
