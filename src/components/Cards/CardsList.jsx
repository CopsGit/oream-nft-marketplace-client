import React from 'react';
import {Grid} from "@mui/material";
import CollectionCard from "./CollectionCard";
import HomeCollectionCard from "./HomeCollectionCard";
import BasicCard from "./BasicCard";

const CardsList = ({items, type, title}) => {
    return (
        <div className="
                    flex flex-col justify-between items-center
                    w-full rounded-2xl
                    mt-5 p-5 h-full
                ">
            <p className="
                        text-[#fe7700] font-bold text-2xl
                        mb-5
            ">
                {title}
            </p>
        <Grid container spacing={2} className="w-full h-full
            flex flex-row justify-start items-start
        ">
            {
                items?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={item.id}>
                        {
                            type === 'collection' ? (
                                <CollectionCard item={item} type={type}/>
                            ) : (
                                <BasicCard item={item} type={type}/>
                            )
                        }
                    </Grid>
                ))
            }
        </Grid>
        </div>
    );
};

export default CardsList;
