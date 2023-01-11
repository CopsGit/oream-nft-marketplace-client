import React, {useEffect, useState} from 'react';
import {useContract, Web3Button} from "@thirdweb-dev/react";
import {ethers} from "ethers";

const DropCard = ({contractAddress}) => {
    const [count, setCount] = useState({
        totalSupply: 0,
        totalMinted: 0,
        yourMinted: 0
    });
    const { contract } = useContract(contractAddress, "nft-drop")

    useEffect(() => {
        const fetchData = async () => {
            const tokenId = 0;
            const nft = await contract.get(tokenId);
            const unclaimedNFTCount = await contract.totalUnclaimedSupply();
            const claimedNFTCount = await contract.totalClaimedSupply();
            const walletAddress = "0xFF879627bE071319123e49D67cA5b982cE000000";
            const balance = await contract.balanceOf(walletAddress);
            setCount({
                totalSupply: unclaimedNFTCount.toNumber() + claimedNFTCount.toNumber(),
                totalMinted: claimedNFTCount.toNumber(),
                yourMinted: balance.toNumber()
            })
        }
        fetchData().then();
    }, [contract])

    const handleSuccess = async (tx) => {
        alert("Claimed NFT!")
        window.location.reload();
    }

    return (
        <div className="
                    flex flex-row justify-between items-center
                    w-full bg-white rounded-2xl shadow-2xl
                    mt-5 p-5 h-full
                ">
            <img className="
            w-52 h-52 bg-[#e6e7e9] rounded-2xl
            " src="https://media.discordapp.net/attachments/1003898685656141954/1059249479678701710/193edd9f4842eeb9.png?width=663&height=663" alt=""/>
            <div className="
                flex flex-col justify-start items-start
                w-7/12 h-52
            ">
                <p className="
                    text-2xl font-bold text-[#808080] mt-1 px-2
                    flex flex-row justify-center items-center
                ">
                    Collection Name: &nbsp;
                    <span className="text-[#fe7700]">
                        OreamDrop1
                    </span>
                </p>
                <p className="
                    text-lg font-bold text-[#808080] mt-1 px-2
                    flex flex-row justify-center items-center

                ">
                    Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem.
                </p>
            </div>
            <div className="
                flex flex-col justify-center items-center
                h-52 w-2/12
            ">
                <p className="
                    text-lg font-bold text-[#808080] my-1 px-2
                ">
                    You have
                    <span className="text-[#fe7700]">
                        &nbsp;{count.yourMinted}&nbsp;
                    </span>
                    NFTs from this collection
                </p>
                <p className="
                    text-xl font-bold text-[#808080] my-3 px-2
                ">
                    <span className="text-[#fe7700]">
                        {count.totalMinted}
                    </span>
                    <span>
                        &nbsp;/&nbsp;
                    </span>
                    <span className="text-[#fe7700]">
                        {count.totalSupply}
                    </span>
                </p>
                <div className="
                    text-xl font-bold text-white bg-[#fe7700] rounded-3xl
                    w-full h-12 shadow shadow-[#ed3c00] overflow-hidden
                    flex flex-row justify-center items-center
                    transition-all duration-300 ease-in-out transform hover:scale-105
                ">
                    <Web3Button
                        contractAddress={contractAddress}
                        action={(contract) => contract.erc721.claim(1)}
                        colorMode="dark"
                        accentColor="#fe7700"
                        onSuccess={handleSuccess}
                        onError={(err) => alert(err)}
                    >
                        <p className="
                    text-white
                ">
                            Claim NFT
                        </p>
                    </Web3Button>
                </div>
            </div>
        </div>
    );
};

export default DropCard;
