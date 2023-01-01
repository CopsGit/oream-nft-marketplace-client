import React from 'react';
import HomeMainLeft from "../components/HomeMain/Left";
import HomeMainRight from "../components/HomeMain/Right";

const Home = () => {
    return (
        <div className="
            flex flex-row justify-center bg-[#fff] items-center w-11/12 h-4/6 mx-auto mt-7
            rounded-3xl shadow-2xl
        ">
            <HomeMainLeft />
            <HomeMainRight />
        </div>
    );
};

export default Home;
