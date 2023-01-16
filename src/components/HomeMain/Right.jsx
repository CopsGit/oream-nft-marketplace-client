import React, {useEffect, useState} from 'react';
import MainCarousel from "./MainCarousel";
import ItemList from "./ItemList";
import {Divider} from "@mui/material";
import {useStateContext} from "../../context";

const HomeMainRight = () => {

    const {alchemy} = useStateContext();
    const [items, setItems] = useState([]);
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
            console.log(items);
            setItems(items);
        }
        fetchItems().then();
    }, [alchemy]);

    return (
        <div className="
                flex flex-col bg-[#e6e7e9] h-full w-full px-3
                rounded-r-3xl shadow-lg
            ">
            <MainCarousel items={items}/>

            <div className="
                flex flex-row  justify-center items-center
            ">
                <Divider variant="middle" sx={{
                    width: "60%",
                    backgroundColor: "#fe7700",
                    borderBottomWidth: 1.5
                }}/>
            </div>


            <ItemList items={items}/>
        </div>
    );
};

export default HomeMainRight;
