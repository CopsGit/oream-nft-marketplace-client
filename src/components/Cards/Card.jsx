import React, {useState} from 'react';
import {eth} from "../../assets";
import {Link} from "react-router-dom";

const Card = ({item}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="
                            flex flex-col h-full w-1/6
                        ">
            <div className="
                h-full w-full overflow-hidden
                rounded-2xl shadow-lg cursor-pointer
                transition duration-300 ease-in-out
                hover:shadow-none hover:scale-105
            " onMouseEnter={
                (e) => {setShow(true)}
            }
                    onMouseLeave={
                        (e) => {setShow(false)}
                    }
            >
                <img src={item.image} alt="" className={`
                    h-full w-full object-cover ${show ? "opacity-50" : "opacity-100"}
                    transition duration-300 ease-in-out
                    `}/>
                <div className={`
                    flex flex-col justify-center items-center
                    relative bottom-3/4 ${show ? "opacity-100" : "opacity-0"}
                    `}>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 w-11/12 shadow-xl text-[#fff]
                        text-sm font-bold

                    ">
                        {item.name}
                    </div>
                    <div className="
                        flex flex-row justify-center items-center
                        h-12 w-11/12 shadow-xl text-[#fff]
                        text-xs font-bold
                    ">
                        Floor Price:
                        <div className="
                                    text-xs font-bold text-[#fff]
                                    flex flex-row justify-center items-center
                                ">
                            <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                            {item.floorPrice}
                        </div>
                    </div>
                    <Link to={`/collection/${item.id}`}  className="
                    flex flex-row justify-center items-center h-1/5 w-4/5
                    bg-[#fff] rounded-xl shadow-xl text-[#fe7700]
                    hover:bg-[#fe7700] hover:shadow-none hover:text-white
                    transition-all duration-300 ease-in-out
                ">
                        View
                    </Link>
                </div>
            </div>
            <div className="
                            flex flex-row justify-around items-center
                            h-1/6 w-full bg-white
                            border-2 border-[#fe7700] rounded-2xl
                            my-2 cursor-pointer
                        ">
                <div className="
                                flex flex-row justify-center items-center
                                w-1/3
                            ">
                    <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                        <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                        {item.floorPrice}
                    </div>
                </div>
                <div className="
                                flex flex-row justify-center items-center
                                    text-[#fe7700] font-bold text-xs
                                ">
                    |
                </div>
                <div className="
                                flex flex-row justify-center items-center
                                w-1/3
                            ">
                    <div className="
                                    text-xs font-bold text-[#fe7700]
                                    flex flex-row justify-center items-center
                                ">
                        <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                        {item.Volume24h}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
