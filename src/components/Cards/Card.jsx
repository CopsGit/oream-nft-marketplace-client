import React from 'react';
import {eth} from "../../assets";

const Card = ({item}) => {

    const hover = <div className="
                    flex flex-row justify-center items-center
                    relative bottom-1/2
                ">
        <button className="
                    flex flex-row justify-center items-center h-1/5 w-4/5
                    bg-[#fff] rounded-xl shadow-xl text-[#fe7700]
                    hover:bg-[#fe7700] hover:shadow-none hover:text-white
                    transition-all duration-300 ease-in-out
                ">
            View
        </button>
    </div>

    const handleEnter = (e) => {
        // e.target.style.transform = "scale(1.1)";
        // e.target.style.transition = "all 0.3s ease-in-out";
        // e.target.style.zIndex = 1;
        e.target.appendChild(hover);
    }

    return (
        <div className="
                            flex flex-col h-full w-1/6
                        ">
            <div className="
                h-full w-full overflow-hidden
                rounded-2xl shadow-lg cursor-pointer
                transition duration-300 ease-in-out
                hover:shadow-none hover:scale-105
            " onMouseEnter={
                (e) => handleEnter(e)
            }>
                <img src={item.image} alt="" className="
                    h-full w-full object-cover
                "/>
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
                        {item.floorPrice}
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
                        {item.Volume24h}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
