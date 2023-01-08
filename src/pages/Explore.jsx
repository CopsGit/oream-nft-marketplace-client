import React from 'react';
import CollectionCard from "../components/Cards/CollectionCard";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";

const Explore = () => {
    const data = useSelector(state => state.item.data);
    const datas = [...data, ...data, ...data, ...data, ...data]


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
            <Grid container spacing={2} className="w-full h-full bg-[#e6e7e9]
            flex flex-row justify-start items-start
        ">
                {
                    datas.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                            <CollectionCard item={item} type={"collection"}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Explore;
