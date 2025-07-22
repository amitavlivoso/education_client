// NewBlogs.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import blog1 from "../../assets/blog1.png";
import blog3 from "../../assets/blog3.jpg";
import blog2 from "../../assets/blog2.png";

const blogs = [
  {
    image: blog1,
    title: 'Top 10 Time Management Tips for NEET & JEE Aspirants',
    description: 'Learn how to balance school, coaching, and self-study effectively. These time management hacks are a must for serious NEET and JEE candidates.',
    views: '18,400',
  },
  {
    image: blog2,
    title: 'Physics Wallah vs Aakash vs Allen: Which is Best for You?',
    description: 'We compare India’s top coaching institutes for NEET/JEE on teaching style, content, affordability, and results to help you choose wisely.',
    views: '22,916',
  },
  {
    image: blog3,
    title: 'How to Avoid Burnout During NEET/JEE Preparation',
    description: 'Preparing 10+ hours daily? Learn how to stay motivated, maintain mental health, and beat burnout while studying for competitive exams.',
    views: '15,782',
  },
];


const NewBlogs = () => {
  return (
    <section className="py-10 mb-10 h-[600px] w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h5 className="text-lg font-semibold">New Articles</h5>
          <a href="#" className="text-blue-600 text-sm font-semibold">See all</a>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
                <img
                  src={blog.image}
                  alt="Blog"
                  className="w-full h-[200px] object-cover rounded mb-4"
                />
                <h6 className="font-semibold text-base mb-2">{blog.title}</h6>
                
                <p className="text-sm text-gray-500 flex-grow">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <a href="blogdetails" className="text-blue-600 text-sm font-medium">Read more</a>
                  <small className="text-gray-500 flex items-center gap-1">
                    👁 {blog.views}
                  </small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewBlogs;
