import "./index.scss";
import Action from "./Action";
import { FaDollarSign } from "react-icons/fa";
const Index = () => {
  const actions = [
    {
      text: "Buy BTC",
      icon: <FaDollarSign />,
      colors: ["#17c8fc", "#1d72f1"],
    },
    {
      text: "Sell BTC",
      icon: <FaDollarSign />,
      colors: ["#ff677c", "#fb23a2"],
    },
  ];
  return (
    <div className="actions-container">
      {actions.map((a, i) => (
        <div key={i} className="card w-full grid">
          <Action text={a.text} icon={a.icon} colors={a.colors} />
        </div>
      ))}
    </div>
  );
};

export default Index;
