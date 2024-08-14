'use client';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '../Banner/Slider';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Rating } from '../Rating/Rating';

export const Testimonials = () => {
  return (
    <div className="py-5 pt-8">
      <div className="h-[500px] sm:h-[400px] w-full overflow-hidden rounded bg-rose-main">
        <Slider
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
            '--swiper-navigation-size': '20px',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        >
        <SwiperSlide className="overflow-hidden px-10 rounded-xl border border-violet-300 bg-violet-50 flex items-center justify-center">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="font-medium">Pleasant Experience</h1>
            <p className="text-center md:max-w-lg font-semibold text-lg md:text-xl pt-1">
              &quot;It was great as my friend was pleasantly surprised once again. Will definitely recommend giftr to my friends.&quot;
            </p>
            <div className="pt-4">
              <Rating rating={5} className="text-violet-600 gap-2 [&_svg]:w-5 [&_svg]:h-5" />
            </div>

            <div className="pt-6 flex items-center gap-2 md:gap-4 flex-col md:flex-row">
              <div className="flex items-center gap-2">
                {/* <figure className="w-6 h-6 rounded-full overflow-hidden">
                  <img src="/helene-engels.png" alt="" />
                </figure> */}
                <h1 className="font-medium">Ari</h1>
              </div>
              <span className="h-[1px] w-full md:h-10 md:w-[1px] bg-neutral-300 rounded-full"></span>
              <div className="flex items-center gap-2">
                <figure className="w-10 h-10 overflow-hidden rounded-full">
                  <img src="/product2.webp" alt="" />
                </figure>
                <h1 className="font-semibold">Personalised Gift Box</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide className="overflow-hidden px-10 rounded-xl border border-violet-300 bg-violet-50 flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="font-medium">Pleasant Experience</h1>
              <p className="text-center md:max-w-lg font-semibold text-lg md:text-xl pt-1">
                &quot;It was great as my friend was pleasantly surprised once again. Will definitely recommend giftr to my friends.&quot;
              </p>
              <div className="pt-4">
                <Rating rating={5} className="text-violet-600 gap-2 [&_svg]:w-5 [&_svg]:h-5" />
              </div>

              <div className="pt-6 flex items-center gap-2 md:gap-4 flex-col md:flex-row">
                <div className="flex items-center gap-2">
                  {/* <figure className="w-6 h-6 rounded-full overflow-hidden">
                    <img src="/helene-engels.png" alt="" />
                  </figure> */}
                  <h1 className="font-medium">Ari</h1>
                </div>
                <span className="h-[1px] w-full md:h-10 md:w-[1px] bg-neutral-300 rounded-full"></span>
                <div className="flex items-center gap-2">
                  <figure className="w-10 h-10 overflow-hidden rounded-full">
                    <img src="/product2.webp" alt="" />
                  </figure>
                  <h1 className="font-semibold">Personalised Gift Box</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden px-10 rounded-xl border border-violet-300 bg-violet-50 flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="font-medium">Pleasant Experience</h1>
              <p className="text-center md:max-w-lg font-semibold text-lg md:text-xl pt-1">
                &quot;It was great as my friend was pleasantly surprised once again. Will definitely recommend giftr to my friends.&quot;
              </p>
              <div className="pt-4">
                <Rating rating={5} className="text-violet-600 gap-2 [&_svg]:w-5 [&_svg]:h-5" />
              </div>

              <div className="pt-6 flex items-center gap-2 md:gap-4 flex-col md:flex-row">
                <div className="flex items-center gap-2">
                  {/* <figure className="w-6 h-6 rounded-full overflow-hidden">
                    <img src="/helene-engels.png" alt="" />
                  </figure> */}
                  <h1 className="font-medium">Ari</h1>
                </div>
                <span className="h-[1px] w-full md:h-10 md:w-[1px] bg-neutral-300 rounded-full"></span>
                <div className="flex items-center gap-2">
                  <figure className="w-10 h-10 overflow-hidden rounded-full">
                    <img src="/product2.webp" alt="" />
                  </figure>
                  <h1 className="font-semibold">Personalised Gift Box</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden px-10 rounded-xl border border-violet-300 bg-violet-50 flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="font-medium">Pleasant Experience</h1>
              <p className="text-center md:max-w-lg font-semibold text-lg md:text-xl pt-1">
                &quot;It was great as my friend was pleasantly surprised once again. Will definitely recommend giftr to my friends.&quot;
              </p>
              <div className="pt-4">
                <Rating rating={5} className="text-violet-600 gap-2 [&_svg]:w-5 [&_svg]:h-5" />
              </div>

              <div className="pt-6 flex items-center gap-2 md:gap-4 flex-col md:flex-row">
                <div className="flex items-center gap-2">
                  {/* <figure className="w-6 h-6 rounded-full overflow-hidden">
                    <img src="/helene-engels.png" alt="" />
                  </figure> */}
                  <h1 className="font-medium">Ari</h1>
                </div>
                <span className="h-[1px] w-full md:h-10 md:w-[1px] bg-neutral-300 rounded-full"></span>
                <div className="flex items-center gap-2">
                  <figure className="w-10 h-10 overflow-hidden rounded-full">
                    <img src="/product2.webp" alt="" />
                  </figure>
                  <h1 className="font-semibold">Personalised Gift Box</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden px-10 rounded-xl border border-violet-300 bg-violet-50 flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="font-medium">Pleasant Experience</h1>
              <p className="text-center md:max-w-lg font-semibold text-lg md:text-xl pt-1">
                &quot;It was great as my friend was pleasantly surprised once again. Will definitely recommend giftr to my friends.&quot;
              </p>
              <div className="pt-4">
                <Rating rating={5} className="text-violet-600 gap-2 [&_svg]:w-5 [&_svg]:h-5" />
              </div>

              <div className="pt-6 flex items-center gap-2 md:gap-4 flex-col md:flex-row">
                <div className="flex items-center gap-2">
                  {/* <figure className="w-6 h-6 rounded-full overflow-hidden">
                    <img src="/helene-engels.png" alt="" />
                  </figure> */}
                  <h1 className="font-medium">Ari</h1>
                </div>
                <span className="h-[1px] w-full md:h-10 md:w-[1px] bg-neutral-300 rounded-full"></span>
                <div className="flex items-center gap-2">
                  <figure className="w-10 h-10 overflow-hidden rounded-full">
                    <img src="/product2.webp" alt="" />
                  </figure>
                  <h1 className="font-semibold">Personalised Gift Box</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
};
