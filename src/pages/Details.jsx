import React from 'react';
import {useSelector} from "react-redux";
import Left from "../components/DetailMain/Left";
import Right from "../components/DetailMain/Right";
import Suggestions from "../components/DetailMain/Suggestions";
import DetailActivities from "../components/DetailMain/Activities";

const Details = () => {
    const curItemId = window.location.pathname.split("/")[2];
    const curItem = useSelector(state => state.item.data.find(item => item.id === parseInt(curItemId)));
    console.log(curItem);

    return (
        <div className="
                        flex flex-col justify-center bg-[#fff] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            {/*h-5/6 */}
        ">
            <div className="w-full h-full bg-[#e6e7e9]
            flex flex-row justify-center items-start
        ">
                <Left curItem={curItem}/>
                <Right curItem={curItem}/>
            </div>
            <div className="
                flex flex-col justify-start items-center w-full h-1/2
                bg-[#e6e7e9]
            ">
                <DetailActivities/>
                <Suggestions/>
            </div>
        </div>

    );
};

export default Details;
