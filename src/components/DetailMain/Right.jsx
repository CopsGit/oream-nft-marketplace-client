import React from 'react';
import {eth} from "../../assets";
import PricePanel from "./PricePanel";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Offers from "./Offers";
import DetailRightTop from "./RightTop";

const DetailMainRight = ({curItem, owner}) => {

    return (
        <div className="
                flex flex-col bg-[#e6e7e9] h-full w-1/2 p-5
                rounded-r-3xl
            ">
            <DetailRightTop curItem={curItem} owner={owner}/>
            <Offers curItem={curItem} owner={owner}/>
        </div>
    );
};

export default DetailMainRight;
