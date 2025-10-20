import { Star } from "lucide-react";
import React from "react";

const AllAppsCard = ({ app }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="object-contain w-full h-full p-4"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-1 truncate">
          {app.title}
        </h4>
        <p className="text-sm text-gray-500 mb-2 truncate">
          {app.companyName}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-green-600 text-sm font-medium">
            {app.downloads >= 1000000
              ? `${(app.downloads / 1000000).toFixed(1)}M`
              : app.downloads >= 1000
              ? `${(app.downloads / 1000).toFixed(1)}K`
              : app.downloads}
          </span>
          <span className="text-gray-500 text-xs mx-1">app</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppsCard;