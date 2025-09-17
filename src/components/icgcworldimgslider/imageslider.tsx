'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  "/h/img1.jpg",
  "/h/img2.jpg",
  "/h/img3.jpg",
  "/h/img4.jpg",
  "/h/img5.jpg",
  "/h/img6.jpg"
];

export default function Icgcworldimgslider() {
  return (
    <div className="w-full px-4 py-6">
      <div className="h-[500px] overflow-hidden"> {/* LIMIT HEIGHT */}
        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-125"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
