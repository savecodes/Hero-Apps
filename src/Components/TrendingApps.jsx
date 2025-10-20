import { NavLink } from "react-router";
import useAppsData from "../Hooks/useAppsData";
import Container from "./Container";
import TrendingAppsCard from "./TrendingAppsCard";

const TrendingApps = () => {
  const apps = useAppsData();
  const trendingApps = apps.apps.slice(0, 8);
  // console.log(trendingApps);
  return (
    <div>
      <Container>
        <div className="py-8 pb-4 text-center">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-black mb-4">
            Trending Apps
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto md:pb-8">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* Trending Apps Data Start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingApps.map((tdApp) => {
            return (
              <TrendingAppsCard key={tdApp.id} tdApp={tdApp}></TrendingAppsCard>
            );
          })}
        </div>
        {/* Trending Apps Data End */}
        <div className="flex justify-center py-8 px-4">
          <NavLink
            to={"/apps"}
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-white text-base sm:text-lg md:text-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-xs text-center"
          >
            Show All
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default TrendingApps;
