import React from 'react';
import {Grid} from "@mui/material";

const Social = () => {

    const socials = [
        {
            name: 'Twitter',
            link: 'https://twitter.com/',
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
        },
        {
            name: 'Discord',
            link: 'https://discord.com/',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png'
        },
        {
            name: 'Telegram',
            link: 'https://telegram.org/',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111465.png'
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/',
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png'
        },
        {
            name: 'Github',
            link: 'https://www.github.com/',
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png'
        },
    ]

    return (
        <div className="
                    flex flex-col justify-start items-center
                     w-full bg-white rounded-2xl shadow-md
                    mt-5 p-3
                ">
            <p className="
                        text-2xl font-bold text-[#808080] mt-2 px-5
                        w-full flex flex-row justify-start items-start
                    ">
                Socials:
            </p>
            <Grid className="
                        flex flex-col justify-start items-center
                        p-5 overflow-y-auto overflow-x-hidden
                    "  container spacing={3}>
                {socials.map((social, index) => (
                    <Grid key={index} item>
                        <a href={social.link
                        } className="
                                    flex flex-row justify-start items-center
                                    text-[#808080] font-bold text-base
                                    hover:text-[#fe7700] cursor-pointer
                                    transition-all duration-300 ease-in-out
                                ">
                            <img src={social.icon} alt={social.name} className="
                                        w-6 h-6 mr-2
                                    "/>
                            {social.name}
                        </a>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Social;
