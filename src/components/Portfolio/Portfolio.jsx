import "./portfolio.scss";
import IconGradient from "../GradientCircle/GradientCircle";
import Action from "../Trade/Action";
import { FaDollarSign } from "react-icons/fa";
import { TbChevronCompactDown, TbChevronCompactUp } from "react-icons/tb";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import { useState } from "react";
const Portfolio = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
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
    <div className="portfolio card">
      <div className="portfolio__header flex">
        <div className="flex">
          <IconGradient
            icon={<MdOutlineCurrencyBitcoin />}
            colors={["#ffc843", "#ff8f17"]}
          />
          <p className="coin-name">Bitcoin</p>
        </div>
        <p className="text-secondary">BTC</p>
      </div>
      <h4>3.529020 BTC</h4>
      <div className="flex">
        <p className="text-secondary" style={{ fontSize: "19px" }}>
          $19.153 USD
        </p>
        <p className="rate-change button-text">- 2.32%</p>
      </div>
      <div className={`dropdown-content ${dropdownOpen ? "active" : ""}`}>
        <div className="flex">
          {actions.map((a, i) => (
            <Action key={i} text={a.text} icon={a.icon} colors={a.colors} />
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Expand"
        style={{ display: "block", margin: "0 auto" }}
        className="button-icon"
        onClick={toggleDropdown}
      >
        {dropdownOpen ? (
          <TbChevronCompactUp size={30} />
        ) : (
          <TbChevronCompactDown size={30} />
        )}
      </button>
    </div>
  );
};

export default Portfolio;
