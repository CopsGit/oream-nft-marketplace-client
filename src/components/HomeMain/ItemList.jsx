import React from 'react';
import {eth} from "../../assets";
import Card from "../Cards/Card";

const ItemList = () => {

    const des = "A non-fungible token (NFT) collection is a group of digital assets that are unique and cannot be exchanged for other assets of equal value. Each NFT is stored on a blockchain, and they often represent ownership of a digital item, such as a piece of art, music, or video. NFT collections can be created by artists, musicians, or other creators as a way to sell their digital works directly to fans and collectors. The value of an NFT is often determined by its rarity and uniqueness, as well as the perceived value of the digital item it represents. Some NFT collections have become very valuable, with individual NFTs selling for millions of dollars. NFT collections are often displayed and managed using specialized online platforms, which provide a marketplace for buying and selling NFTs and a way for collectors to view and organize their collections."
    const data = [
        {
            id: 1,
            name: "Oream Series 1",
            image: "https://media.discordapp.net/attachments/1003898685656141954/1059241437566337055/image0.jpg?width=1101&height=484",
            description: des,
            floorPrice: 0.1,
            Volume24h: 20,
            totalVolume: 100,
            totalSupply: 1000,
            totalHolders: 600
        },
        {
            id: 2,
            name: "Oream Series 2",
            image: "https://media.discordapp.net/attachments/1003898685656141954/1059241437566337055/image0.jpg?width=1101&height=484",
            description: des,
            floorPrice: 0.1,
            Volume24h: 20,
            totalVolume: 100,
            totalSupply: 1000,
            totalHolders: 600
        },
        {
            id: 3,
            name: "Oream Series 3",
            image: "https://media.discordapp.net/attachments/1003898685656141954/1059241437566337055/image0.jpg?width=1101&height=484",
            description: des,
            floorPrice: 0.1,
            Volume24h: 20,
            totalVolume: 100,
            totalSupply: 1000,
            totalHolders: 600
        },
        {
            id: 4,
            name: "Oream Series 4",
            image: "https://media.discordapp.net/attachments/1003898685656141954/1059241437566337055/image0.jpg?width=1101&height=484",
            description: des,
            floorPrice: 0.1,
            Volume24h: 20,
            totalVolume: 100,
            totalSupply: 1000,
            totalHolders: 600
        },
        {
            id: 5,
            name: "Oream Series 5",
            image: "https://media.discordapp.net/attachments/1003898685656141954/1059241437566337055/image0.jpg?width=1101&height=484",
            description: des,
            floorPrice: 0.1,
            Volume24h: 20,
            totalVolume: 100,
            totalSupply: 1000,
            totalHolders: 600
        }
    ]

    return (
        <div className="
            flex flex-col h-3/5 w-full px-5 py-3
        ">
            <p className="
                text-xl font-bold text-center text-[#fe7700]
            ">
                Top 5 Volume NFT Collections
            </p>
            <div className="
                flex flex-row h-full w-full mt-2
                justify-between items-center
            ">
                {
                    data.map((item) => (
                        <Card item={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ItemList;
