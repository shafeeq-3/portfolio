import React from 'react';

const IntroSection = () => {
  return (
    <section className="bg-[#FAFAF9] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="max-w-4xl">
          <h1 className="text-[32px] lg:text-[36px] font-bold text-stone-900 mb-6 leading-tight">
            Full-Stack Developer building practical web applications from interface to backend.
          </h1>
          <p className="text-[17px] text-stone-700 leading-[1.65]">
            I work with React, Node.js, Express, and MongoDB to create web applications that handle authentication, database-driven features, REST APIs, and responsive interfaces. My focus is on building functional systems that work reliably from frontend to deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
