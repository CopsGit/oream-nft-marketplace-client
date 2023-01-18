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
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                }}
            >
                {items.map((item, index) => (
                    <Grid
                        item xs={12} sm={4} md={2.4} lg={2.4} key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: {
                                xs: 170,
                                sm: 170,
                                md: 300,
                            },
                            maxWidth: {
                                xs: "100px",
                                sm: "100%",
                            }
                        }}
                    >
                        <HomeCollectionCard item={item} type={"collection"}/>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
};

export default ItemList;
