import React from 'react';
import {MdOutlineDashboard} from 'react-icons/md';
import {TiWeatherCloudy} from 'react-icons/ti';
import {VscPreview} from 'react-icons/vsc'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <MdOutlineDashboard className="dashboard__icon"/>,
    cName: 'nav-text'
  },
  {
    title: 'Forecast',
    path: '/weather',
    icon: <TiWeatherCloudy className="dashboard__icon"/>,
    cName: 'nav-text'
  },
  {
    title: 'Check Weather',
    path: '/weather',
    icon:<VscPreview className="dashboard__icon"/>,
    cName: 'nav-text'
  },
];