import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, praesentium blanditiis. Fuga neque doloremque consectetur at laboriosam asperiores iste sed possimus voluptas sunt, porro iusto assumenda corporis voluptate et est unde eius reiciendis aliquid nisi fugiat. Aliquam dolor optio reiciendis! Quibusdam ad repellat, magnam qui laboriosam minima voluptatibus veritatis nulla!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione corrupti quibusdam at dicta dignissimos exercitationem voluptatum commodi, explicabo cupiditate repellat optio autem recusandae eveniet impedit fuga vel debitis! Dolores repellat voluptatem quidem, molestias doloribus odio harum impedit libero tenetur facilis at blanditiis ullam aliquid quam aspernatur ex sunt quas.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit magni nobis. Sed blanditiis est at, nihil nam delectus fuga vitae dignissimos, nesciunt nulla recusandae, sint ducimus temporibus fugiat! Sequi, error vel aliquid officiis maxime ex delectus eum. Maiores, vel.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos vitae dolorem veniam itaque similique perferendis voluptatem quisquam suscipit molestiae sunt nisi qui voluptas voluptatibus, optio beatae et minima eveniet?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos vitae dolorem veniam itaque similique perferendis voluptatem quisquam suscipit molestiae sunt nisi qui voluptas voluptatibus, optio beatae et minima eveniet?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos vitae dolorem veniam itaque similique perferendis voluptatem quisquam suscipit molestiae sunt nisi qui voluptas voluptatibus, optio beatae et minima eveniet?</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
