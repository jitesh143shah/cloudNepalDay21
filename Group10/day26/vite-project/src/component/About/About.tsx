import { bannerImg } from "../../images";

const About = () => {
  return (
    <>
      <span id="about"></span>
      <div className="py-10 bg-amber-100 dark:bg-black/50 dark:text-white">
        <div className="container">
          <div className="grid grid-col-1 sm:grid-cols-2 gap-5">
            <div className="">
              <img src={bannerImg} alt={bannerImg} />
            </div>
            <div className="space-y-4 sm:space-y-6 space-x-3 gap-3">
              <div className="flex gap-4 items-center">
                <h1 className="text-primary-two/70 text-7xl">01</h1>
                <div className="leading-6">
                  <p className="text-secondary capitalize">global fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About Us</h1>
                </div>
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus illum placeat totam quisquam excepturi quos quis
                architecto sapiente dicta, eius animi consectetur atque tempore,
                inventore nulla accusamus ratione ducimus impedit esse dolorum
                nemo cum assumenda in tenetur. Doloribus, dolores aut animi
                cumque magni laborum velit reprehenderit, eum explicabo minus
                voluptate!
              </p>
              <button
                className="px-15 py-5 rounded-3xl border-2
              border-primary hover:text-white duration-300 hover:bg-primary-two"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
