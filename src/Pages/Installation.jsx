import { useEffect, useState } from "react";
import Container from "../Components/Container";
import InstalledAppsCard from "../Components/InstalledAppsCard";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("Apps"));
    if (installedApps) setInstalled(installedApps);
  }, []);

  //   Short By Function
  const sortedApps = (() => {
    if (sortBy === "downloads-asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortBy === "downloads-desc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  })();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Container>
        <div className="py-8 sm:py-12 lg:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Your Installed Apps
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Search Section */}

        <div className="mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Apps Counter */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center sm:text-left">
              ({sortedApps.length}) Apps Found
            </h2>

            {/* Search Input */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <label
                    htmlFor="sort"
                    className="text-gray-700 text-sm sm:text-base font-medium"
                  >
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 bg-white text-gray-700 rounded-lg px-3 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="default">Default</option>
                    <option value="downloads-asc">
                      Downloads (High → Low)
                    </option>
                    <option value="downloads-desc">
                      Downloads (Low → High)
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installed Apps Card */}
        <div>
          {sortedApps.map((iApps) => {
            return (
              <InstalledAppsCard
                key={iApps.id}
                iApps={iApps}
                setInstalled={setInstalled}
              ></InstalledAppsCard>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Installation;
