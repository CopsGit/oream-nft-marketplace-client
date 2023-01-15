import React, {useEffect, useState} from 'react';
import DetailActivities from "../components/DetailMain/Activities";
import ProfileLeft from "../components/ProfileMain/Left";
import ProfileRight from "../components/ProfileMain/Right";
import Suggestions from "../components/DetailMain/Suggestions";
import {useStateContext} from "../context";
import CardsList from "../components/Cards/CardsList";

const Profile = () => {
    const {alchemy,address} = useStateContext();
    const [nft, setNft] = useState(null);

    useEffect(() => {
        address && alchemy.nft.getNftsForOwner(address).then((nfts) => {
            setNft(nfts);
        });
    } , [address]);

    console.log(nft?.ownedNfts);

    return (
        <div className="
                        flex flex-col justify-center bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            {/*h-5/6 */} p-3
        ">
            <div className="w-full h-full bg-[#e6e7e9]
            flex flex-col justify-center items-start
        ">
            <div className="
                flex flex-col justify-center items-center w-full h-1/2
                lg:flex-row lg:justify-between lg:items-start
                bg-[#e6e7e9]
            ">
                <div className="
                    flex flex-col justify-center items-center w-full h-full
                    visible lg:invisible lg:w-0 lg:h-0 max-w-[650px]
                ">
                    <ProfileRight/>
                </div>
                <ProfileLeft/>
                <div className="
                    flex flex-col justify-center items-center w-0 h-0
                    invisible lg:visible lg:w-full lg:h-full max-w-[650px]
                ">
                    <ProfileRight/>
                </div>
            </div>
            <div className=" w-full h-1/2 bg-[#e6e7e9]">
                <DetailActivities/>
                <CardsList items={nft?.ownedNfts} type="detail" title={"NFTs Owned"}/>
            </div>
            </div>
        </div>
    );
};

export default Profile;
