import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {eth} from "../assets";
import CollectionInfo from "../components/Cards/CollectionInfo";
import CardsList from "../components/Cards/CardsList";
import {useStateContext} from "../context";
import {MediaRenderer} from "@thirdweb-dev/react";
import {Backdrop, CircularProgress} from "@mui/material";

const Collection = () => {
    const {alchemy, getCollectionListings} = useStateContext();
    const [info, setInfo] = useState(null);
    const contractAddress = window.location.pathname.split("/")[2];
    useEffect(() => {
        alchemy && alchemy.nft
            .getNftsForContract(contractAddress)
            .then((data) => {
            setInfo(data);
        })
        const getListing = async () => {
            let listings = await getCollectionListings(contractAddress)
            console.log(listings)
            // setPrice(listing?.buyoutCurrencyValuePerToken?.displayValue)
        }
        getListing().then();
    } , [alchemy]);

    console.log(info)

    return (
        <div className="
                        flex flex-col justify-center bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
        ">

            <div className="
                w-full h-60 object-cover bg-white shadow-2xl shadow-[#ed3c00] overflow-hidden
                flex flex-row justify-center items-center
            ">
                <MediaRenderer
                    src={
                        info?.nfts[0]?.rawMetadata?.image || "ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
                    }
                    alt="itemMedia"
                    className="w-full object-cover"
                />
            </div>
            <div className="
                flex flex-row justify-start items-center
                relative top-[-70px]
            ">
                <CollectionInfo data={info?.nfts[0]} items={info?.nfts?.length}/>
            </div>

            <div className="
                w-11/12 mb-5 relative top-[-70px]
            ">
                <CardsList type={"detail"} items={info?.nfts}/>
            </div>
            <Backdrop
                sx={{ color: '#fe7700', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={info === null}
            >
                <CircularProgress color="inherit" size={60} thickness={3.9}/>
            </Backdrop>
        </div>
    );
};

export default Collection;
