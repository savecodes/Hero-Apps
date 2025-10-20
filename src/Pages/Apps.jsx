import React, { useState } from "react";
import Container from "../Components/Container";
import { Search } from "lucide-react";
import useAppsData from "../Hooks/useAppsData";
import AllAppsCard from "../Components/AllAppsCard";

const Apps = () => {
  const apps = useAppsData();
  const sApps = Array.isArray(apps.apps) ? apps.apps : [];

  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? sApps.filter((app) => app.title?.toLowerCase().includes(term))
    : sApps;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Container>
        <div className="py-8 sm:py-12 lg:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Our All Applications
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            {/* Apps Counter */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 flex-shrink-0">
             Apps Found ({searchedApps.length})
            </h2>
            
            {/* Search Input */}
            <div className="relative w-full sm:w-auto sm:max-w-xs md:max-w-sm lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="search Apps"
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* All Apps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-8">
          {searchedApps.length > 0 ? (
            searchedApps.map((app) => (
              <AllAppsCard key={app.id} app={app} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No apps found matching "{search}"
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Apps;