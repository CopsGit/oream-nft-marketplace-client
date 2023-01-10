import React from 'react';
import {useSelector} from "react-redux";
import HomeCollectionCard from "../Cards/HomeCollectionCard";
import BasicCard from "../Cards/BasicCard";
import CardsList from "../Cards/CardsList";

const Suggestions = () => {
    const items = useSelector(state => state.item.data).slice(0, 4);
    return (
        <div className="
                flex flex-col justify-between items-center h-full
                w-full bg-[#e6e7e9] p-5
            ">
            <div className="
                flex flex-col justify-center justify-center w-full
                p-2 h-full rounded-2xl
                    ">
                <p className="
                        text-xl font-bold text-[#808080] my-2
                        flex flex-row justify-center items-center
                ">
                    More from this collection
                </p>
                <div className="
                    flex flex-row justify-around items-center w-full
                    h-64
                        ">
                    <CardsList type={"detail"} items={items}/>
                </div>

            </div>
        </div>
    );
};

export default Suggestions;
