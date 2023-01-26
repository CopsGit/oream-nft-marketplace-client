import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Left from "../components/DetailMain/Left";
import Right from "../components/DetailMain/Right";
import Suggestions from "../components/DetailMain/Suggestions";
import DetailActivities from "../components/DetailMain/Activities";
import {useStateContext} from "../context";
import {Backdrop, CircularProgress} from "@mui/material";

const Details = () => {
    const {alchemy} = useStateContext();
    const rawContractAddress = window.location.pathname.split("/")[2];
    const contractAddress = rawContractAddress.split("&")[0];
    const tokenId = rawContractAddress.split("&")[1];

    const [data, setData] = useState(null);
    const [owner, setOwner] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            alchemy.nft.getNftMetadata(
                contractAddress,
                tokenId
            ).then((data) => {
                setData(data);
            })
            alchemy.nft.getOwnersForNft(
                contractAddress,
                tokenId
            ).then(
                (data) => {
                    console.log(data)
                    setOwner(data);
                }
            );
        }
        alchemy && fetchData();

    } , [alchemy]);

    console.log(data);

    return (
        <div className="
                        flex flex-col justify-center bg-[#fff] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            max-w-screen-2xl
        ">
            <div className="w-full h-full bg-[#e6e7e9]
            flex flex-row justify-center items-start
        ">
                <Left curItem={data} />
                <Right curItem={data} owner={owner}/>
            </div>
            <div className="
                flex flex-col justify-start items-center w-full h-1/2
                bg-[#e6e7e9]
            ">
                <DetailActivities/>
                <Suggestions label={"More from this collection"} data={data}/>
            </div>
            <Backdrop
                sx={{ color: '#fe7700', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={data === null}
            >
                <CircularProgress color="inherit" size={60} thickness={3.9}/>
            </Backdrop>
        </div>

    );
};

export default Details;
