import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './styles.css';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Swiper as SwiperType } from 'swiper';

type SliderItem = {
  id: number;
  image: string;
};

type SliderProps = {
  items: SliderItem[];
};

export default function Slider({ items }: SliderProps) {
  const navigate = useNavigate();
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className='relative'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        onBeforeInit={(swiper: SwiperType) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 8,
            spaceBetween: 25,
          },
        }}
        className='mySwiper'
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`slide-${index}`}
              className='h-60 rounded-xs block mask-cover'
              onClick={() => navigate(`/books/${item.id}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={prevRef}
        className='swiper-button-prev right-auto! left-5! -top-10! absolute'
      >
        <ChevronRight fontSize='large' />
      </div>

      <div
        ref={nextRef}
        className='swiper-button-next right-auto! -left-2 -top-10! absolute'
      >
        <ChevronLeft fontSize='large' />
      </div>
    </div>
  );
}
