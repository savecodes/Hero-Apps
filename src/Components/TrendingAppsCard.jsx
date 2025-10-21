import React from "react";
import { Star } from "lucide-react";
import { NavLink } from "react-router";

const TrendingAppsCard = ({ tdApp }) => {
  const { id, image, title } = tdApp;
  return (
    <NavLink to={`/app-details/${id}`}>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full p-4"
          />
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-1 truncate">
            {title}
          </h4>
          <p className="text-sm text-gray-500 mb-2 truncate">
            {tdApp.companyName}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-green-600 text-sm font-medium">
              {tdApp.downloads >= 1000000
                ? `${(tdApp.downloads / 1000000).toFixed(1)}M`
                : tdApp.downloads >= 1000
                ? `${(tdApp.downloads / 1000).toFixed(1)}K`
                : tdApp.downloads}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">{tdApp.ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default TrendingAppsCard;
