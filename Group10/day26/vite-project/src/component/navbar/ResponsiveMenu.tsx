import { NavLinks } from "../../constants/NavLinks";
import { logo } from "../../images";

const ResponsiveMenu = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed top-0  h-screen w-[75%] dark:bg-gray-800 bg-gray-400
      sm:hidden flex flex-col justify-between px-8 py-6 pt-16 z-50`}
    >
      <div>
        <img src={logo} alt="logo" className="w-10" />
        <ul>
          {NavLinks.map((data) => (
            <li key={data.id} className="py-2">
              <a href={data.link} className="  font-display capitalize  ">
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
