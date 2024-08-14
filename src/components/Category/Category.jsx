'use client';
import * as React from 'react';
// import { Button } from '../ui/button';
// import { Balloon, Bed, BirthdayIcon, Butterfly, Cake, FlowerIcon, Gift, Heart, HeartBeat, Coffee } from '../ui/Icons';
import { Slider } from '../Banner/Slider';

import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

export const Category = () => {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold">Occasions</h1>

      <div className='py-8'>
        <Slider
          slidesPerView={'auto'}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="text-center py-4"
        >
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/001.webp" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Build & Gift</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Birthday</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Love & Romance</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Birthday</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Graduation</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Housewarming</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Congratulatory</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Farewell</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Grand Opening</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-40">
            <div className="flex flex-col justify-start items-center">
              <figure className="max-md:h-16 max-md:w-16 h-20 w-20 overflow-hidden rounded-full">
                <img src="/002.png" alt="" className="object-cover" />
              </figure>
              <h1 className="font-medium mt-4">Condolences</h1>
            </div>
          </SwiperSlide>
        </Slider>
      </div>

      {/* 
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 pt-10">
        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <img src='/product.webp'/>
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Build & Gift</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <Cake />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Birthday</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <Heart />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Love & Relationship</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <Balloon />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Graduation</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <Butterfly />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Housewarming</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <BirthdayIcon />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Congratulatory</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <HeartBeat />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Farewell</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <Coffee />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Grand Opening</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <FlowerIcon />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Condolences</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>

        <Button className="flex items-center gap-1 p-3 hover:bg-violet-50 border rounded h-auto justify-start focus:ring-2 focus:ring-violet-600" variant="outline">
          <figure className="w-7 min-w-6 text-violet-600 text-lg">
            <Bed />
          </figure>
          <div className="flex items-center gap-1 min-w-0">
            <h1 className="font-medium truncate">Get Well Soon</h1>
            <ArrowRight className="w-4" />
          </div>
        </Button>
      </div> */}
    </section>
  );
};
