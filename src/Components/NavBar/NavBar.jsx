/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const navBar = [
        {
            id: 1,
            name: 'Home',
            path: '/home'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Services',
            path: '/services'
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact'
        }
    ];

    
    return (
        <nav className='bg-green-600'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ? <XMarkIcon className='h-7 w-7 text-red-800'></XMarkIcon> : <Bars3Icon className='h-7 w-7 text-purple-800'></Bars3Icon>
                    }
                </span>

            </div>
            <ul className={`md:flex md:static absolute  duration-700 bg-green-600 pl-8 pb-8 pt-8 ${open ? 'left-0' : '-left-48'}`}>
                {
                    navBar.map(navItem => <NavItem key={navBar.id} navItem={navItem}></NavItem>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;