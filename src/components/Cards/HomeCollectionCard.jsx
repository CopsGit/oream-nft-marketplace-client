import React, {useState} from 'react';
import {eth} from "../../assets";
import {Link, useNavigate} from "react-router-dom";
import {MediaRenderer} from "@thirdweb-dev/react";

const HomeCollectionCard = ({item, type}) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${type}/${item.nfts[0].contract.address}`)
        scroll(0, 0)
        window.location.reload()
    }

    return (
        <div className="
                            flex flex-col h-full
                        ">
            <div className="
                h-full w-full overflow-hidden
                rounded-2xl shadow-lg cursor-pointer
                transition duration-300 ease-in-out
                hover:shadow-none hover:scale-105
            " onMouseEnter={
                (e) => {setShow(true)}
            }
                    onMouseLeave={
                        (e) => {setShow(false)}
                    }
            >
                <img src={`https://gateway.ipfscdn.io/ipfs/${item?.nfts[0].rawMetadata?.image?.split("ipfs://")[1]}`} alt="" className={`
                    h-full w-full object-cover ${show ? "opacity-50" : "opacity-100"}
                    transition duration-300 ease-in-out
                    `}/>
                <div className={`
                    flex flex-col justify-center items-center
                    relative bottom-3/4 ${show ? "opacity-100" : "opacity-0"}
                    `}>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 w-11/12 text-[#fff]
                        text-sm font-bold
                    ">
                        {item?.nfts[0]?.contract.name}
                    </div>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 w-11/12 text-[#fff]
                        text-xs font-bold
                    ">
                        Floor Price:
                        <div className="
                                    text-xs font-bold text-[#fff]
                                    flex flex-row justify-center items-center
                                ">
                            <img src={eth} className="h-4 w-4" alt=""/>
                            {0.1}
                        </div>
                    </div>
                    <button onClick={handleClick} className="
                    flex flex-row justify-center items-center h-1/5 w-4/5
                    bg-[#fff] rounded-xl shadow-xl text-[#fe7700]
                    hover:bg-[#fe7700] hover:shadow-none hover:text-white
                    transition-all duration-300 ease-in-out
                ">
                        View
                    </button>
                </div>
            </div>
            <div className="
                            flex flex-row justify-around items-center
                            h-1/6 w-full bg-white
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
                        {0.1}
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
                        {20}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCollectionCard;
