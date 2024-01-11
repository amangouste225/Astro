import { Menu } from "./Menu";

const menu = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const Nav = () => {
  return (
    <div className="border-b fixed z-50 left-0 right-0 top-0 bg-white">
      <div className="wrapper flex justify-between items-center h-20">
        <div className="logo text-logo font-black capitalize">Amangoua A.</div>
        <div className="nav flex gap-5">
          <button className=" border-black  border-2 font-semibold uppercase px-10 rounded-full resume">
            Resume
          </button>
          <Menu />
        </div>
      </div>
    </div>
  );
};
