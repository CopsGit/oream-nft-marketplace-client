import React from 'react';
import {useSelector} from "react-redux";
import Left from "../components/DetailMain/Left";
import Right from "../components/DetailMain/Right";

const Details = () => {
    const curItemId = window.location.pathname.split("/")[2];
    const curItem = useSelector(state => state.item.data.find(item => item.id === parseInt(curItemId)));
    console.log(curItem);

    return (
        <div className="
                        flex flex-row justify-center bg-[#fff] items-center w-11/12 h-5/6 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00]
        ">
            <div className="w-full h-full
            flex flex-row justify-center items-center
        ">
                <Left curItem={curItem}/>
                <Right curItem={curItem}/>
            </div>
        </div>

    );
};

export default Details;
