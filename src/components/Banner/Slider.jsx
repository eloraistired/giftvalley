'use client';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { register } from 'swiper/element/bundle';
import { useEffect } from 'react';
import './slider.css';



export const Slider = ({ children, ...prop }) => {
  useEffect(() => {
    register();
  }, []);
  return (
    <div className="relative h-full w-full">
      <Swiper className="h-full w-full" {...prop}>
        {children}
      </Swiper>
    </div>
  );
};
