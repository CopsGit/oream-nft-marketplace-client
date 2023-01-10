import React from 'react';
import {Grid} from "@mui/material";

const InfoPanel = () => {
    return (
        <div className="
                    flex flex-col justify-start items-center
                     w-full bg-white rounded-2xl shadow-2xl
                    mt-5 p-3
                ">
            <Grid
                container spacing={2}
                direction="row"
                justifyContent="space-around"
            >
                <Grid item className="
                    text-xl font-bold text-[#808080] mt-1 px-2
                    flex flex-row justify-center items-center
                ">
                    Following: 99
                </Grid>
                <Grid item className="
                    text-xl font-bold text-[#808080] mt-1 px-2
                    flex flex-row justify-center items-center
                ">
                    Followers: 66
                </Grid>
                <Grid item className="
                    text-xl font-bold text-[#808080] mt-1 px-2
                    flex flex-row justify-center items-center
                ">
                    NFT Owned: 33
                </Grid>
                <Grid item className="
                    text-xl font-bold text-[#808080] mt-1 px-2
                    flex flex-row justify-center items-center
                ">
                    NFT Sold: 3
                </Grid>
            </Grid>
        </div>
    );
};

export default InfoPanel;
