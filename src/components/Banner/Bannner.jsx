'use client';
import { Slider } from './Slider';
import { SwiperSlide } from 'swiper/react';

export const Banner = () => {
  return (
    <div className="text-white container">
      <div className='py-5'>
        <div className="h-[250px] md:h-[600px] w-full overflow-hidden rounded bg-rose-main">
          <Slider mousewheel={true} loop={true} autoplay={{ delay: 3000 }}>
            <SwiperSlide>
              <div className="w-full h-full bg-black bg-cover bg-center md:px-10 px-5 flex items-end pb-10" style={{ backgroundImage: 'url(/01.webp)' }}>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-black bg-cover bg-center md:px-10 px-5 flex items-end pb-10" style={{ backgroundImage: 'url(/002.webp)' }}>
              </div>
            </SwiperSlide>
          </Slider>
        </div>
      </div>
    </div>
  );
};
