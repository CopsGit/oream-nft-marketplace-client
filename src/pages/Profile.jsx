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
    const [pageKey, setPageKey] = useState(null);

    useEffect(() => {
        address && alchemy.nft.getNftsForOwner(
            address,
            {
                pageKey: pageKey,
                pageSize: 100,
            }
        ).then((nfts) => {
            setNft(
                nft?.concat(nfts.ownedNfts) || nfts.ownedNfts
            );
        });
    } , [address, pageKey]);

    console.log(nft);

    const handleMore = () => {
        setPageKey(nft?.pageKey);
    }

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
            <div className=" w-full h-1/2 bg-[#e6e7e9] flex flex-col justify-center items-center">
                <DetailActivities/>
                <CardsList items={nft} type="detail" title={"NFTs Owned"}/>
                {
                    nft?.length > 0 && nft?.length % 100 === 0 && (
                        <button className="
                    flex flex-row justify-center items-center w-5/6 h-10
                    bg-[#fe7700] rounded-3xl shadow-2xl shadow-[#ed3c00]
                    text-[#fff] text-xl font-bold my-3 cursor-pointer
                    border-2 border-[#fe7700] hover:bg-[#fff] hover:text-[#fe7700]
                    hover:bg-[#fff] hover:shadow-none hover:text-[#fe7700]
                    transition-all duration-300 ease-in-out
                " onClick={handleMore}>
                            Load More
                        </button>
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default Profile;
