import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section id="navbar">
        <div className="w-full justify-between bg-pastel-700 py-6 px-4 lg:flex lg:px-[150px] items-center">
          <div className="flex justify-between text-2xl font-bold text-slate-700 lg:w-2/4 items-center">
            <div>Syn Coder</div>
            <div className="lg:hidden text-3xl" onClick={() => setToggle(!toggle)}>
              <i
                className={`fa-solid fa-bars ${toggle ? "hidden" : "block"}`}
              ></i>
              <i
                className={`fa-solid fa-xmark ${!toggle ? "hidden" : "block"}`}
              ></i>
            </div>
          </div>
          <ul
            className={`space-y-3 mt-4 lg:mt-0 py-4 text-slate-600 lg:flex lg:w-2/4 lg:justify-end lg:space-x-20 lg:space-y-0 lg:pt-0 ${
              !toggle ? "hidden" : "block"
            } border-t lg:border-none`}
          >
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
