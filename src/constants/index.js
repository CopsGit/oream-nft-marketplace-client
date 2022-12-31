import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Explore',
    imgUrl: createCampaign,
    link: '/explore',
  },
  {
    name: 'Create',
    imgUrl: logout,
    link: '/create',
  },
  {
    name: 'Profile',
    imgUrl: profile,
    link: '/profile',
    // disabled: true,
  },
];
