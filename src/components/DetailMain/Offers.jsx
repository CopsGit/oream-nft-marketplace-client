import React from 'react';
import {useSelector} from "react-redux";
import {eth} from "../../assets";

const Offers = ({curItem}) => {
    const offers = useSelector(state => state.item.offers);
    console.log(offers);
    return (
        <div className="
                flex flex-col justify-between items-center h-1/2
                w-full bg-[#fff] py-3 px-2 rounded-2xl shadow-lg
            ">
            <div className="
                flex flex-col justify-start items-start w-full
                px-2 h-full
                    ">
                <p className="
                       text-xl font-bold text-[#808080] mt-1 px-2
                          flex flex-row justify-center items-center
                ">
                    Offers
                </p>
                <div className="
                    flex flex-col justify-start items-start w-full
                    px-2 h-full overflow-y-scroll scrollbar-hide scrollbar-thumb-[#fe7700] scrollbar-track-[#fff] scrollbar-thin
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
                                Price
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
                                Expiration
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
                                Address
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
                                Actions
                            </p>
                        </div>
                    </div>
                    {
                        offers?.map((offer, index) => {
                            return (
                                <div key={index} className="
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
                                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                                            {offer?.price}
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
                                            {offer?.expiration}
                                        </p>
                                    </div>
                                    <div className="
                                        flex flex-row justify-start items-center
                                        w-1/2
                                    ">
                                        <a href={`https://etherscan.io/address/${offer?.address}`} className="
                                            text-lg font-bold text-[#808080] mt-1
                                            flex flex-row justify-center items-center
                                            hover:text-[#fe7700] transition duration-300 ease-in-out
                                        ">
                                            {offer?.address.slice(0, 4) + '...' + offer?.address.slice(39, 42)}
                                        </a>
                                    </div>
                                    <div className="
                                        flex flex-row justify-center items-center
                                        w-1/2 h-full
                                    ">
                                        <button className="
                                              flex flex-row justify-center items-center hover:border-[#fe7700] border-2 border-[#fe7700]
                                                w-full h-10 mx-1 rounded-xl bg-[#fe7700] text-[#fff] font-bold hover:bg-[#fff] hover:text-[#fe7700] transition-all duration-300 cursor-pointer
                                        ">
                                            Accept
                                        </button>
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
