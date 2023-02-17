import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="bg-pastel-600 pt-[130px] lg:pt-0">
        <div className=" flex h-screen w-full flex-col-reverse items-center  px-4 lg:flex-row lg:px-[150px]">
          <div className="relative lg:w-2/4">
            <img
              src="images/blob.svg"
              alt="blob"
              className="absolute lg:left-[400px] h-[300px] w-[300px] top-20 lg:top-0"
            />
            <p className="text-4xl font-bold text-slate-700 pt-4 lg:pt-0">
              Hello, Im <span className="text-pastel-900">Syaeful Annas</span>
            </p>
            <p className="relative z-10 mt-6 w-[90%] lg:w-[80%] leading-8 text-slate-600">
              I am a Frontend Developer, I like to learn new things. and I'm
              also studying the field of Backend Development. <br />
              Pleased to meet you! , I will try to share some of the project
              source code that I have made. Done recharge, lets be productive
              again!
            </p>
            <p className="mt-10 text-2xl font-semibold text-slate-700">
              Contact <span className="text-pastel-900">Me</span>
            </p>
            <div className="mt-4 flex w-full space-x-6">
              <div className="rounded-full bg-pastel-400 px-4 py-2">
                <a href="https://instagram.com/syfl.ans">
                  <i class="fa-brands fa-instagram text-red-600"></i>
                </a>
              </div>
              <div className="rounded-full bg-pastel-400 px-4 py-2">
                <a href="https://github.com/syaefulannas45">
                  <i class="fa-brands fa-github text-slate-900"></i>
                </a>
              </div>
              <div className="rounded-full bg-pastel-400 px-4 py-2">
                <a href="https://www.linkedin.com/in/syaeful-annas/">
                  <i class="fa-brands fa-linkedin text-blue-700"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:w-2/4">
            <img
              src="images/about.jpg"
              alt="me"
              className="relative z-10 h-[300px] w-[300px] rounded-full lg:h-[400px] lg:w-[400px]"
            />
            <img
              src="images/blob2.svg"
              alt="blob"
              className="absolute right-0 top-[-100px] hidden h-[200px] w-[200px] lg:block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
