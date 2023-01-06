import React from 'react';
import {eth} from "../../assets";
import {useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const DetailActivities = () => {
    const activities = useSelector(state => state.item.activities);

    const eventIcon = (event) => {
        switch (event) {
            case "Offer":
                return <ShoppingCartIcon className="text-[#fe7700] mr-2"/>
            case "Bid":
                return <ShoppingCartIcon className="text-[#fe7700] mr-2"/>
            case "Sale":
                return <ShoppingCartIcon className="text-[#fe7700] mr-2"/>
            case "Transfer":
                return <CompareArrowsIcon className="text-[#fe7700] mr-2"/>
            default:
                return <AutoAwesomeIcon className="text-[#fe7700] mr-2"/>
        }
    }

    return (
        <div className="
                flex flex-col justify-between items-center h-full
                w-full bg-[#e6e7e9] px-5 py-3
            ">
            <div className="
                flex flex-col justify-center justify-center w-full
                p-5 h-full rounded-2xl bg-[#fff]
                    ">
                <p className="
                       text-xl font-bold text-[#808080] mt-1 px-2
                          flex flex-row justify-center items-center
                ">
                    Item Activities
                </p>
                <div className="
                    flex flex-col justify-start items-start w-full
                    px-2 max-h-fit
                ">
                    <div className="
                                    flex flex-row justify-between items-center
                                    w-full mt-3
                                ">
                        <div className="
                                        flex flex-row justify-start items-center
                                        w-2/5
                                    ">
                            <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                Event
                            </p>
                        </div>
                        <div className="
                                        flex flex-row justify-start items-center
                                        w-2/5
                                    ">
                            <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                Price
                            </p>
                        </div>
                        <div className="
                                        flex flex-row justify-start items-center
                                        w-1/2
                                    ">
                            <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                From
                            </p>
                        </div>
                        <div className="
                                        flex flex-row justify-start items-center
                                        w-1/2
                                    ">
                            <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                To
                            </p>
                        </div>
                        <div className="
                                        flex flex-row justify-start items-center
                                        w-1/2
                                    ">
                            <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                Date
                            </p>
                        </div>
                    </div>
                    <div className="
                        flex flex-col justify-start items-start w-full
                        max-h-fit overflow-y-auto scrollbar-hide scrollbar-thumb-[#fe7700] scrollbar-track-[#fff] scrollbar-thin
                    ">
                        {
                            activities?.map((activity, index) => {
                                    return (
                                        <div className="
                                    flex flex-row justify-between items-center
                                    w-full mt-3
                                ">
                                            <div className="
                                        flex flex-row justify-start items-center
                                        w-2/5
                                    ">
                                                <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                                    {eventIcon(activity.event)}
                                                    {activity.event}
                                                </p>
                                            </div>
                                            <div className="
                                        flex flex-row justify-start items-center
                                        w-2/5
                                    ">
                                                <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                                    {
                                                        activity.price > 0 && <img src={eth} className="h-4 w-4" alt=""/>
                                                    }
                                                    {activity.price}
                                                </p>
                                            </div>
                                            <div className="
                                        flex flex-row justify-start items-center
                                        w-1/2
                                    ">
                                                <a href={`https://etherscan.io/address/${activity.from}`} className="
                                            text-lg font-bold text-[#808080] mt-1 hover:text-[#fe7700]
                                            flex flex-row justify-center items-center cursor-pointer
                                            transition-all duration-300 ease-in-out
                                        ">
                                                    {
                                                        activity.from.slice(0, 4) + '...' + activity.from.slice(39, 42)
                                                    }
                                                </a>
                                            </div>
                                            <div className="
                                        flex flex-row justify-start items-center
                                        w-1/2
                                    ">
                                                <a href={`https://etherscan.io/address/${activity.to}`} className="
                                            text-lg font-bold text-[#808080] mt-1 hover:text-[#fe7700]
                                            flex flex-row justify-center items-center cursor-pointer
                                            transition-all duration-300 ease-in-out
                                        ">
                                                    {
                                                        activity.to.slice(0, 4) + '...' + activity.to.slice(39, 42)
                                                    }
                                                </a>
                                            </div>
                                            <div className="
                                        flex flex-row justify-start items-center
                                        w-1/2
                                    ">
                                                <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                                    {activity.date}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailActivities;
