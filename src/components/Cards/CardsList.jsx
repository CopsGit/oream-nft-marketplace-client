import React from 'react';
import {Grid} from "@mui/material";
import CollectionCard from "./CollectionCard";
import HomeCollectionCard from "./HomeCollectionCard";

const CardsList = ({items, type}) => {
    return (
        <Grid container spacing={2} className="w-full h-full bg-[#e6e7e9]
            flex flex-row justify-start items-start
        ">
            {
                items?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                        {
                            type === 'collection' ? (
                                <CollectionCard item={item} type={type}/>
                            ) : (
                                <HomeCollectionCard item={item} type={type}/>
                            )
                        }
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default CardsList;
