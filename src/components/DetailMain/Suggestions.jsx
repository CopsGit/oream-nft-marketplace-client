import React from 'react';
import {useSelector} from "react-redux";
import Card from "../Cards/Card";

const Suggestions = () => {
    const items = useSelector(state => state.item.data)
    return (
        <div className="
                flex flex-col justify-between items-center h-full
                w-full bg-[#e6e7e9] p-5
            ">
            <div className="
                flex flex-col justify-center justify-center w-full
                p-2 h-full rounded-2xl shadow-lg bg-[#fff]
                    ">
                <p className="
                        text-xl font-bold text-[#808080] my-2
                        flex flex-row justify-center items-center
                ">
                    More from this collection
                </p>
                <div className="
                    flex flex-row justify-around items-center w-full
                    h-full
                        ">
                    {
                        items.map(item => (
                            <Card item={item}/>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Suggestions;
