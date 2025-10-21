import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const AppRatingsChart = ({ ratingData }) => {
  const colors = ["#FFA500", "#FFB84D", "#FFC966", "#FFD699", "#FFE5B4"];

  return (
    <div style={{ width: "100%", height: 300, minHeight: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratingData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" barSize={20}>
            {ratingData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingsChart;
