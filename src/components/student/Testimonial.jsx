// Testimonial.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Aryan Mehta',
    text: 'Joining this course changed my NEET preparation journey. The video lectures are crystal clear and helped me build strong concepts in Physics and Biology.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'Sneha Reddy',
    text: 'The mock tests and practice problems were incredibly helpful. I scored 99.2 percentile in JEE Mains thanks to the structured guidance here.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5
  },
  {
    name: 'Rohan Kumar',
    text: 'The daily assignments and doubt-solving sessions helped me stay on track. This course is perfect for serious NEET aspirants.',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4
  },
  {
    name: 'Priya Sharma',
    text: 'I loved the clear teaching style and short revision videos. It saved me a lot of time while preparing for both NEET and board exams.',
    img: 'https://randomuser.me/api/portraits/women/64.jpg',
    rating: 5
  }
];


export default function Testimonial() {
  return (
    <section className="bg-[#f6fbff] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#00b894] mb-2">Testimonials</h2>
        <p className="mb-10 text-gray-600">What our student say about us</p>

        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
           <SwiperSlide key={idx} className=' h-full min-h-[300px]'>
  <div className="bg-white rounded-xl p-6 shadow-md h-full min-h-[200px] flex flex-col justify-between text-left">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
        <h4 className="font-bold">{t.name}</h4>
      </div>
      <p className="text-sm text-gray-600 mb-4">{t.text}</p>
    </div>
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`text-sm ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
