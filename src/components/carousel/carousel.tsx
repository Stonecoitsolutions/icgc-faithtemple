'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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

export default function ImageGalleryCarousel() {
  return (
    <div className="w-full px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-150"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
