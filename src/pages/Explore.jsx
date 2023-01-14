import React, {useEffect, useState} from 'react';
import CardsList from "../components/Cards/CardsList";
import {useStateContext} from "../context";

const Explore = () => {
    const {alchemy} = useStateContext();
    const [items, setItems] = useState(null);
    const contractAddress = [
        "0x1ABae73907338E0b87aBF4B7a37C715e225a4B79",
        "0x458fFECd55C5A925ea47729A206afCc04256cA42",
        "0x744F3A1249a1ec0F1D747A5AAc70c2397BD2378d",
        "0x33B86e9e1157D1D02204E797C31042cbc397c82d",
        "0x56288E8eF6A486479dA4E9a83Ff8d5fac6d15167",
    ]

    useEffect(() => {
        const fetchItems = async () => {
            const items = await Promise.all(contractAddress.map(async (contract) => {
                return await alchemy.nft.getNftsForContract(contract);
            }));
            setItems(items);
        }
        fetchItems().then();
    }, [alchemy]);

    return (
        <div className="
                        flex flex-col justify-center bg-[#e6e7e9] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            {/*h-5/6 */} p-3
        ">
            <p className="
                        text-[#fe7700] font-bold text-2xl
                        mb-5 mt-2
            ">
                Explore collections
            </p>
            <CardsList items={items} type={"collection"}/>
        </div>
    );
};

export default Explore;
