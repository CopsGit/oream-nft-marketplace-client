import React from 'react';
import {eth} from "../../assets";
import HomeCollectionCard from "../Cards/HomeCollectionCard";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";

const ItemList = ({items}) => {

    return (
        <div className="
            flex flex-col h-3/5 w-full px-5 py-3
        ">
            <p className="
                text-xl font-bold text-center text-[#fe7700] mb-3
            ">
                Top 5 Volume NFT Collections
            </p>
            <Grid
                container
                spacing={1}
                className="
                    h-full w-full
                "
            >
                {items.map((item, index) => (
                    <Grid
                        item xs={12} sm={4} md={3} lg={2.4} key={index}
                    >
                        <HomeCollectionCard item={item} type={"collection"}/>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
};

export default ItemList;
