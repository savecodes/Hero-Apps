import { useParams } from "react-router";
import useAppsData from "../Hooks/useAppsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import Container from "../Components/Container";

import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useAppsData();

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-20 text-red-500">
        Error loading app data
      </div>
    );

  const app = apps?.find((dApps) => String(dApps.id) === id);
  if (!app) return <div className="text-center py-20">App not found</div>;

  const ratingData = app?.ratings || [];
  const maxRating = Math.max(...ratingData.map((r) => r.count));

  const handleInstall = () => {
    const existsApps = JSON.parse(localStorage.getItem("Apps"));
    let updatedApps = [];
    if (existsApps) {
      const isDuplicate = existsApps.some((a) => a.id === app.id);
      if (isDuplicate) return alert("Sorry");
      updatedApps = [...existsApps, app];
    } else {
      updatedApps.push(app);
    }
    localStorage.setItem("Apps", JSON.stringify(updatedApps));
  };

  const installSize = `${app.size} MB`;

  return (
    <Container>
      <div className="py-8 md:py-12">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* App Icon */}
            <div className="flex-shrink-0">
              <img
                src={app.image}
                alt={app.title}
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-md"
              />
            </div>

            {/* App Info */}
            <div className="flex-grow w-full">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {app.title}
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                Developed by{" "}
                <span className="text-blue-600 font-medium">
                  {app.companyName}
                </span>
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6 text-center">
                <div className="flex flex-col items-center">
                  <img
                    src={downloadImg}
                    alt="Downloads"
                    className="w-6 h-6 mb-2"
                  />
                  <p className="text-gray-500 text-xs mb-1">Downloads</p>
                  <p className="text-green-600 text-base font-semibold">
                    {app.downloads >= 1000000
                      ? `${(app.downloads / 1000000).toFixed(1)}M`
                      : app.downloads >= 1000
                      ? `${(app.downloads / 1000).toFixed(1)}K`
                      : app.downloads}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src={ratingImg} alt="Ratings" className="w-6 h-6 mb-2" />
                  <p className="text-gray-500 text-xs mb-1">Average Rating</p>
                  <p className="text-orange-500 text-base font-semibold">
                    {app.ratingAvg}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src={reviewImg} alt="Reviews" className="w-6 h-6 mb-2" />
                  <p className="text-gray-500 text-xs mb-1">Total Reviews</p>
                  <p className="text-purple-600 text-base font-semibold">
                    {app.reviews >= 1000000
                      ? `${(app.reviews / 1000000).toFixed(1)}M`
                      : app.reviews >= 1000
                      ? `${(app.reviews / 1000).toFixed(1)}K`
                      : app.reviews}
                  </p>
                </div>
              </div>

              {/* Install Button */}
              <button
                onClick={handleInstall}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
              >
                Install Now ({installSize})
              </button>
            </div>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Ratings
          </h2>

          <div className="space-y-4">
            {ratingData.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-16 text-right">
                  {item.name}
                </span>

                <div className="flex-grow" style={{ height: "32px" }}>
                  <ResponsiveContainer width="100%" height={32}>
                    <BarChart
                      data={[item]}
                      layout="horizontal"
                      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    >
                      <XAxis type="number" domain={[0, maxRating]} hide />
                      <YAxis type="category" dataKey="name" hide />
                      <Tooltip
                        cursor={false}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm">
                                <p className="font-semibold">
                                  {payload[0].payload.name}
                                </p>
                                <p className="text-gray-200">
                                  Reviews: {payload[0].value.toLocaleString()}
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="count" radius={[4, 4, 4, 4]} barSize={32}>
                        <Cell
                          fill={
                            index === 4
                              ? "#f97316"
                              : index === 3
                              ? "#fb923c"
                              : index === 2
                              ? "#fdba74"
                              : index === 1
                              ? "#fed7aa"
                              : "#ffedd5"
                          }
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <span className="text-sm text-gray-600 w-24 text-right">
                  {item.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Description
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {app.description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AppsDetails;
