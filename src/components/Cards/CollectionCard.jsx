import React, {useState} from 'react';
import {eth} from "../../assets";
import {useNavigate} from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';

const CollectionCard = ({item, type}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${type}/${item.id}`)
        scroll(0, 0)
        window.location.reload()
    }
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
                <img src={item?.image} alt="" className={`
                    h-3/5 w-full object-cover
                    transition duration-300 ease-in-out
                    `}/>
                <div className={`
                    flex flex-row justify-between items-center
                    relative bottom-1/6 h-1/6 w-full px-3
                    `}>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 text-[#fff] w-1/4 aspect-square
                        text-sm font-bold relative bottom-1/4
                    ">
                        <img className="
                            w-full aspect-square object-cover
                            rounded-xl shadow-lg cursor-pointer
                            transition duration-300 ease-in-out
                            hover:shadow-none hover:scale-105
                            border-4 border-[#fff]
                        " src={item?.image} alt=""/>
                    </div>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 text-[#fe7700] text-md font-bold
                    ">
                        {item?.name} &nbsp;
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
                            {item?.floorPrice}
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
                            {item?.Volume24h}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollectionCard;
