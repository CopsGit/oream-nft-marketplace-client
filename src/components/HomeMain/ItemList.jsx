import React from 'react';
import {eth} from "../../assets";
import Card from "../Cards/Card";
import {useSelector} from "react-redux";

const ItemList = () => {
    const data = useSelector(state => state.item.data);

    return (
        <div className="
            flex flex-col h-3/5 w-full px-5 py-3
        ">
            <p className="
                text-xl font-bold text-center text-[#fe7700]
            ">
                Top 5 Volume NFT Collections
            </p>
            <div className="
                flex flex-row h-full w-full mt-2
                justify-between items-center
            ">
                {
                    data.map((item) => (
                        <Card item={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ItemList;
