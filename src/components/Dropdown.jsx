import { useState, useEffect, useRef } from "react";
import "../styles/dropdown.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const activityLevels = [
  { value: 1.2, label: "Sedanter, hareketsiz iş ve hayat" },
  { value: 1.375, label: "Hareketsiz iş ve haftada 1-2 seans spor" },
  { value: 1.55, label: "Orta aktivite, haftada 2-3 antrenman" },
  { value: 1.725, label: "Hareketli iş ve haftada 4-5 seans spor" },
  {
    value: 1.9,
    label: "Aşırı hareketli beden işi veya 5-7 seans çok yoğun spor",
  },
];

export default function CustomSelect({ setActivity }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(activityLevels[2]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option) => {
    setSelected(option);
    setActivity(option.value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selected.label}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {activityLevels.map((option) => (
            <div
              key={option.value}
              className={`dropdown-item ${
                option.value === selected.value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
