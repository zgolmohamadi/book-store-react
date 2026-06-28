import poster1 from '../../assets/pooster1.jpg';
import poster2 from '../../assets/pooster2.jpg';
import Banner from '../../components/Banner';
import Category from '../../components/Category';

import Slider from '../../components/Slider';

import img2 from '../../assets/sliders-img/1620322988081505.jpg';
import img3 from '../../assets/sliders-img/2487196685494101.jpg';
import img4 from '../../assets/sliders-img/4461225025712541.jpg';
import img5 from '../../assets/sliders-img/5463543916936656.jpg';
import img6 from '../../assets/sliders-img/5827198117476971.jpg';
import img7 from '../../assets/sliders-img/6764279631600337.jpg';
import img8 from '../../assets/sliders-img/8768320253435865.jpg';
import img9 from '../../assets/sliders-img/8928359659862246.jpg';

export default function Dashboard() {
  return (
    <>
      <Banner />
      <Category />
      <div className='flex justify-between gap-4 max-w-375 w-full mx-auto mt-14'>
        <img src={poster1} className=' w-1/2 rounded-2xl' />
        <img src={poster2} className=' w-1/2 rounded-2xl' />
      </div>
      <div className=' max-w-375 w-full mx-auto mt-14 mb-5'>
        <h3 className='mb-3 font-black text-lg'>کتاب‌های پرفروش </h3>
        <Slider
          items={[
            { id: 1, image: img2 },
            { id: 2, image: img3 },
            { id: 3, image: img4 },
            { id: 4, image: img5 },
            { id: 5, image: img6 },
            { id: 6, image: img7 },
            { id: 7, image: img8 },
            { id: 8, image: img9 },
            { id: 9, image: img2 },
          ]}
        />
      </div>
      <div className='bg-amber-100 max-w-375 w-full mx-auto mt-14 mb-5 py-6 px-9  rounded-2xl'>
        <h3 className='mb-5 font-black text-lg'>برندگانِ جوایز بزرگ ادبی!</h3>
        <div className=' justify-between gap-12 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          <div className='flex flex-col justify-center items-center'>
            <img
              src='https://placehold.net/book-400x400.png'
              className='h-70 w-70 rounded-xl block mask-cover mb-3'
            />
            <span className='font-black block mb-2 px-1'>عنوان کتاب</span>
            <span className='text-xs px-1'>نویسنده</span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='https://placehold.net/book-400x400.png'
              className='h-70 w-70 rounded-xl block mask-cover mb-3'
            />
            <span className='font-black block mb-2 px-1'>عنوان کتاب</span>
            <span className='text-xs px-1'>نویسنده</span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='https://placehold.net/book-400x400.png'
              className='h-70 w-70 rounded-xl block mask-cover mb-3'
            />
            <span className='font-black block mb-2 px-1'>عنوان کتاب</span>
            <span className='text-xs px-1'>نویسنده</span>
            <span></span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='https://placehold.net/book-400x400.png'
              className='h-70 w-70 rounded-xl block mask-cover mb-3'
            />
            <span className='font-black block mb-2 px-1'>عنوان کتاب</span>
            <span className='text-xs px-1'>نویسنده</span>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='https://placehold.net/book-400x400.png'
              className='h-70 w-70 rounded-xl block mask-cover mb-3'
            />
            <span className='font-black block mb-2 px-1'>عنوان کتاب</span>
            <span className='text-xs px-1'>نویسنده</span>
          </div>
        </div>
      </div>
      <div className=' max-w-375 w-full mx-auto mt-14 mb-5'>
        <h3 className='mb-3 font-black text-lg'>تازه‌های برگزیده </h3>
        <Slider
          items={[
            { id: 1, image: 'https://placehold.co/170x240/png' },
            { id: 2, image: 'https://placehold.co/170x240/png' },
            { id: 3, image: 'https://placehold.co/170x240/png' },
            { id: 4, image: 'https://placehold.co/170x240/png' },
            { id: 5, image: 'https://placehold.co/170x240/png' },
            { id: 6, image: 'https://placehold.co/170x240/png' },
            { id: 7, image: 'https://placehold.co/170x240/png' },
            { id: 8, image: 'https://placehold.co/170x240/png' },
            { id: 9, image: 'https://placehold.co/170x240/png' },
          ]}
        />
      </div>
      <div className=' max-w-375 w-full mx-auto mt-14 mb-5'>
        <h3 className='mb-3 font-black text-lg'>سفر به دنیای خیال! </h3>
        <Slider
          items={[
            { id: 1, image: 'https://placehold.co/170x240/png' },
            { id: 2, image: 'https://placehold.co/170x240/png' },
            { id: 3, image: 'https://placehold.co/170x240/png' },
            { id: 4, image: 'https://placehold.co/170x240/png' },
            { id: 5, image: 'https://placehold.co/170x240/png' },
            { id: 6, image: 'https://placehold.co/170x240/png' },
            { id: 7, image: 'https://placehold.co/170x240/png' },
            { id: 8, image: 'https://placehold.co/170x240/png' },
            { id: 9, image: 'https://placehold.co/170x240/png' },
          ]}
        />
      </div>
    </>
  );
}
