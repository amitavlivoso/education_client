import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import course4 from "../../assets/course4.jpg";
import course5 from "../../assets/course5.jpg";
import course6 from "../../assets/course6.jpg";

const courses = [
  {
    title: "Organic Chemistry",
    subtitle: "(Including All Subjects)",
    price: "$33.99",
    students: "5,957 Students",
    duration: "01h 49m",
    image: course1,
  },
  {
    title: "Physics 2.0",
    subtitle: "(Including All Subjects)",
    price: "$45.99",
    students: "4,120 Students",
    duration: "02h 10m",
    image: course2,
  },
  {
    title: "Mathematics",
    subtitle: "(Including All Subjects)",
    price: "$39.99",
    students: "3,800 Students",
    duration: "01h 30m",
    image: course3,
  },
  {
    title: "Physics",
    subtitle: "(Including All Subjects)",
    price: "$33.99",
    students: "5,957 Students",
    duration: "01h 49m",
    image: course4,
  },
  {
    title: "Physics",
    subtitle: "(Including All Subjects)",
    price: "$33.99",
    students: "5,957 Students",
    duration: "01h 49m",
    image: course5,
  },
  {
    title: "Physics",
    subtitle: "(Including All Subjects)",
    price: "$33.99",
    students: "5,957 Students",
    duration: "01h 49m",
    image: course6,
  },
];

const Course = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured <span className="text-green-600">Course</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore our best curated online courses to boost your knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>{course.students}</span>
                <span>{course.duration}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500">{course.subtitle}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold text-gray-900">{course.price}</p>
                <FiShoppingCart className="text-xl text-gray-700 cursor-pointer hover:text-green-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
