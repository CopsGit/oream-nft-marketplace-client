import React from 'react';

const HomeInfo = () => {
    const data = [
        {
            title: 'Total NFTs',
            value: 100000,
        },
        {
            title: 'Total Volume',
            value: 10000000,
        },
        {
            title: 'Total Sales',
            value: 100000,
        },
        {
            title: 'Total Owners',
            value: 100000,
        },
        {
            title: 'Total Active Users',
            value: 100000,
        },
        {
            title: 'Total Transactions',
            value: 100000,
        },
        {
            title: 'Total Fees',
            value: 1000,
        },
        {
            title: 'Total Burned',
            value: 1000,
        },
        {
            title: 'Total Minted',
            value: 1000,
        },
        {
            title: 'Total Listed',
            value: 100000,
        },
        {
            title: '24h Volume',
            value: 10000,
        },
        {
            title: '24h Sales',
            value: 10000,
        },
        {
            title: '24h Active Users',
            value: 10000,
        },
        {
            title: '24h Transactions',
            value: 10000,
        },
        {
            title: '24h Fees',
            value: 100,
        },
        {
            title: '24h Burned',
            value: 100,
        },
        {
            title: '24h Minted',
            value: 100,
        },
        {
            title: '24h Listed',
            value: 10000,
        },
    ];
    return (
        <div className="
                    flex flex-row items-center justify-around w-full text-xs
                    bg-[#fff] rounded-lg shadow-lg p-1 text-[#fe7700] font-bold
                    mb-3
                ">
            <div className="
                flex flex-col items-start justify-center
                py-3
            ">
                {data.map((item, index) => (
                    <div key={index} className="
                        flex flex-row items-start justify-between w-full
                    ">
                        <p className="
                            text-[#fe7700] font-bold
                        ">
                            {item.title}:&nbsp;
                        </p>
                        <p className="
                            text-[#8d1300] font-bold
                        ">
                            {
                                item.value > 1000 ? (
                                    item.value > 1000000 ? (
                                        item.value > 1000000000 ? (
                                            item.value > 1000000000000 ? (
                                                item.value / 1000000000000 + 'T'
                                            ) : (
                                                item.value / 1000000000 + 'B'
                                            )
                                        ) : (
                                            item.value / 1000000 + 'M'
                                        )
                                    ) : (
                                        item.value / 1000 + 'K'
                                    )
                                ) : (
                                    item.value
                                )

                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeInfo;
