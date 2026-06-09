import React from 'react';

function About() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <div className="relative p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-purple inline-block">Hi!</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
            I'm a Master of Computer Science student at Bina Nusantara University with a strong passion for building scalable and
            high-performing applications. My expertise spans full-stack development, encompassing practical knowledge of
            database, front-end, and back-end technologies.
          </p>

          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500 inline-block">About Me</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
            <p>
              Currently, as an <span className="font-semibold text-white">Application Developer at PT InfraCom Technology</span>, I build end-to-end applications 
              using the <span className="font-medium text-blue-300">Mendix</span> platform, craft responsive user interfaces with <span className="font-medium text-brand-cyan">ReactJS, NextJS, and VueJS</span>, and 
              develop robust back-end services and APIs utilizing <span className="font-medium text-brand-yellow">FastAPI and Golang</span>. I also maintain internal developer workspace environments and leverage tools like <span className="font-medium text-green-400">n8n</span> to build automated AI chatbots.
            </p>
            <p>
              My foundational experience includes a valuable tenure as a <span className="font-semibold text-white">Global Custom Application Support Intern at PT Freeport Indonesia</span>. In this role, I debugged and optimized enterprise applications 
              across multiple layers utilizing <span className="font-medium text-purple-400">.NET Core</span>, <span className="font-medium text-red-400">Microsoft SQL Server</span>, and <span className="font-medium text-blue-500">Microsoft Azure</span>. This experience 
              significantly enhanced my capacity to resolve challenging system issues and ensure flawless application performance.
            </p>
            <p>
              To stay at the forefront of the industry, I continuously pursue professional development. I have earned numerous certifications, particularly in <span className="font-semibold text-white">Oracle Cloud Infrastructure (OCI)</span>—including Developer, Architect, and Generative AI Professional credentials. Additionally, I hold certifications as a <span className="font-medium text-blue-300">Mendix Intermediate Developer</span> and <span className="font-medium text-blue-500">IBM IT Scrum Master</span>, demonstrating my commitment to both technical excellence and agile project management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;