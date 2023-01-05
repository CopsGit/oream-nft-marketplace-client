import React from 'react';

const DetailMainLeft = ({curItem}) => {
    return (
        <div className="
                flex flex-col bg-[#e6e7e9] h-full w-1/2 p-3
rounded-l-3xl shadow-lg
            ">
            <img src={curItem?.image} alt="" className="h-1/2 aspect-square rounded-2xl shadow-lg"/>
            <div className="
                flex flex-row  justify-center items-center
                w-full h-1/2
                    ">

            </div>
        </div>
    );
};

export default DetailMainLeft;
