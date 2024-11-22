"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import EatsVertical from '../../public/eatsVertical.png';
import CareVartical from '../../public/CareVartical.png';
import FitVertical from '../../public/FitVertical.png';
import {isMobile} from 'react-device-detect';


const VarticalCards = () => {
    const verticals = [{ url: EatsVertical, title: "ToneOp Eats", borderColor: "#80B53B" }, { url: CareVartical, title: "ToneOp Care", borderColor: "#33C3F2", fromColor: "#33C3F2", viaColor: "#11A0DB", toColor: "#118DCD" }, { url: FitVertical, title: "ToneOp Fit", borderColor: "#59DF74", fromColor: "#59DF74", viaColor: "#15C0B6", toColor: "#15C0B6" }];
    return (
        <>
            {verticals.map((product, idx) => {
                return (
                    <div key={idx} className={`w-full hight-auto rounded-[24px] overflow-hidden border-[1px] border-[${product.borderColor}] bg-[#FFFFFFE5] shadow shadow-[#FFFFFFE5] relative flex flex-col gap-[32px] justify-evenly px-[32px] py-[36px] xl:w-[490px] xl:h-[650px] xl:px-[32px] xl:py-[0px]`}>

                        <span className='w-full h-[184px] rounded-[12px] relative overflow-hidden'>
                            <Image
                                src={product.url}
                                alt="EatsVertical"
                                fill
                                sizes='(max-width:768px) 100vw,(max-height:1200px) 50vw,33vw'
                                placeholder='blur'
                                style={{
                                    objectFit: "cover"
                                }}
                            />
                        </span>
                        <span className='w-full h-auto text-center relative'>
                            <h1 className='text-[28px] font-normal leading-[46px] text-[#222222]'>{product.title}</h1>
                            <p className='text-[20px] font-light leading-[30px] text-[#666666]'>{isMobile? 
                            "Since 2020, ToneOp has been coming up with new initiatives to provide you with all possible health and fitness services and products.":"Since 2020, ToneOp has been coming up with new initiatives to provide you with all possible health and fitness services and products. ToneOp Fit is one such platform under its umbrella which equips you with expert-created health & fitness plans through a mobile application."}</p>
                        </span>

                        <span className='w-full h-[70px] rounded-[90px] overflow-hidden bg-slate-600'>
                            <button className={`w-full h-full text-center bg-[#80B53B]  bg-gradient-to-r from-[${product.fromColor ? product.fromColor : ''}] via-[${product.viaColor ? product.viaColor : ''}] to-[${product.toColor ? product.toColor : ''}]  rounded-[90px] overflow-hidden text-white`}>
                                <Link href="#">Know more</Link>
                            </button>
                        </span>
                    </div>
                )
            })}
        </>
    )
}

export default VarticalCards