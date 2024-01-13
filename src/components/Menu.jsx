export const Menu = ({ isActive, setisActive }) => {
  return (
    <button
      className={`${isActive ? "menu open" : "menu active"} lg:text-btn`}
      onClick={() => setisActive(!isActive)}
    >
      <div className="label">
        <span>Menu</span>
      </div>
      <span className="icon"></span>
    </button>
  );
};
