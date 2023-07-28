/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ArrowRightIcon,ArrowLeftIcon } from '@heroicons/react/24/solid'

const Card = ({singleNote}) => {
    const [details, setDetails]=useState(false);
    return (
        <div className='p-8 bg-blue-400'>
            <h2 className='text-blue-900 text-2xl '>{singleNote.title}</h2>
            <div onClick={()=>setDetails(!details)}>

              <span>
                {
                    details===true? <ArrowLeftIcon className='h-8 w-8 text-red-700'></ArrowLeftIcon>:<ArrowRightIcon className='h-8 w-8 text-blue-900'></ArrowRightIcon>
                }

              </span>

            </div>
            <div>
              <ul className={` text-black-300  absolute duration-700   ${details? 'top-8': '-top-55'}`}>
                <li>{singleNote.description.mainTitle1}</li>
                <li>{singleNote.description.mainTitle2}</li>
                <li>{singleNote.description.mainDescription1}</li>
                <li>{singleNote.description.mainTitle3}</li>
                <li>{singleNote.description.mainDescription2}</li>
              </ul>
            </div>
            

        </div>
    );
};

export default Card;