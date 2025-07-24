import { hero } from "../../images";

const Hero = () => {
  return (
    <div className="relative   ">
      <img
        src={hero}
        alt={hero}
        className="absolute bg-cover opacity-60 dark:opacity-70 w-full object-cover h-full"
      />
      <div className="relative  top-0 flex flex-col justify-center items-center ">
        <div className="container min-h-[620px]  min-w-full flex justify-center items-center flex-col">
          <div className="w-full text-center">
            <h3 className="text-primary ">Start Your Fitness</h3>
            <h1 className="font-extrabold font-mono  text-5xl flex flex-col justify-center items-center ">
              Your Fitness <p> Journey </p> Begins!
            </h1>
            <h4 className="text-purple-600 mt-3">
              The body acheive that mind belives
            </h4>
            <a href="#">
              <button
                className="bg-primary-two px-6 py-3
          rounded-3xl mt-3 cursor-pointer hover:bg-primary           hover:text-white"
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
