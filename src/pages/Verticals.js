import React from 'react'
import Image from 'next/image'
import svgVerticals from '../../public/svgVerticals.png';
import VerticalCCards from './VarticalCards';
const Verticals = () => {
    return (
        <section className='w-full h-screen bg-gradient-to-r from-[#FFE6CF80] to-[#DDECFF80] flex flex-col items-center relative'>
            <span className='w-fill text-nowrap h-fit absolute top-12 text-2xl font-semibold '>
                <h1 className=''>Our Verticals</h1>
                <Image src={svgVerticals} alt="vertical svg" className='absolute bottom-full left-full translate-y-1/2 -translate-x-1/3' />
            </span>
            <section className='w-full h-auto top-[14%] xl:top-[0%] xl:h-full  bg-gradient-to-r from-[#FFE6CF80] to-[#DDECFF80] flex flex-col lg:flex-row lg:justify-center lg:items-center relative gap-9
            px-6 '>
                <VerticalCCards/>
                {/* <div className="w-full h-auto lg:w-[490px] lg:h-[650px] rounded-[24px] overflow-hidden border-[1px] border-[#33C3F2] bg-[#FFFFFFE5] shadow shadow-[#FFFFFFE5] px-[32px] py-[36px] gap-[32px] lg:px-[32px] lg:py-[0px] relativef flex flex-col justify-evenly ">

                    <span className='w-full h-[184px] rounded-[12px] relative overflow-hidden'>
                        <Image
                            src={CareVartical}
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
                        <h1 className='text-[28px] font-normal leading-[46px] text-[#222222]'>ToneOp Care</h1>
                        <p className='text-[20px] font-light leading-[30px] text-[#666666]'>Since 2020, ToneOp has been coming up with new initiatives to provide you with all possible health and fitness services and products. ToneOp Fit is one such platform under its umbrella which equips you with expert-created health & fitness plans through a mobile application.</p>
                    </span>

                    <span className='w-full h-[70px] rounded-[90px] overflow-hidden bg-slate-600'>
                        <button className="w-full h-full text-center bg-[#80B53B] bg-gradient-to-r from-[#33C3F2] via-[#11A0DB] to-[#118DCD] rounded-[90px] overflow-hidden text-white">
                            <Link href="#">Know more</Link>
                        </button>
                    </span>
                </div>
                <div className="w-full lg:w-[490px] h-auto lg:h-[650px] rounded-[24px] overflow-hidden border-[1px] border-[#59DF74] bg-[#FFFFFFE5] shadow shadow-[#FFFFFFE5] px-[32px] py-[36px] lg:px-[32px] lg:py-[0px] gap-[32px]  relative flex flex-col justify-evenly ">

                    <span className='w-full h-[184px] rounded-[12px] relative overflow-hidden'>
                        <Image
                            src={FitVertical}
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
                        <h1 className='text-[28px] font-normal leading-[46px] text-[#222222]'>ToneOp Fit</h1>
                        <p className='text-[20px] font-light leading-[30px] text-[#666666]'>Since 2020, ToneOp has been coming up with new initiatives to provide you with all possible health and fitness services and products. ToneOp Fit is one such platform under its umbrella which equips you with expert-created health & fitness plans through a mobile application.</p>
                    </span>

                    <span className='w-full h-[70px] rounded-[90px] overflow-hidden bg-slate-600'>
                        <button className="w-full h-full text-center bg-[#80B53B] bg-gradient-to-r from-[#59DF74] to-[#15C0B6] rounded-[90px] overflow-hidden text-white">
                            <Link href="#">Know more</Link>
                        </button>
                    </span>
                </div> */}
            </section>
        </section>
    )
}

export default Verticals
