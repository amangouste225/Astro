import { Menu } from "./Menu";

const menu = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const Nav = () => {
  return (
    <div className="border-b fixed w-full z-50">
      <div className="wrapper flex justify-between items-center h-20">
        <div className="logo text-logo font-black capitalize">Amangoua A.</div>
        <div className="nav">
          <Menu />
        </div>
      </div>
    </div>
  );
};
