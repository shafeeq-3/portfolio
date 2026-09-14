import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-[#FAFAF9] py-16 lg:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-[24px] font-bold text-stone-900 mb-6">
            About
          </h2>
          
          <p className="text-[17px] text-stone-700 leading-[1.65]">
            I'm Muhammad Shafeeq, a Full-Stack Developer focused on building practical web applications with React, Node.js, Express, and MongoDB. My work covers responsive frontend interfaces, backend APIs, authentication, database-driven features, and deployment.
          </p>
          
          <p className="text-[17px] text-stone-700 leading-[1.65]">
            I previously taught MERN Stack development to 100+ students in Lahore, which strengthened my ability to explain technical concepts clearly and approach problems from both development and teaching perspectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
