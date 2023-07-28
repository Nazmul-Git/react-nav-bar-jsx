/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const NavItem = ({navItem}) => {
    return (
        <li className='mr-12 text-2xl hover:text-red-700 m-8'>
            <a href={navItem.path}>{navItem.name}</a>
        </li>
    );
};

export default NavItem;