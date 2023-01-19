import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useStateContext} from "../../context";
import {MediaRenderer} from "@thirdweb-dev/react";

const MainCarousel = ({items}) => {
    const [current, setCurrent] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => current === items?.length - 1 ? 0 : current + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
            <div className="
                flex flex-col h-3/5 w-full px-5 pt-5
            ">
                <div className="
                    flex flex-row justify-between items-center
                ">
                    <p className="
                    text-3xl text-[#fe7700] font-bold w-full text-left mb-1
                ">
                        {items[current]?.nfts[0]?.contract.name}
                    </p>
                </div>

                <p className="
                    text-xs text-[#808080] font-bold mb-1.5 w-full text-left
                    flex flex-row justify-center items-center h-20
                ">
                    {
                        items[current]?.nfts[0]?.description?.length > 300 ? items[current]?.nfts[0]?.description.substring(0, 300) + "..." : items[current]?.nfts[0]?.description
                    }
                </p>
                <div className="
                    flex flex-row justify-center items-center h-96 w-full
                    bg-[#e6e7e9] rounded-2xl shadow-lg overflow-hidden
                ">
                    <button className="
                        flex flex-row justify-center items-center h-12 w-12
                        bg-[#fff] rounded-full shadow-xl text-[#fe7700]
                        hover:bg-[#fe7700] hover:shadow-none hover:text-white
                        transition-all duration-300 relative left-8
                    "
                            onClick={() => {
                                if (current > 0) {
                                    setCurrent(current - 1)
                                } else {
                                    setCurrent(items?.length - 1)
                                }
                            }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <MediaRenderer
                        src={
                            items[current]?.nfts[0].rawMetadata?.image || "ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
                        }
                        alt="itemMedia"
                        className="w-full object-cover h-50
                    "
                    />
                    <button className="
                        flex flex-row justify-center items-center h-12 w-12
                        bg-[#fff] rounded-full shadow-xl text-[#fe7700]
                        hover:bg-[#fe7700] hover:shadow-none hover:text-white
                        transition-all duration-300 relative right-8
                    " onClick={
                        () => {
                            if (current < items?.length - 1) {
                                setCurrent(current + 1)
                            } else {
                                setCurrent(0)
                            }
                        }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="
                    flex flex-row justify-between items-center h-10 w-full
                    mt-2 relative bottom-7
                ">
                    {
                        items?.map((item, index) => {
                            return (
                                <div key={index} className={`
                                    flex flex-row justify-center items-center h-5 w-5
                                    rounded-full bg-[#fff] mx-1
                                    cursor-pointer hover:bg-[#fe7700]
                                    transition duration-300 ease-in-out
                                    border-2 border-[#fe7700]
                                    hover:border-[#fff] 
                                    ${current === index ? "bg-[#fe7700] border-[#fff]" : ""}
                                `} onClick={() => setCurrent(index)}></div>
                            )
                        })
                    }
                    <Link to={`/collection/${items[current]?.nfts[0].contract.address}`} className="
                        flex flex-row justify-center items-center h-10 w-1/2 bg-white ml-2
                        cursor-pointer rounded-2xl shadow-lg text-[#fe7700] font-bold
                        border-[#fe7700] border-2 hover:bg-[#fe7700] hover:text-white
                        transition duration-300 ease-in-out
                    ">
                        View Collection
                    </Link>
                </div>
            </div>
    );
};

export default MainCarousel;
