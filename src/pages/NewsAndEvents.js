import React ,{useState} from 'react'
import Image from 'next/image'
import SvgEffect from './SvgEffect.js';
import Link from 'next/link';
import Event from '../../public/Event.png';
import EventAnimate from '../../public/EventAnimate.png';
import EventResponsize from '../../public/EventResponsize.png';
import carouselTwoImg from '../../public/carouselTwo.png';
import carouselThreeImg from '../../public/carouselThree.png';

import { isMobile } from 'react-device-detect';


const Verticals = () => {
    let [carouselUrl,setCarouselUrl] = useState("/EventAnimate.png");

    const fun = ()=>{
        setTimeout(()=>{
            setCarouselUrl("/carouselThree.png");
        },8000)
    }
    setTimeout(()=>{
        setCarouselUrl("/carouselTwo.png");
         fun();
    },4000)

    return (
        <section className='w-full h-screen relative bg-red-300'>
            <div className='overlay w-full h-full overflow-hidden absolute'>
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
            </div>

            <div className='w-full h-full absolute flex flex-col justify-around items-center'>
                <SvgEffect />
                <div className="w-[382px] h-[230px] xl:w-[1205px] xl:h-[724px] rounded-[24px]  shadow shadow-[#FFFFFFE5] relative">
                    <Image
                        // src={isMobile ? EventResponsize : EventAnimate}
                        src={carouselUrl?carouselUrl:EventAnimate}
                        alt="EventAnimate"
                        fill
                        quality={100}
                        sizes='(max-width:768px) 100vw,(max-height:1200px) 50vw,33vw'
                        // placeholder='blur'
                        style={{
                            objectFit: "cover"
                        }}
                        suppressHydrationWarning={true}
                    />
                    <span className='w-full md:w-11/12 md:text-start md:left-[5%] h-[36px] absolute text-center  bottom-1 md:bottom-16'>
                        <h1 className='text-[24px] md:text-[42px] font-medium text-white relative'>Event : 108 Suryanamaskars</h1>
                    </span>
                    <div className='w-full md:w-11/12 md:left-[5%] h-1 absolute -bottom-4 flex justify-between md:bottom-8'>
                        <div className='w-[342px] h-full bg-[#999999] rounded-[20px] relative overflow-hidden'>
                            <span className='carousel w-[49px] h-full bg-[#FFFFFF] absolute rounded-[20px] duration-400 ease-out'>
                            </span>
                        </div>
                        <div className='w-[342px] h-full bg-[#999999] rounded-[20px] relative overflow-hidden'>
                            <span className='carouselTwo w-[0px] h-full bg-[#FFFFFF] absolute rounded-[20px] duration-400 ease-out'>
                            </span>
                        </div>
                        <div className='w-[342px] h-full bg-[#999999] rounded-[20px] relative overflow-hidden'>
                            <span className='carouselThree w-[0px] h-full bg-[#FFFFFF] absolute rounded-[20px] duration-400 ease-out'>
                            </span>
                        </div>  
                    </div>
                </div>
                <button className="w-[276px] h-[70px] text-center bg-white rounded-[90px] overflow-hidden text-black">
                    <Link href="#">Know more</Link>
                </button>
            </div>

        </section>
    )
}

export default Verticals
