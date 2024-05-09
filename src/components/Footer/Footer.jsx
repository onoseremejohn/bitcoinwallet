import "./footer.scss";
import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { RiSettings5Fill } from "react-icons/ri";

const Footer = () => {
  const tabs = [
    { name: "Wallet", icon: <FaWallet /> },
    { name: "Activity", icon: <MdExplore /> },
    { name: "Notificatios", icon: <IoMdNotifications /> },
    { name: "Settings", icon: <RiSettings5Fill /> },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <footer>
      {tabs.map((t) => (
        <button
          key={t.name}
          type="button"
          aria-label={t.name}
          className={
            t.name === activeTab ? "button-icon active" : "button-icon"
          }
          onClick={() => handleTabClick(t.name)}
        >
          {t.icon}
        </button>
      ))}
    </footer>
  );
};

export default Footer;
