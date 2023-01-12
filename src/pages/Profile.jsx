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
                flex flex-row justify-between items-start w-full h-1/2
                bg-[#e6e7e9]
            ">
                <ProfileLeft/>
                <ProfileRight/>
            </div>
            <div className=" w-full h-1/2 bg-[#e6e7e9]">
                <DetailActivities/>
                <CardsList items={nft?.ownedNfts} type="nfts" title={"NFTs Owned"}/>
            </div>
            </div>
        </div>
    );
};

export default Profile;
