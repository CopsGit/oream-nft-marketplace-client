import React from 'react';
import MainCarousel from "./MainCarousel";
import ItemList from "./ItemList";
import {Divider} from "@mui/material";

const HomeMainRight = () => {
    return (
        <div className="
                flex flex-col bg-[#e6e7e9] h-full w-full p-5
                rounded-r-3xl shadow-lg
            ">
            <MainCarousel />

            <div className="
                flex flex-row  justify-center items-center
            ">
                <Divider variant="middle" sx={{
                    width: "60%",
                    backgroundColor: "#fe7700",
                    borderBottomWidth: 1.5
                }}/>
            </div>


            <ItemList />
        </div>
    );
};

export default HomeMainRight;
