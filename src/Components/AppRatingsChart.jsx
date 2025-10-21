// AppRatingsChart.jsx - নতুন ভার্সন
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
  LabelList,
} from "recharts";

const colors = ["#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316"];

const AppRatingsChart = ({ ratingData }) => {
  const maxCount = Math.max(...ratingData.map(item => item.count));

  return (
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
                margin={{ top: 0, right: 20, bottom: 0, left: 0 }}
              >
                <XAxis 
                  type="number" 
                  domain={[0, maxCount]} 
                  hide 
                />
                <YAxis type="category" dataKey="name" hide />
                <Tooltip
                  cursor={false}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm">
                          <p className="font-semibold">{payload[0].payload.name}</p>
                          <p className="text-gray-200">
                            Reviews: {payload[0].value.toLocaleString()}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="count" 
                  radius={[4, 4, 4, 4]} 
                  barSize={32}
                  fill={colors[index % colors.length]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <span className="text-sm text-gray-600 w-24 text-right">
            {item.count.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AppRatingsChart;