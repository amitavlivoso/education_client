import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import course1 from "../../assets/jee.jpg";
import course2 from "../../assets/neet.jpg";
import course3 from "../../assets/course3.jpg";
import course4 from "../../assets/course4.jpg";
import course5 from "../../assets/course5.jpg";
import course6 from "../../assets/course6.jpg";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "JEE PDF Study Pack",
    subtitle: "Complete Notes + Practice Sheets",
    students: "6,520 Read",
    duration: "240+ Pages",
    image: course1,
  },
  {
    title: "NEET Biology Revision PDFs",
    subtitle: "NCERT Highlighted Notes + PYQs",
    students: "5,145 Reads",
    duration: "180+ Pages",
    image: course2,
  },
  {
    title: "CBSE 10th Term-1 Complete PDFs",
    subtitle: "Science, Maths & English Notes",
    students: "7,860 Reads",
    duration: "200+ Pages",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464864.jpg",
  },
];

const Course = () => {
  const navigate = useNavigate();
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
            className="bg-white cursor-pointer rounded-xl shadow hover:shadow-lg transition duration-300"
            onClick={() => navigate("/login")}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
