import "./index.scss";
import { useState, useEffect } from "react";
import PriceChart from "./PriceChart";
import { mockData } from "./mockData";
// import axios from "axios";
// import { rootURL } from "../../base";

// const coinId = "1";

// const getTimeStart = (duration) => {
//   switch (duration) {
//     case "day":
//       return moment().subtract(24, "hours").unix();
//     case "week":
//       return moment().subtract(7, "days").unix();
//     case "month":
//       return moment().subtract(1, "month").unix();
//     case "year":
//       return moment().subtract(1, "year").unix();
//     default:
//       return moment().subtract(24, "hours").unix();
//   }
// };

// const getInterval = (duration) => {
//   switch (duration) {
//     case "day":
//       return "15m";
//     case "week":
//       return "2h";
//     case "month":
//       return "12h";
//     case "year":
//       return "3d";
//     default:
//       return "15m";
//   }
// };

const Index = () => {
  const allDurations = ["day", "week", "month", "year"];
  const [duration, setDuration] = useState(allDurations[1]);
  const handleTabClick = (duration) => {
    setDuration(duration);
  };

  const [quotesData, setQuotesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        //  const endpoint = `${rootURL}v3/cryptocurrency/quotes/historical?id=${coinId}&convert=USD&time_start=${getTimeStart(
        //    duration
        //  )}&interval=${getInterval(duration)}`;
        // const response = await axios.get(endpoint, {
        //   headers: {
        //     "X-CMC_PRO_API_KEY": import.meta.env.VITE_CMC_API_KEY,
        //   },
        // });
        // const data = response.data.data.quotes;
        // const formattedData = data.map((quote) => ({
        //   timestamp: quote.timestamp,
        //   price: quote.quote.USD.price,
        // }));

        const formattedData = mockData[duration].map((x) => ({
          date: new Date(x.timestamp).getTime(),
          price: x.quote.USD.price.toFixed(2),
        }));
        // console.log(formattedData);
        setQuotesData(formattedData);

        const prices = formattedData.map((data) => data.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        setMinPrice(min);
        setMaxPrice(max);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [duration]);

  return (
    <>
      <div className="durations">
        {allDurations.map((d) => (
          <button
            type="button"
            key={d}
            className={d === duration ? "active button-text" : "button-text"}
            onClick={() => handleTabClick(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="card" style={{ position: "relative", height: 180 }}>
        <div className="boundary-price">
          <p>Lower: ${minPrice}</p>
          <p>Higher: ${maxPrice}</p>
        </div>
        <p className="currency-price">1 BTC = $5.483</p>
        <div className="price-chart">
          <PriceChart data={quotesData} loading={loading} error={error} />
        </div>
      </div>
    </>
  );
};

export default Index;
