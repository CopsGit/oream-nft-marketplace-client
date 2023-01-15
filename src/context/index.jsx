import React, {createContext, useContext} from 'react';
import { Network, Alchemy } from "alchemy-sdk";
import {useAddress, useContract, useContractWrite, useDisconnect, useMetamask, useUser} from '@thirdweb-dev/react';
import {ethers} from 'ethers';

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

    const makeListing = async (assetContractAddress, currencyContractAddress, buyoutPricePerToken, listingDurationInSeconds, tokenId) => {
        const listing = {
            // address of the NFT contract the asset you want to list is on
            assetContractAddress,
            // token ID of the asset you want to list
            tokenId,
            // when should the listing open up for offers
            startTimestamp: new Date(),
            // how long the listing will be open for
            listingDurationInSeconds,
            // how many of the asset you want to list
            quantity: 1,
            // address of the currency contract that will be used to pay for the listing
            currencyContractAddress,
            // how much the asset will be sold for
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