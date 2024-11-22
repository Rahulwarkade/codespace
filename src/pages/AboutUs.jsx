import React from 'react'
import Image from 'next/image';
import milind from '../../public/milind.png'
const AboutUs = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">

      <section className='w-[382px] md:w-[1600px] h-[1046px] md:h-[838px] relative bg-[#F9F9F9] flex flex-col-reverse md:flex-row justify-between items-center p-[60px]'>
        <section className='section-A w-full h-2/4 md:w-2/4 md:h-full  flex flex-col gap-8 relative'>
          <div className='w-[350px] h-[384px] md:w-[629px] md:h-[460px] flex flex-col gap-6'>
            <h1 className='text-5xl font-normal'>About Us</h1>
            <p className='text-center md:text-start text-md font-normal opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam molestiae consequuntur aut accusantium incidunt cupiditate debitis blanditiis, adipisci eius mollitia officiis modi, exercitationem labore assumenda perferendis et repellat aliquid laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, doloremque repudiandae? Nostrum, nisi? Soluta similique possimus sequi eligendi doloremque neque, nesciunt, praesentium nam quisquam, voluptas placeat? In aliquid quos eos.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci exercitationem delectus, vitae quisquam asperiores qui ipsa tenetur fugiat alias, obcaecati animi corporis autem molestias, magnam odio eum eveniet ad facere.
            </p>
            <p className='text-center md:text-start text-md font-normal opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime deserunt accusamus cumque laudantium eos. Unde consequatur sed mollitia quo vel numquam commodi, ut aliquam perspiciatis minima officiis sit eius natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <div className='w-full h-auto absolute flex flex-col items-start gap-4 bottom-0'>
          <span className='w-[350px] h-[36px] md:w-[629px] md:h-[48px] relative'>
            <p className='text-center md:text-start text-md font-normal opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, pariatur velit laborum in earum eveniet neque consequatur quod.</p>
          </span>
            <button className='w-[188px] h-[52px] md:w-[320px] md:h-[70px] rounded-[90px] bg-[#222222] text-white text-center'>Know more</button>
          </div>
        </section>
        <section className='section-B w-full h-2/4 md:w-2/4 md:h-full relative flex items-end md:justify-end '>
          <div className='w-[350px] h-[389px] md:w-[645px] md:h-[718px] relative'>
            <Image
              src={milind}
              fill
              alt='loading'
              priority={100}
            />
          </div>
        </section>
      </section>

    </div>

  )
}

export default AboutUs