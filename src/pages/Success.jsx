import React, {useEffect, useState} from 'react';
import {useContract} from "@thirdweb-dev/react";

const Success = () => {
    // const txHash = window.location.href.split('/').pop();
    const { contract, isLoading, error } = useContract("0xD33615AC2cCbF54218339D79569620Db784feA17", "nft-collection")
    const [nftData, setNftData] = useState(null);

    useEffect(() => {
        const getNft = async () => {
            const tokenId = 1;
            const nft = await contract.get(tokenId);
            setNftData(nft);
        }
        getNft().then();
    }, [contract]);

    return (
        <div className="
                        flex flex-col justify-start bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            {/*h-5/6 */} p-5 min-h-screen
        ">
            <p className="
                        text-[#fe7700] font-bold text-5xl
                        mb-5 mt-2
            ">
                Success
            </p>
            <div className="
                        text-[#808080] font-bold text-2xl
                        mb-3 mt-2 w-11/12 mx-auto
                        flex flex-col justify-center items-center
            ">
                <p className="
                    text-[#fe7700] font-bold text-2xl
                    mb-3
                ">
                    Congratulations! You have successfully minted your NFT.
                </p>
                <p>
                    Name: &nbsp;
                    <span className="text-[#fe7700]">
                        {nftData?.metadata.name}
                    </span>
                </p>
                <p >
                    ID: &nbsp;
                    <span className="text-[#fe7700]">
                        {nftData?.metadata.id}
                    </span>
                </p>
                <p>
                    Description: &nbsp;
                    <span className="text-[#fe7700]">
                        {nftData?.metadata.description}
                    </span>
                </p>
            </div>
            <img src={nftData?.metadata.image} alt=""/>
            <p className="
                        text-[#808080] font-bold text-xl
                        my-5
            ">
                Owner: &nbsp;
                <span className="text-[#fe7700]">
                    {nftData?.owner}
                </span>
            </p>
        </div>
    );
};

export default Success;
