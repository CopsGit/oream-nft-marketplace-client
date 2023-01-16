import React, {createContext, useContext} from 'react';
import { Network, Alchemy } from "alchemy-sdk";
import {useAddress, useContract, useContractWrite, useDisconnect, useMetamask, useUser} from '@thirdweb-dev/react';
import {ethers} from 'ethers';
import {NATIVE_TOKEN_ADDRESS} from "@thirdweb-dev/sdk";

const StateContext = createContext();
const contractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS;
const alchemyApiKey = import.meta.env.VITE_APP_ALCHEMY_API_KEY;

export const StateContextProvider = ({children}) => {
    const {contract} = useContract(contractAddress, "marketplace")
    // const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign');

    const alchemySettings = {
        apiKey: alchemyApiKey, // Replace with your Alchemy API Key.
        network: Network.ETH_GOERLI, // Replace with your network.
    };

    const alchemy = new Alchemy(alchemySettings);

    const address = useAddress();

    const purchaseNft = async (id, quantity) => {
        const tx = await contract.buyoutListing(id, quantity);
    }

    const getActiveListings = async () => {
        const listings = await contract.call('getActiveListings');
        console.log(listings)
        return listings.map((listing, i) => ({
            owner: listing.owner,
            title: listing.title,
            description: listing.description,
            price: ethers.utils.formatEther(listing.price.toString()),
            quantity: listing.quantity.toNumber(),
            image: listing.image,
            pId: i
        }));
    }

    const getAllListings = async () => {
        const listings = await contract.call('getAllListings');
        console.log(listings)
        return listings.map((listing, i) => ({
            owner: listing.owner,
            title: listing.title,
            description: listing.description,
            price: ethers.utils.formatEther(listing.price.toString()),
            quantity: listing.quantity.toNumber(),
            image: listing.image,
            pId: i
        }));
    }

    const getAllOffersOfOneListing = async (id) => {
        const offers = await contract.getOffers(id);
        console.log(offers)
        return offers.map((offer, i) => ({
            owner: offer.owner,
            price: ethers.utils.formatEther(offer.price.toString()),
            quantity: offer.quantity.toNumber(),
            pId: i
        }));
    }

    const makeOffer = async (id, quantity, price) => {
        const tx = await contract.makeOffer(id, quantity, price);
        return tx;
    }

    const makeListing = async (assetContractAddress, tokenId, buyoutPricePerToken) => {
        const listing = {
            assetContractAddress,
            tokenId,
            startTimestamp: new Date(),
            listingDurationInSeconds: 86400,
            quantity: 1,
            currencyContractAddress: NATIVE_TOKEN_ADDRESS,
            buyoutPricePerToken,
        }

        const tx = await contract.direct.createListing(listing);
        const receipt = tx.receipt; // the transaction receipt
        const listingId = tx.id; // the id of the newly created listing

        return tx;
    }


    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                purchaseNft,
                getActiveListings,
                makeOffer,
                makeListing,
                getAllOffersOfOneListing,
                getAllListings,
                alchemy
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);