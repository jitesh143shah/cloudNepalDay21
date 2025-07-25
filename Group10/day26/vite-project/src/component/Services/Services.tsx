import { ServicesLinks } from "../../constants/ServicesLinks";

const Services = () => {
  return (
    <>
      <span id="services" className="duration-700"></span>
      <div className="w-[100%] h-[100%] p-10 bg-slate-300 flex justify-center items-center">
        <div className="container   ">
          <div
            className="flex justify-center items-center mb-12 text-primary
          font-mono text-6xl dark:text-gray-900"
          >
            Plan of Action of Fitness!
          </div>
          <div
            className=" grid grid-cols-1 sm:grid-cols-2
           gap-10 py-3 justify-around w-[100%]  "
          >
            {ServicesLinks.map(
              ({ iconSer: IconSer, durationList, facility, packageName }) => (
                <div className="relative">
                  <div
                    className="flex flex-col  space-y-2 shadow-xl/30
                   bg-primary-two/70 dark:bg-primary dark:text-white
                   justify-center items-center  rounded-2xl px-10 py-10 h-full"
                  >
                    <p
                      className=" flex justify-center items-center
                     font-bold bg-blue-900 dark:bg-blue-700 text-2xl rounded-t-2xl
                     text-white z-0 w-full pt-5 pb-2 px-3 mt-7 relative"
                    >
                      {durationList}
                      <IconSer
                        className="absolute z-[-10] top-[-60px]  text-7xl text-slate-200
                    font-extrabold hover:text-white border-4 rounded-4xl
                    border-dashed px-2.5 py-2.5 "
                      />
                    </p>
                    <div className="border-2 rounded-b-3xl h-full space-y-3 p-5 bg-primary/20 border-dashed w-full">
                      <p className="flex text-3xl justify-center font-bold w-full items-center text-center">
                        {packageName}
                      </p>
                      <>
                        {facility.map((item, i) => (
                          <li className="text-white text-2xl" key={i}>
                            {item}
                          </li>
                        ))}
                      </>
                    </div>
                  </div>
                </div>
              )
            )}
            {/* <ul>
              {ServicesLinks.map((data, index) => (
                <li key={index}>{data.facility[0]}</li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
