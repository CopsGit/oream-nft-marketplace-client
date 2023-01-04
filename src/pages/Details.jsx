import React from 'react';
import {useSelector} from "react-redux";

const Details = () => {
    const curItemId = window.location.pathname.split("/")[2];
    const curItem = useSelector(state => state.item.data.find(item => item.id === parseInt(curItemId)));
    console.log(curItem);

    return (
        <div className="
                        flex flex-row justify-center bg-[#fff] items-center w-11/12 h-5/6 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00]
        ">
            <div className="w-full h-full
            flex flex-row justify-center items-center
        ">
                <div className="
                flex flex-col bg-[#e6e7e9] h-full w-1/2 p-3

            ">
                    <img src={curItem?.image} alt="" className="w-full h-1/2"/>
                    <div className="
                flex flex-row  justify-center items-center
                w-full h-1/2
                    ">

                    </div>
                </div>
                <div className="
                flex flex-col bg-[#e6e7e9] h-full w-1/2 px-3
                rounded-r-3xl shadow-lg
            ">
                    <p className="text-3xl font-bold text-[#fe7700]">{curItem?.name}</p>
                    <p className="text-xs font-bold text-[#fe7700]">{curItem?.description}</p>

                </div>
            </div>
        </div>

    );
};

export default Details;
