import React, {createContext, useContext} from 'react';

import {useAddress, useContract, useContractWrite, useDisconnect, useMetamask} from '@thirdweb-dev/react';
import {ethers} from 'ethers';

const StateContext = createContext();
const contractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS;

export const StateContextProvider = ({children}) => {
    const {contract} = useContract(contractAddress)
    const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();
    const disconnect = useDisconnect();

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns');
        console.log(campaigns)
        return campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }));
    }


    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                disconnect,
                getCampaigns,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);