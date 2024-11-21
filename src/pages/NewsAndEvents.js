import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Event from '../../public/Event.png';
import EventAnimate from '../../public/EventAnimate.png';

import svgVerticals from '../../public/svgVerticals.png';


const Verticals = () => {
    return (
        <section className='w-full h-screen  flex flex-col items-center relative gap-4'>
            <Image
                src={Event}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                alt="loading"
                quality={100}
                style={{
                    objectFit: "cover"
                }}
                className='blur scale-105'
            />
            <div className='w-full h-full bg-[#0000004D] absolute blur'></div>
            <span className='w-fill text-nowrap h-fit absolute top-12 text-2xl font-semibold text '>
                <h1 className=''>Our Verticals</h1>
                <Image src={svgVerticals} alt="vertical svg" className='absolute bottom-full left-full translate-y-1/2 -translate-x-1/3' />
            </span>
            <section className='w-full h-screen flex justify-center items-center absolute'>
                <div className="w-[1205px] h-[724px] rounded-[24px] overflow-hidden shadow shadow-[#FFFFFFE5] relative">
                        <Image
                            src={EventAnimate}
                            alt="EventAnimate"
                            fill
                            quality={100}
                            sizes='(max-width:768px) 100vw,(max-height:1200px) 50vw,33vw'
                            placeholder='blur'
                            style={{
                                objectFit: "cover"
                            }}
                        />
                </div>
                {/* <span className='w-full h-[70px] rounded-[90px] overflow-hidden bg-slate-600'>
                    <button className="w-full h-full text-center bg-[#80B53B] rounded-[90px] overflow-hidden text-white">
                        <Link href="#">Know more</Link>
                    </button>
                </span> */}
            </section>
        </section>
    )
}

export default Verticals
