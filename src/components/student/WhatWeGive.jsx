import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import get1 from "../../assets/get1.png";
import get2 from "../../assets/get2.png";
import get3 from "../../assets/get3.png";
import home1 from "../../assets/home1.png";
const slides = [
  {
    title: 'Expert Faculty',
    description: 'Learn from top educators with years of experience in NEET & JEE coaching. Get conceptual clarity and exam-specific strategies.',
    image: get1,
  },
  {
    title: 'Verified Certificates',
    description: 'Earn digital certificates after course completion to showcase your effort and achievements on your academic journey.',
    image: get2,
  },
  {
    title: 'Comprehensive Curriculum',
    description: 'Access well-structured modules covering NCERT, previous year questions, and advanced practice sets for full exam readiness.',
    image: get3,
  },
];


const WhatWeGive = () => {
  return (
     <div>
              <section className="py-10 min-h-[50vh] bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left content */}
          <div className="w-full md:w-5/12 text-center md:text-left">
            <h6 className="text-blue-600 font-semibold">WHAT WE GIVE</h6>
            <p className="text-4xl font-bold text-[#272DB0] leading-snug mt-2 mb-4">
                What Do You <br /> Get From Us
                </p>
                <p className="text-gray-500">
                Get structured NEET & JEE coaching from expert mentors, high-quality video lessons, doubt-solving support, and full-length test series to maximize your exam performance.
                </p>
          </div>

          {/* Right Swiper Slider */}
          <div className="w-full md:w-7/12">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
              loop={true}
              className="w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-xl shadow-lg p-6 bg-[#545BE8] h-full">
                    <div className="bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center">
                      <img src={slide.image} alt={slide.title} className="h-8 w-8 object-contain" />
                    </div>
                    <p className="text-white text-lg font-semibold mt-4 mb-2">{slide.title}</p>
                    <p className="text-white text-sm">{slide.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#272DB0] min-h-[500px] rounded-[10px] py-10 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 text-center">
            <img
              src={home1}
              alt="Student"
              className="mx-auto max-w-[500px] w-full"
            />
          </div>

          {/* Text Column */}
         <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h6 className="text-[#F0C932] text-sm font-semibold uppercase">
                Selected Course
            </h6>
            <p className="text-white text-3xl md:text-4xl font-bold mt-2 mb-4 leading-snug">
                Students Enrolled <br /> in Our Programs
            </p>
            <p className="text-white text-base">
                Join thousands of aspirants preparing for NEET and JEE with expert guidance, curated study material, and a result-oriented approach.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-white text-center lg:text-left">
                <div>
                <h2 className="text-[#F0C932] text-3xl font-bold">6,000+</h2>
                <p>Live Learners</p>
                </div>
                <div>
                <h2 className="text-[#F0C932] text-3xl font-bold">4,000+</h2>
                <p>Registered Users</p>
                </div>
                <div>
                <h2 className="text-[#F0C932] text-3xl font-bold">120+</h2>
                <p>NEET & JEE Courses</p>
                </div>
            </div>
        </div>

        </div>
      </div>
    </section>
    
     </div>
  );
};

export default WhatWeGive;