import bannerImg from "../assets/hero.png";
import Container from "./Container";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-white">
      <Container>
        {/* Hero Text */}
        <div className="text-center pt-12 md:pt-20 px-4 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold pb-4 md:pb-6 leading-snug">
            We Build <br />
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto pb-6 md:pb-8">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pb-6">
            <button className="btn px-6 py-3 text-base sm:text-lg">
              <FaGooglePlay className="text-2xl" />
              Google Play
            </button>
            <button className="btn px-6 py-3 text-base sm:text-lg">
              <FaApple className="text-2xl" />
              App Store
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Hero"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </Container>

      {/* Trusted Stats */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-8 md:py-12">
        <Container>
          <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
            Trusted by Millions, Built for You
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {/* Total Downloads */}
            <div>
              <p className="text-white text-sm md:text-base">Total Downloads</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                29.6M
              </h2>
              <p className="text-white text-sm md:text-base">
                21% more than last month
              </p>
            </div>

            {/* Total Reviews */}
            <div>
              <p className="text-white text-sm md:text-base">Total Reviews</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                906K
              </h2>
              <p className="text-white text-sm md:text-base">
                46% more than last month
              </p>
            </div>

            {/* Active Apps */}
            <div>
              <p className="text-white text-sm md:text-base">Active Apps</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                132+
              </h2>
              <p className="text-white text-sm md:text-base">
                31 more will Launch
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
