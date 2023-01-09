import React from 'react';
import CollectionCard from "../components/Cards/CollectionCard";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
import CardsList from "../components/Cards/CardsList";

const Explore = () => {
    const data = useSelector(state => state.item.data);
    const items = [...data, ...data, ...data, ...data, ...data]


    return (
        <div className="
                        flex flex-col justify-center bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            {/*h-5/6 */} p-3
        ">
            <p className="
                        text-[#fe7700] font-bold text-2xl
                        mb-5 mt-2
            ">
                Explore collections
            </p>
            <CardsList items={items} type={"collection"}/>
        </div>
    );
};

export default Explore;
