import React, { useState, useRef, useEffect } from "react";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const [active, setActive] = useState("en");

  const enRef = useRef(null);
  const arRef = useRef(null);
  const underlineRef = useRef(null);

  // Move underline to match width & position of active button
  useEffect(() => {
    const activeBtn = active === "en" ? enRef.current : arRef.current;
    const underline = underlineRef.current;

    if (activeBtn && underline) {
      underline.style.width = activeBtn.offsetWidth + "px";
      underline.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    }
  }, [active]);

  return (
    <div className="langToggleWrapper">
      <div className="langToggleContainer">
        <button
          ref={enRef}
          className={`langBtn ${active === "en" ? "active" : ""}`}
          onClick={() => setActive("en")}
        >
          English
        </button>

        <button
          ref={arRef}
          className={`langBtn ${active === "ar" ? "active" : ""}`}
          onClick={() => setActive("ar")}
        >
          Arabic
        </button>

        <div ref={underlineRef} className="underline"></div>
      </div>
    </div>
  );
};

export default LanguageToggle;
