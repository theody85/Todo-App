import { useState } from "react";

const NavTailwind = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <div>
      {/* Original navbar  */}
      <div className="items-center justify-between hidden md:flex">
        <span>Logo</span>
        <div className="flex gap-12 justify-between items-center">
          <span>Home</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <button>Signin</button>
      </div>

      <div className="relative md:hidden flex">
        {/* Custome hamburger icon. Can replace with an actual icon */}
        <div
          className="flex flex-col gap-y-1 "
          onClick={() => setOpenHamburger(true)}
        >
          <span className="w-4 h-1 bg-black rounded-xl" />
          <span className="w-4 h-1 bg-black rounded-xl" />
          <span className="w-4 h-1 bg-black rounded-xl" />
        </div>

        {openHamburger && (
          <div className="flex flex-col gap-y-4 absolute top-0 right-0 bg-black/80 text-white px-12 py-8">
            {/* Put close icon here */}
            <span onClick={() => setOpenHamburger(false)} className="self-end">
              X
            </span>

            <div className="flex flex-col gap-y-4">
              {/* Put nav links here to display in sidebar */}
              <span>Home</span>
              <span>About Us</span>
              <span>Contact Us</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavTailwind;
