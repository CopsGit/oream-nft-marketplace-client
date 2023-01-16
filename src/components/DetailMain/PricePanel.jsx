import React, {useEffect, useState} from 'react';
import {eth} from "../../assets";
import {useStateContext} from "../../context";
import {Alert, Snackbar} from "@mui/material";

const PricePanel = ({curItem, owner}) => {

    const {makeListing, getOneNftListing} = useStateContext();

    const [price, setPrice] = useState(null);
    const [input, setInput] = useState(null);
    const [res, setRes] = useState(null);
    const [open, setOpen] = useState(false);

    console.log(curItem);

    useEffect(() => {
        const getListing = async () => {
            let listing = await getOneNftListing(curItem.contract.address, curItem.tokenId)
            console.log(listing)
            setPrice(listing?.buyoutCurrencyValuePerToken?.displayValue)
        }
        getListing().then();
    }, [res, curItem]);


    const handleSell = async () => {
        const r = await makeListing(curItem.contract.address, curItem.tokenId, input);
        console.log(r);
        setRes(r);
        setOpen(true);
        setInput(null);
    }

    console.log(res)

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="
                flex flex-col justify-between items-center
                w-full bg-[#fff] mt-3 py-3 px-2 rounded-2xl shadow-lg
            ">
            <div className="
                flex flex-col justify-start items-start w-full
                px-2
                    ">
                <p className="
                    text-xs font-bold text-[#808080] mt-1
                    flex flex-row justify-center items-center
                ">
                    <span className="text-lg font-bold text-[#808080]">Current Price: </span>
                    <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                    <span className="text-lg font-bold text-[#fe7700]">{price || "N/A"} ETH</span>
                </p>
                <p className="
                    text-xs font-bold text-[#808080] mt-1
                    flex flex-row justify-center items-center
                ">
                    <span className="text-lg font-bold text-[#808080]">Lowest Ask: </span>
                    <img src={eth} className="
                                        h-4 w-4
                                        " alt=""/>
                    <span className="text-lg font-bold text-[#fe7700]">{curItem?.floorPrice || "N/A"} ETH</span>
                </p>
            </div>
            {
                owner ? (
                    <div className="
                flex flex-row justify-between items-center
                w-full
            ">
                        <input type="number" className="
                            flex flex-row justify-center items-center mt-5
                            w-2/3 h-10 rounded-xl bg-[#e6e7e9] px-2 mx-1
                            focus:outline-[#fe7700]
                        " placeholder={
                            price ? `Current Price: ${price} ETH` : "Enter your price"
                        }
                        onChange={(e) => setInput(e.target.value)}
                        value={input?.toString() || ""}
                        />
                        <button className="
                    flex flex-row justify-center items-center hover:border-[#fe7700] border-2 border-[#fe7700]
                    w-1/3 h-10 mt-5 mx-1 rounded-xl bg-[#fe7700] text-[#fff] font-bold
                    hover:bg-[#fff] hover:text-[#fe7700] transition-all duration-300 cursor-pointer
                " onClick={handleSell}>
                            {price ? "Update" : "List"}
                        </button>
                    </div>
                ) : (
                    <div className="
                flex flex-row justify-between items-center
                w-full
            ">
                        <button className="
                    flex flex-row justify-center items-center
                    w-1/2 h-10 mt-5 mx-1 rounded-xl bg-[#fe7700] text-[#fff] font-bold
                    hover:bg-[#fff] hover:text-[#fe7700] hover:border-[#fe7700] border-2 border-[#fe7700]
                    transition-all duration-300 cursor-pointer
                ">
                            Purchase
                        </button>
                        <button className="
                    flex flex-row justify-center items-center hover:border-[#fe7700] border-2 border-[#fe7700]
                    w-1/2 h-10 mt-5 mx-1 rounded-xl bg-[#fe7700] text-[#fff] font-bold
                    hover:bg-[#fff] hover:text-[#fe7700] transition-all duration-300 cursor-pointer
                ">
                            Bid
                        </button>
                    </div>
                )
            }
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                sx={{
                    position: 'fixed',
                    bottom: '24px !important',
                    left: `auto !important`,
                    right: '24px !important',
                    width: '20%',
                }}
            >
                {
                    res?.receipt?.status === 1 ? (
                        <Alert onClose={handleClose}  severity="success" sx={{ width: '100%' }}>
                            Successfully listed!
                        </Alert>
                    ) : (
                        <Alert onClose={handleClose}  severity="error" sx={{ width: '100%' }}>
                            Failed to list!
                        </Alert>
                    )
                }
            </Snackbar>
        </div>
    );
};

export default PricePanel;
