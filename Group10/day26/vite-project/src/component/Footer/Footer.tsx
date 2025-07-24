import { NavLinks } from "../../constants/NavLinks";
import { Sociallinks } from "../../constants/Sociallinks";
import { logo } from "../../images";
// import { FooterLinks } from "../../constants/FooterLinks";

const Footer = () => {
  return (
    // <div>
    //   <div className=" flex justify-left bg-red-300 h-80">
    //     <div>
    //       <img src={logo} alt={logo} className=" left-30 h-20 z-index:0" />
    //       <ul>
    //         <li>
    //           <a
    //             href="#"
    //             className="flex flex-wrap justify-between gap-4 items-center hover:
    //           underline  hover:bg-primary-two hover:text-white p-1 rounded-2xl mt-1 "
    //           >
    //             <SiGmail />
    //             <span> jitesh143shah@gmail.com</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="flex flex-wrap  gap-4 items-center hover:
    //           underline  hover:bg-primary-two hover:text-white p-1 rounded-xl"
    //           >
    //             <FaLocationDot />
    //             <span>Tinkune</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="links flex justify-center items-center">
    //       <ul>
    //         {NavLinks.map((data) => (
    //           <li key={data.id} className="hover:bg-amber-800 p-2 rounded-2xl">
    //             <a className="capitalize text-white font-bold" href={data.link}>
    //               {data.name}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <footer className="bg-gray-100 dark:bg-gray-500 dark:text-white font-semibold">
      <div className="container">
        <div className="grid  grid-cols-3 items-center">
          <div className="flex  items-center justify-center gap-3">
            <img src={logo} alt={logo} className="w-16" />
            {Sociallinks.map(({ icons: Icon, href }, index) => (
              <a key={index} href={href} target="_blank">
                <Icon className="text-2xl hover:text-primary duration-300 m-1" />
              </a>
            ))}
          </div>
          <div className="hidden sm:flex curson">+977 9810474665</div>
          <ul
            className="hidden sm:flex
         hover:text-primary-two gap-8 m-3"
          >
            {NavLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="capitalize text-lg font-semibold
                duration-300 font-openSans              "
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
