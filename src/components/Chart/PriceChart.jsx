import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import moment from "moment";
import PropTypes from "prop-types";

const PriceChart = ({ duration, data: quotesData, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const getLabelFormatter = () => {
    if (duration === "day") {
      return (value) => moment(value).format("MMMM Do YYYY, HH:mm");
    } else {
      return (value) => moment(value).format("MMMM Do YYYY");
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={200}
        height={60}
        data={quotesData}
        margin={{
          top: 50,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id="strokeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff8f17" />
            <stop offset="100%" stopColor="#ffc843" />
          </linearGradient>
        </defs>
        <Tooltip
          labelFormatter={getLabelFormatter()}
          formatter={(value) => [`$${value}`, `Price`]}
        />
        <XAxis
          dataKey="date"
          tickFormatter={(value) => moment(value).format("MMMM Do YY")}
          hide
        />

        <Area
          type="monotone"
          dataKey="price"
          stroke="url(#strokeGradient)"
          strokeWidth={4}
          activeDot={{
            stroke: "rgba(255, 164, 39, 0.26)",
            strokeWidth: 10,
            r: 8,
          }}
          fill="rgba(250, 157, 33, 0.08)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

PriceChart.propTypes = {
  duration: PropTypes.string,
  data: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

export default PriceChart;
