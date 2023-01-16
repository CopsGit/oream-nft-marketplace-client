import React from 'react';
import HomeMainLeft from "../components/HomeMain/Left";
import HomeMainRight from "../components/HomeMain/Right";
import Layout from "./Layout";

const Home = () => {
    return (
        // <Layout>
            <div className="
            flex flex-row justify-center bg-[#fff] items-center w-11/12 h-5/6 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] max-w-screen-2xl
        ">
                <HomeMainLeft />
                <HomeMainRight />
            </div>
        // </Layout>
    );
};

export default Home;
