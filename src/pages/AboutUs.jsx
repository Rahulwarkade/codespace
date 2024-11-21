import React from 'react'
import Image from 'next/image';
import milind from '../../public/milind.png'
const AboutUs = () => {
  return (
    <div className="w-full h-3/4  absolute flex justify-between">
      <section className='w-2/5 h-full  flex flex-col gap-8 left-[160px] relative '>
        <h1 className='text-5xl font-normal'>About Us</h1>
        <p className='text-md font-normal opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam molestiae consequuntur aut accusantium incidunt cupiditate debitis blanditiis, adipisci eius mollitia officiis modi, exercitationem labore assumenda perferendis et repellat aliquid laborum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, doloremque repudiandae? Nostrum, nisi? Soluta similique possimus sequi eligendi doloremque neque, nesciunt, praesentium nam quisquam, voluptas placeat? In aliquid quos eos.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci exercitationem delectus, vitae quisquam asperiores qui ipsa tenetur fugiat alias, obcaecati animi corporis autem molestias, magnam odio eum eveniet ad facere.
        </p>
        <p className='text-md font-normal opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime deserunt accusamus cumque laudantium eos. Unde consequatur sed mollitia quo vel numquam commodi, ut aliquam perspiciatis minima officiis sit eius natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <span className='w-full h-auto mt-20 flex flex-col items-start gap-4'>
          <p text-md font-normal opacity-70>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, pariatur velit laborum in earum eveniet neque consequatur quod.</p>
          <button className='px-10 py-3 rounded-3xl bg-gray-800 text-white text-center'>Know more</button>
        </span>
      </section>
      <section className='w-2/5 h-full '>
        <Image
        src={milind}
        width={620}
        height={670}
        alt='loading'
        priority={100}
        />
      </section>

    </div>

  )
}

export default AboutUs