import React from 'react'
import Image from 'next/image';
import svgVerticals from '../../public/svgVerticals.png';

const SvgEffect = () => {
    return <span className='w-[376px] h-[83px] relative mt-2'>
        <span className='w-fill h-fit absolute  right-0 -translate-y-3 -translate-x-3'>
        <Image 
        src={svgVerticals}
        alt="vertical svg" 
        />
        </span>
        <span className='w-[332px] h-[46px] absolute bottom-8 right-0'>
            <h1 className='text-white text-[42px] font-normal'>Our Verticals</h1>
        </span>
    </span>
}

export default SvgEffect