import React from "react";

const Project = () => {
  return (
    <>
      <section id="project">
        <div className="w-full bg-pastel-600 lg:px-[150px] px-4 pb-10">
          <p className="mb-10 lg:text-center text-3xl font-semibold text-slate-700 pt-10 lg:pt-0">
            My <span className="text-pastel-900">Project</span>
          </p>
          <div className="lg:grid w-full lg:grid-cols-3 lg:gap-3 bg-pastel-1000 py-10 px-10 space-y-5 lg:space-y-0 flex flex-col justify-center rounded-xl">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-pastel-600 lg:w-[90%]">
              <img
                src="images/project/project-1.png"
                alt="project"
                className="lg:h-[500px] w-full"
              />
              <div className="px-4 py-6">
                <p className="text-slate-600">Simple landing page menggunakan ReactJS dan Tailwind CSS</p>
                <button className="bg-pastel-400 w-full py-2 px-4 mt-4 rounded-full text-slate-800">
                  <a href="https://company-profile-snowy.vercel.app/">
                    Kunjungi Web
                  </a>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-pastel-600 lg:w-[90%]">
              <img
                src="images/project/project-2.jpeg"
                alt="project"
                className="lg:h-[500px] h-[200px] w-[100%]"
              />
              <div className="px-4 py-6">
                <p className="text-slate-600">Simple landing page menggunakan Tailwind CSS</p>
                <button className="bg-pastel-400 w-full py-2 px-4 mt-4 rounded-full text-slate-800">
                  <a href="https://syaefulannas45.github.io/profile">
                    Kunjungi Web
                  </a>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-pastel-600 lg:w-[90%]">
              <img
                src="images/project/project-1.png"
                alt="project"
                className="lg:h-[500px] w-full"
              />
              <div className="px-4 py-6">
                <p className="text-slate-600">Simple landing page menggunakan ReactJS dan Tailwind CSS</p>
                <button className="bg-pastel-400 w-full py-2 px-4 mt-4 rounded-full text-slate-800">
                  <a href="https://company-profile-snowy.vercel.app/">
                    Kunjungi Web
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
