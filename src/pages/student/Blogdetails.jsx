import React from 'react';
import { useNavigate } from 'react-router-dom';
import blog1 from "../../assets/blog1.png";

const Blogdetails = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-blue-600 hover:underline"
        >
          ← Back to Blogs
        </button>

        {/* Blog Image */}
        <img
          src={blog1}
          alt="Blog Cover"
          className="w-full h-auto rounded-lg shadow mb-8"
        />

        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          How to Avoid Burnout During NEET/JEE Preparation
        </h1>

        {/* Blog Content */}
        <div className="text-gray-700 space-y-6 text-base leading-relaxed">
          <p>
            Preparing for NEET or JEE can be one of the most intense phases in a student’s life. With high expectations and limited time, it's easy to fall into the trap of overworking and experiencing burnout.
          </p>
          <p>
            Burnout isn't just about being tired — it’s physical, mental, and emotional exhaustion caused by prolonged stress. Students often feel demotivated, anxious, and disconnected from their goals during this phase.
          </p>
          <p>
            To prevent burnout, maintaining a healthy routine is essential. This includes getting 7–8 hours of sleep, taking regular breaks, eating nutritious food, and exercising or doing yoga to keep the body active.
          </p>
          <p>
            Another crucial tip is to set realistic study targets. Studying 14 hours a day is not sustainable. Instead, break your day into focused study blocks with small achievable goals and reward yourself for completing them.
          </p>
          <p>
            Finally, don’t isolate yourself. Stay connected with friends, talk to family, and seek help from teachers or mentors when you're feeling overwhelmed. Remember, a strong mind is just as important as hard work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogdetails;
