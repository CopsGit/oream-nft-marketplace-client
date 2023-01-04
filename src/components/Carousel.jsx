import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = (props) => {
    const {onClick} = props;
    return (
        <div
            className="
flex flex-row justify-center items-center h-12 w-12
                        bg-[#fff] rounded-full shadow-xl text-[#fe7700]
                        hover:bg-[#fe7700] hover:shadow-none hover:text-white
                        transition-all duration-300 relative right-8
            "
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );
}

const NextArrow = (props) => {
    const {onClick} = props;
    return (
        <div
            className="
                flex flex-row justify-center items-center h-12 w-12
                        bg-[#fff] rounded-full shadow-xl text-[#fe7700]
                        hover:bg-[#fe7700] hover:shadow-none hover:text-white
                        transition-all duration-300 relative left-8
            "
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // dotsClass: "slick-dots slick-thumb",
    };
    return (
        <div className="w-10/12 h-full
            flex flex-col justify-center items-center
        ">
            <div className={
                "w-full h-96 bg-[#fff] rounded-xl shadow-xl relative"
            }>
                <Slider {...settings}>
                    <div className="w-full h-full bg-gray-300">
                        <h3 className="text-center text-5xl font-bold text-gray-700">1</h3>
                    </div>
                    <div className="w-full h-full bg-gray-400">
                        <h3 className="text-center text-5xl font-bold text-gray-700">2</h3>
                    </div>
                    <div className="w-full h-full bg-gray-500">
                        <h3 className="text-center text-5xl font-bold text-gray-700">3</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
