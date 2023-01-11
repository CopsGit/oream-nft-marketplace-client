import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const MainCarousel = () => {
    const [current, setCurrent] = React.useState(0);

    const data = useSelector(state => state.item.data);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => current === data.length - 1 ? 0 : current + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
            <div className="
                flex flex-col h-3/5 w-full px-5 pt-5
            ">
                <div className="
                    flex flex-row justify-between items-center
                ">
                    <p className="
                    text-3xl text-[#fe7700] font-bold w-full text-left mb-1
                ">
                        {data[current].name}
                    </p>
                    {/*<div className="*/}
                    {/*    flex flex-row justify-center items-center h-10 w-1/2 ml-2*/}
                    {/*    rounded-2xl shadow-lg text-[#fe7700] font-bold text-sm*/}
                    {/*    border-[#fe7700] border-2*/}
                    {/*">*/}
                    {/*    Floor Price : 0.1 ETH*/}
                    {/*</div>*/}
                </div>

                <p className="
                    text-xs text-[#808080] font-bold mb-1.5 w-full text-left
                    flex flex-row justify-center items-center h-20
                ">
                    {
                        data[current].description.length > 300 ? data[current].description.substring(0, 300) + "..." : data[current].description
                    }
                </p>
                <div className="
                    flex flex-row justify-center items-center h-50 w-full
                    bg-[#e6e7e9] rounded-2xl shadow-lg overflow-hidden
                ">
                    <button className="
                        flex flex-row justify-center items-center h-12 w-12
                        bg-[#fff] rounded-full shadow-xl text-[#fe7700]
                        hover:bg-[#fe7700] hover:shadow-none hover:text-white
                        transition-all duration-300 relative left-8
                    "
                            onClick={() => {
                                if (current > 0) {
                                    setCurrent(current - 1)
                                } else {
                                    setCurrent(data.length - 1)
                                }
                            }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <img src={data[current].image} alt=""/>
                    <button className="
                        flex flex-row justify-center items-center h-12 w-12
                        bg-[#fff] rounded-full shadow-xl text-[#fe7700]
                        hover:bg-[#fe7700] hover:shadow-none hover:text-white
                        transition-all duration-300 relative right-8
                    " onClick={
                        () => {
                            if (current < data.length - 1) {
                                setCurrent(current + 1)
                            } else {
                                setCurrent(0)
                            }
                        }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="
                    flex flex-row justify-between items-center h-10 w-full
                    mt-2 relative bottom-7
                ">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className={`
                                    flex flex-row justify-center items-center h-5 w-5
                                    rounded-full bg-[#fff] mx-1
                                    cursor-pointer hover:bg-[#fe7700]
                                    transition duration-300 ease-in-out
                                    border-2 border-[#fe7700]
                                    hover:border-[#fff] 
                                    ${current === index ? "bg-[#fe7700] border-[#fff]" : ""}
                                `} onClick={() => setCurrent(index)}></div>
                            )
                        })
                    }
                    <Link to={`/collection/${data[current].id}`} className="
                        flex flex-row justify-center items-center h-10 w-1/2 bg-white ml-2
                        cursor-pointer rounded-2xl shadow-lg text-[#fe7700] font-bold
                        border-[#fe7700] border-2 hover:bg-[#fe7700] hover:text-white
                        transition duration-300 ease-in-out
                    ">
                        View Collection
                    </Link>
                </div>
            </div>
    );
};

export default MainCarousel;
