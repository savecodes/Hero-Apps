import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";

const InstalledAppsCard = ({ iApps }) => {


  const handleUninstall = (id) => {
    const existsApps = JSON.parse(localStorage.getItem("Apps"));
    let updatedApps = existsApps.filter((a) => a.id !== id);

    localStorage.setItem("Apps", JSON.stringify(updatedApps));
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-all duration-200 p-4 sm:p-5 rounded-lg mb-4 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={iApps.image}
          alt={iApps.title}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover bg-gray-300"
        />

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {iApps.title}
          </h3>
          <div className="flex items-center text-sm sm:text-base text-gray-600 mt-1 gap-3">
            <div className="flex items-center gap-1 text-green-600">
              <img src={downloadImg} alt="Downloads" className="w-4 h-4" />
              <span>{(iApps.downloads / 1000000).toFixed(1)}M</span>
            </div>
            <div className="flex items-center gap-1 text-orange-500">
              <img src={ratingImg} alt="Rating" className="w-4 h-4" />
              <span>{iApps.ratingAvg}</span>
            </div>
            <span className="text-gray-700">{iApps.size} MB</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstall(iApps.id)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm sm:text-base font-medium"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppsCard;
