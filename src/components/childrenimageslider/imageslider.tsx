'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';

const images = [
  "/h/img1.jpg",
  "/h/img2.jpg",
  "/h/img3.jpg",
  "/h/img4.jpg",
  "/h/img5.jpg",
  "/h/img6.jpg"
];

export default function ChildrenImageSlider() {
  return (
    <div className="w-full px-4 py-6">
      <div className="h-[600px]">
        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl shadow-md overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-[180px] object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
