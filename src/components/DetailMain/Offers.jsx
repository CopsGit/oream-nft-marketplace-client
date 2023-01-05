import React from 'react';
import {useSelector} from "react-redux";

const Offers = ({curItem}) => {
    const offers = useSelector(state => state.item.offers);
    console.log(offers);
    return (
        <div className="
                flex flex-col justify-between items-center
                w-full bg-[#fff] mt-3 py-3 px-2 rounded-2xl shadow-lg
            ">
            <div className="
                flex flex-col justify-start items-start w-full
                px-2
                    ">
                <p className="
                       text-lg font-bold text-[#808080] mt-1
                          flex flex-row justify-center items-center
                ">
                    Offers
                </p>
                <div>
                    {
                        offers?.map((offer, index) => {
                            return (
                                <div key={index} className="
                                    flex flex-row justify-between items-center
                                    w-full
                                ">
                                    <div className="
                                        flex flex-row justify-end items-center
                                        w-1/2
                                    ">
                                        <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                            {offer?.price}
                                        </p>
                                    </div>
                                    <div className="
                                        flex flex-row justify-end items-center
                                        w-1/2
                                    ">
                                        <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                            {offer?.expiration}
                                        </p>
                                    </div>
                                    <div className="
                                        flex flex-row justify-end items-center
                                        w-1/2
                                    ">
                                        <p className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                        ">
                                            {offer?.address.slice(0, 6) + '...' + offer?.address.slice(38, 42)}
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
    );
};

export default Offers;
