import "./header.scss";
import Overlay from "../Overlay";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgEditFlipH } from "react-icons/cg";
import { CiSquareInfo } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleMenuToggle = (event) => {
    setIsOverlayOpen(!isOverlayOpen);
    setIsMenuOpen(!isMenuOpen);
    const buttonRect = event.target.getBoundingClientRect();
    const rightOffset = window.innerWidth - buttonRect.right;
    setMenuPosition({ top: buttonRect.bottom + 10, right: rightOffset });
  };
  const menuItems = [
    { name: "Edit", icon: <CgEditFlipH /> },
    { name: "Courier info", icon: <CiSquareInfo /> },
    { name: "Share", icon: <RiShare2Line /> },
    { name: "Remove", icon: <IoIosRemoveCircleOutline /> },
  ];
  return (
    <header>
      <button type="button" aria-label="Go back" className="button-icon">
        <MdOutlineArrowBackIos />
      </button>
      <h1>Bitcoin Wallet</h1>
      <button
        type="button"
        aria-label="Menu"
        className="button-icon"
        onClick={handleMenuToggle}
      >
        <HiOutlineDotsVertical />
      </button>
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)}>
        <div
          className="menu-list"
          style={{
            position: "absolute",
            top: menuPosition.top,
            right: menuPosition.right,
            backgroundColor: "white",
          }}
        >
          <ul>
            {menuItems.map((x) => (
              <li key={x.name}>
                <button type="button" className="w-full button-icon">
                  {x.name} {x.icon}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Overlay>
    </header>
  );
};

export default Header;
