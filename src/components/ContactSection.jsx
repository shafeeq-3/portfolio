import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#FAFAF9] py-16 lg:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="max-w-4xl space-y-8">
          <div>
            <h2 className="text-[28px] font-bold text-stone-900 mb-4">
              Have a project in mind?
            </h2>
            <p className="text-[17px] text-stone-700 leading-[1.65]">
              If you need a full-stack web application, business website, or help improving an existing project, let's discuss it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="mailto:muhammadshafeeq4547@gmail.com"
              className="text-[16px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
            >
              Email me →
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-shafeeq-full-stack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
